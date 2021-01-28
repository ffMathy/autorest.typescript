/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as Models from "./models";
import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import { TokenCredential } from "@azure/core-auth";

const packageName = "@azure/multiapi-test";
const packageVersion = "1.0.0";

export class AutoRestParameterizedHostTestClientContext extends msRestAzure.AzureServiceClient {
  credentials: msRest.ServiceClientCredentials | TokenCredential;
  host?: string;

  /**
   * Initializes a new instance of the AutoRestParameterizedHostTestClient class.
   * @param credentials Credentials needed for the client to connect to Azure. The simplest
   * TokenCredential credential can be obtained as follows:
   * ```js
   * const { DefaultAzureCredential } = require("@azure/identity");
   * const credential = new DefaultAzureCredential();
   * ```
   * For more information about these credentials, see {@link
   * https://github.com/Azure/azure-sdk-for-js/tree/master/sdk/identity/identity#authenticating-with-the-defaultazurecredential}
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, options?: Models.AutoRestParameterizedHostTestClientOptions) {
    if (credentials == undefined) {
      throw new Error('\'credentials\' cannot be null.');
    }

    if (!options) {
      options = {};
    }
    if(!options.userAgent) {
      const defaultUserAgent = msRestAzure.getDefaultUserAgentValue();
      options.userAgent = `${packageName}/${packageVersion} ${defaultUserAgent}`;
    }

    super(credentials, options);

    this.host = 'host';
    this.acceptLanguage = 'en-US';
    this.longRunningOperationRetryTimeout = 30;
    this.baseUri = "http://{accountName}{host}";
    this.requestContentType = "application/json; charset=utf-8";
    this.credentials = credentials;

    if(options.host !== null && options.host !== undefined) {
      this.host = options.host;
    }
    if(options.acceptLanguage !== null && options.acceptLanguage !== undefined) {
      this.acceptLanguage = options.acceptLanguage;
    }
    if(options.longRunningOperationRetryTimeout !== null && options.longRunningOperationRetryTimeout !== undefined) {
      this.longRunningOperationRetryTimeout = options.longRunningOperationRetryTimeout;
    }
  }
}
