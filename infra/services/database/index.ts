import {
  App,
  CfnOutput,
  Duration,
  RemovalPolicy,
  Stack,
  StackProps,
} from "aws-cdk-lib";
import {
  Instance,
  InstanceClass,
  InstanceSize,
  InstanceType,
  Port,
  SubnetType,
  Vpc,
} from "aws-cdk-lib/aws-ec2";
import {
  Credentials,
  DatabaseInstance,
  DatabaseInstanceEngine,
  MysqlEngineVersion,
} from "aws-cdk-lib/aws-rds";

interface DatabaseStackProps extends StackProps {
  vpc: Vpc;
  apiServerInstance: Instance;
}

export class DatabaseStack extends Stack {
  constructor(scope: App, id: string, props: DatabaseStackProps) {
    super(scope, id, props);

    const { vpc, apiServerInstance } = props;

    const dbInstance = new DatabaseInstance(this, "db-instance", {
      vpc,
      vpcSubnets: {
        subnetType: SubnetType.PRIVATE_ISOLATED,
      },
      engine: DatabaseInstanceEngine.mysql({
        version: MysqlEngineVersion.VER_8_0_30,
      }),
      instanceType: InstanceType.of(
        InstanceClass.BURSTABLE3,
        InstanceSize.MICRO
      ),
      credentials: Credentials.fromGeneratedSecret("databaseSecret"),
      multiAz: false,
      allocatedStorage: 100,
      maxAllocatedStorage: 105,
      allowMajorVersionUpgrade: false,
      autoMinorVersionUpgrade: true,
      backupRetention: Duration.days(0),
      deleteAutomatedBackups: true,
      removalPolicy: RemovalPolicy.DESTROY,
      deletionProtection: false,
      databaseName: "proyectoIntegradorDB",
      publiclyAccessible: false,
    });

    dbInstance.connections.allowFrom(apiServerInstance, Port.tcp(5432));

    new CfnOutput(this, "dbEndpoint", {
      value: dbInstance.instanceEndpoint.hostname,
    });

    new CfnOutput(this, "secretName", {
      value: dbInstance.secret?.secretName!,
    });
  }
}
