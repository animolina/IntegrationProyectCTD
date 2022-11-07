import { CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Distribution } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { Construct } from "constructs";

export class AssetsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const assetsBucket = new Bucket(this, "pi-bucket", {
      bucketName: "pi-assets-bucket",
      removalPolicy: RemovalPolicy.DESTROY,
    });

    const distribution = new Distribution(this, "pi-distribution", {
      defaultBehavior: {
        origin: new S3Origin(assetsBucket),
      },
    });

    new CfnOutput(this, "DistributionDomainName", {
      value: `https://${distribution.domainName}`,
      description: "Assets URL",
      exportName: "assetsUrl",
    });

    new CfnOutput(this, "AssetsBucketName", {
      value: assetsBucket.bucketName,
      description: "Assets Bucket Name",
      exportName: "assetsBucketName",
    });
  }
}
