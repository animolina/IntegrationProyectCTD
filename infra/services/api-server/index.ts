import { App, CfnOutput, Stack, StackProps } from "aws-cdk-lib";
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
  UserData,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import { ManagedPolicy, Role, ServicePrincipal } from "aws-cdk-lib/aws-iam";

interface ApiServerStackProps extends StackProps {
  vpc: Vpc;
}

export class ApiServerStack extends Stack {
  public readonly apiServerInstance: Instance;

  constructor(scope: App, id: string, props: ApiServerStackProps) {
    super(scope, id, props);

    const { vpc } = props;

    const apiServerSG = new SecurityGroup(this, "apiserver-sg", {
      vpc,
    });

    apiServerSG.addIngressRule(
      Peer.anyIpv4(),
      Port.tcp(80),
      "Allow HTTP traffic from anywhere"
    );
    apiServerSG.addIngressRule(
      Peer.anyIpv4(),
      Port.tcp(443),
      "Allow HTTPS traffic from anywhere"
    );

    const userData = UserData.forLinux();
    userData.addCommands(
      "yum install -y nginx",
      "chkconfig nginx on",
      "service nginx start"
    );

    const SSM_AGENT_RPM =
      "https://s3.amazonaws.com/ec2-downloads-windows/SSMAgent/latest/linux_amd64/amazon-ssm-agent.rpm";
    userData.addCommands(
      `sudo yum install -y ${SSM_AGENT_RPM}`,
      "restart amazon-ssm-agent"
    );

    const role = new Role(this, "api-server-role", {
      assumedBy: new ServicePrincipal("ec2.amazonaws.com"),
    });
    role.addManagedPolicy(
      ManagedPolicy.fromAwsManagedPolicyName("AmazonSSMManagedInstanceCore")
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
      userData: userData,
      role: role,
    });

    new CfnOutput(this, "Instance ID", {
      value: this.apiServerInstance.instanceId,
    });
    new CfnOutput(this, "Instance Public ID", {
      value: this.apiServerInstance.instancePublicIp,
    });
    new CfnOutput(this, "Instance Hostname", {
      value: this.apiServerInstance.instancePublicDnsName,
    });
  }
}
