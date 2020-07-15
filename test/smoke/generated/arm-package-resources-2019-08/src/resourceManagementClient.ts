/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as operations from "./operations";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import { ResourceManagementClientContext } from "./resourceManagementClientContext";
import { ResourceManagementClientOptionalParams } from "./models";

class ResourceManagementClient extends ResourceManagementClientContext {
  /**
   * Initializes a new instance of the ResourceManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId The ID of the target subscription.
   * @param options The parameter options
   */
  constructor(
    credentials: coreHttp.TokenCredential | coreHttp.ServiceClientCredentials,
    subscriptionId: string,
    options?: ResourceManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.operations = new operations.Operations(this);
    this.deployments = new operations.Deployments(this);
    this.providers = new operations.Providers(this);
    this.resources = new operations.Resources(this);
    this.resourceGroups = new operations.ResourceGroups(this);
    this.tags = new operations.Tags(this);
    this.deploymentOperations = new operations.DeploymentOperations(this);
  }

  operations: operations.Operations;
  deployments: operations.Deployments;
  providers: operations.Providers;
  resources: operations.Resources;
  resourceGroups: operations.ResourceGroups;
  tags: operations.Tags;
  deploymentOperations: operations.DeploymentOperations;
}

// Operation Specifications

export {
  ResourceManagementClient,
  ResourceManagementClientContext,
  Models as ResourceManagementModels,
  Mappers as ResourceManagementMappers
};
export * from "./operations";