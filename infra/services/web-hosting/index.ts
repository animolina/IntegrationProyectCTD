import { CfnOutput, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Distribution, OriginAccessIdentity } from "aws-cdk-lib/aws-cloudfront";
import { S3Origin } from "aws-cdk-lib/aws-cloudfront-origins";
import {
  BlockPublicAccess,
  Bucket,
  BucketAccessControl,
  BucketEncryption,
} from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

export class WebHostingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const frontendBucket = new Bucket(this, "proyecto-integrador", {
      publicReadAccess: false,
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      accessControl: BucketAccessControl.PRIVATE,
      encryption: BucketEncryption.S3_MANAGED,
      removalPolicy: RemovalPolicy.DESTROY,
      autoDeleteObjects: true,
    });

    const bucketDeployment = new BucketDeployment(
      this,
      "proyecto-integrador-deployment",
      {
        sources: [Source.asset("../frontend/dist")],
        destinationBucket: frontendBucket,
      }
    );
    bucketDeployment.node.addDependency(frontendBucket);

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      "OriginAccessIdentity"
    );
    frontendBucket.grantRead(originAccessIdentity);

    const distribution = new Distribution(this, "pi-distribution", {
      defaultRootObject: "index.html",
      errorResponses: [
        { responsePagePath: "/index.html", httpStatus: 404 },
        { responsePagePath: "/index.html", httpStatus: 403 },
      ],
      defaultBehavior: {
        origin: new S3Origin(frontendBucket, { originAccessIdentity }),
      },
    });

    new CfnOutput(this, "DistributionDomainName", {
      value: `https://${distribution.domainName}`,
      description: "React App URL",
      exportName: "webAppUrl",
    });
  }
}
