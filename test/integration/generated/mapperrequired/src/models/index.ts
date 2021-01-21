/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";

/** The certificate issuer update parameters. */
export interface CertificateIssuerUpdateParameters {
  /** The issuer provider. */
  provider?: string;
}

/** Optional parameters. */
export interface MapperRequiredClientUpdateCertificateIssuerOptionalParams
  extends coreHttp.OperationOptions {
  /** The issuer provider. */
  provider?: string;
}

/** Contains response data for the updateCertificateIssuer operation. */
export type MapperRequiredClientUpdateCertificateIssuerResponse = {
  /** The parsed response body. */
  body: string;

  /** The underlying HTTP response. */
  _response: coreHttp.HttpResponse & {
    /** The response body as text (string format) */
    bodyAsText: string;

    /** The response body as parsed JSON or XML */
    parsedBody: string;
  };
};

/** Optional parameters. */
export interface MapperRequiredClientOptionalParams
  extends coreHttp.ServiceClientOptions {
  /** Overrides client endpoint. */
  endpoint?: string;
}