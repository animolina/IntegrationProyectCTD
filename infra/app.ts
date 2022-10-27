#!/usr/bin/env node
import "source-map-support/register";
import { App } from "aws-cdk-lib";
import { InfraServices } from "./services";

const app = new App();
new InfraServices(app);
