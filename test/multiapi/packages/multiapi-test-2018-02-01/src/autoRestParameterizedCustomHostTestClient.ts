/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import TokenCredential from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AutoRestParameterizedCustomHostTestClientContext } from "./autoRestParameterizedCustomHostTestClientContext";


class AutoRestParameterizedCustomHostTestClient extends AutoRestParameterizedCustomHostTestClientContext {
  // Operation groups
  paths: operations.Paths;

  /**
   * Initializes a new instance of the AutoRestParameterizedCustomHostTestClient class.
   * @param credentials Credentials needed for the client to connect to Azure. The simplest
   * TokenCredential credential can be obtained as follows:
   * ```js
   * const { DefaultAzureCredential } = require("@azure/identity");
   * const credential = new DefaultAzureCredential();
   * ```
   * For more information about these credentials, see {@link
   * https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity#authenticating-with-the-defaultazurecredential}
   * @param subscriptionId The subscription id with value 'test12'.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string | TokenCredential, options?: Models.AutoRestParameterizedCustomHostTestClientOptions) {
    super(credentials, subscriptionId, options);
    this.paths = new operations.Paths(this);
  }
}

// Operation Specifications

export {
  AutoRestParameterizedCustomHostTestClient,
  AutoRestParameterizedCustomHostTestClientContext,
  Models as AutoRestParameterizedCustomHostTestModels,
  Mappers as AutoRestParameterizedCustomHostTestMappers
};
export * from "./operations";
