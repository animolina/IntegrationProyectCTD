import { App, Environment } from "aws-cdk-lib";

import { ApiServerStack } from "./api-server";
import { DatabaseStack } from "./database";
import { VPCStack } from "./vpc";
import { WebHostingStack } from "./web-hosting";

const env: Environment = {
  account: "120800489421",
  region: "us-east-1",
};

export class InfraServices {
  public readonly vpcStack: VPCStack;
  public readonly apiServerStack: ApiServerStack;

  constructor(scope: App) {
    this.vpcStack = new VPCStack(scope, "VpcStack", { env });
    this.apiServerStack = new ApiServerStack(scope, "APIServerStack", {
      env,
      vpc: this.vpcStack.vpc,
    });
    new DatabaseStack(scope, "DatabaseStack", {
      env,
      vpc: this.vpcStack.vpc,
      apiServerInstance: this.apiServerStack.apiServerInstance,
    });
    new WebHostingStack(scope, "WebHostingStack", { env });
  }
}
