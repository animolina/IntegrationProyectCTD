import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { Bucket } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Construct } from "constructs";

export class WebHostingStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const frontendBucket = new Bucket(this, "proyecto-integrador", {
      websiteIndexDocument: "index.html",
      publicReadAccess: true,
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
  }
}
