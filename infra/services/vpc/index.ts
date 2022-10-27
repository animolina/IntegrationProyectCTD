import { App, Stack, StackProps } from "aws-cdk-lib";
import { SubnetType, Vpc } from "aws-cdk-lib/aws-ec2";

export class VPCStack extends Stack {
  public readonly vpc: Vpc;

  constructor(scope: App, id: string, props?: StackProps) {
    super(scope, id, props);

    this.vpc = new Vpc(this, "proyecto-integrador-vpc", {
      cidr: "10.0.0.0/16",
      natGateways: 0,
      maxAzs: 3,
      subnetConfiguration: [
        {
          name: "public-subnet-1",
          subnetType: SubnetType.PUBLIC,
          cidrMask: 24,
        },
        {
          name: "isolated-subnet-1",
          subnetType: SubnetType.PRIVATE_ISOLATED,
          cidrMask: 28,
        },
      ],
    });
  }
}
