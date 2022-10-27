import { App, Stack, StackProps } from "aws-cdk-lib";
import {
  AmazonLinuxGeneration,
  AmazonLinuxImage,
  Instance,
  InstanceClass,
  InstanceSize,
  InstanceType,
  Peer,
  Port,
  SecurityGroup,
  SubnetType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";

interface APIServerStackProps extends StackProps {
  vpc: Vpc;
}

export class APIServerStack extends Stack {
  public readonly apiServerInstance: Instance;

  constructor(scope: App, id: string, props: APIServerStackProps) {
    super(scope, id, props);

    const { vpc } = props;

    const apiServerSG = new SecurityGroup(this, "apiserver-sg", {
      vpc,
    });

    apiServerSG.addIngressRule(
      Peer.anyIpv4(),
      Port.tcp(80),
      "allow HTTP traffic from anywhere"
    );

    this.apiServerInstance = new Instance(this, "ec2-instance", {
      vpc,
      vpcSubnets: {
        subnetType: SubnetType.PUBLIC,
      },
      securityGroup: apiServerSG,
      instanceType: InstanceType.of(
        InstanceClass.BURSTABLE2,
        InstanceSize.MICRO
      ),
      machineImage: new AmazonLinuxImage({
        generation: AmazonLinuxGeneration.AMAZON_LINUX_2,
      }),
      keyName: "apiserver-key-pair",
    });

    this.apiServerInstance.addUserData(
      "sudo su",
      "yum install -y httpd",
      "systemctl start httpd",
      "systemctl enable httpd",
      'echo "<h1>It works :)</h1>" > /var/www/html/index.html'
    );
  }
}
