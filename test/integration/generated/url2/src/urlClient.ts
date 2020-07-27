/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as operations from "./operations";
import * as Models from "./models";
import { UrlClientContext } from "./urlClientContext";
import { UrlClientOptionalParams } from "./models";

class UrlClient extends UrlClientContext {
  /**
   * Initializes a new instance of the UrlClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: UrlClientOptionalParams) {
    super($host, options);
    this.get = new operations.Get(this);
  }

  get: operations.Get;
}

// Operation Specifications

export { UrlClient, UrlClientContext, Models as UrlModels };
export * from "./operations";
