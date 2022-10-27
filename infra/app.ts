#!/usr/bin/env node
import { App } from "aws-cdk-lib";
import { InfraServices } from "./services";

try {
  const app = new App();
  new InfraServices(app);
  app.synth();
} catch (err) {
  console.log(`Synth Error: ${(err as any).message}`);
  process.exit(1);
}
