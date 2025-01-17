/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AuthenticationImpl } from "./operations";
import { Authentication } from "./operationsInterfaces";
import { SealedChoiceClientContext } from "./sealedChoiceClientContext";
import { SealedChoiceClientOptionalParams } from "./models";

export class SealedChoiceClient extends SealedChoiceClientContext {
  /**
   * Initializes a new instance of the SealedChoiceClient class.
   * @param $host server parameter
   * @param options The parameter options
   */
  constructor($host: string, options?: SealedChoiceClientOptionalParams) {
    super($host, options);
    this.authentication = new AuthenticationImpl(this);
  }

  authentication: Authentication;
}
