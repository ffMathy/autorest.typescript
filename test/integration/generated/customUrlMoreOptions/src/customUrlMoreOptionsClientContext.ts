/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";
import { CustomUrlMoreOptionsClientOptionalParams } from "./models";

export class CustomUrlMoreOptionsClientContext extends coreClient.ServiceClient {
  dnsSuffix: string;
  subscriptionId: string;

  /**
   * Initializes a new instance of the CustomUrlMoreOptionsClientContext class.
   * @param subscriptionId The subscription id with value 'test12'.
   * @param options The parameter options
   */
  constructor(
    subscriptionId: string,
    options?: CustomUrlMoreOptionsClientOptionalParams
  ) {
    if (subscriptionId === undefined) {
      throw new Error("'subscriptionId' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: CustomUrlMoreOptionsClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "{vault}{secret}{dnsSuffix}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.subscriptionId = subscriptionId;

    // Assigning values to Constant parameters
    this.dnsSuffix = options.dnsSuffix || "host";
  }
}