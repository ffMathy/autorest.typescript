/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreClient from "@azure/core-client";

/** Result of the request to list Microsoft.Features operations. It contains a list of operations and a URL link to get the next set of results. */
export interface OperationListResult {
  /** List of Microsoft.Features operations. */
  value?: Operation[];
  /** URL to get the next set of operation list results if there are any. */
  nextLink?: string;
}

/** Microsoft.Features operation */
export interface Operation {
  /** Operation name: {provider}/{resource}/{operation} */
  name?: string;
  /** The object that represents the operation. */
  display?: OperationDisplay;
}

/** The object that represents the operation. */
export interface OperationDisplay {
  /** Service provider: Microsoft.Features */
  provider?: string;
  /** Resource on which the operation is performed: Profile, endpoint, etc. */
  resource?: string;
  /** Operation type: Read, write, delete, etc. */
  operation?: string;
}

/** List of previewed features. */
export interface FeatureOperationsListResult {
  /** The array of features. */
  value?: FeatureResult[];
  /** The URL to use for getting the next set of results. */
  nextLink?: string;
}

/** Previewed feature information. */
export interface FeatureResult {
  /** The name of the feature. */
  name?: string;
  /** Properties of the previewed feature. */
  properties?: FeatureProperties;
  /** The resource ID of the feature. */
  id?: string;
  /** The resource type of the feature. */
  type?: string;
}

/** Information about feature. */
export interface FeatureProperties {
  /** The registration state of the feature for the subscription. */
  state?: string;
}

/** Optional parameters. */
export interface FeatureClientListOperationsOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOperations operation. */
export type FeatureClientListOperationsResponse = OperationListResult;

/** Optional parameters. */
export interface FeatureClientListOperationsNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listOperationsNext operation. */
export type FeatureClientListOperationsNextResponse = OperationListResult;

/** Optional parameters. */
export interface FeaturesListAllOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAll operation. */
export type FeaturesListAllResponse = FeatureOperationsListResult;

/** Optional parameters. */
export interface FeaturesListOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the list operation. */
export type FeaturesListResponse = FeatureOperationsListResult;

/** Optional parameters. */
export interface FeaturesGetOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the get operation. */
export type FeaturesGetResponse = FeatureResult;

/** Optional parameters. */
export interface FeaturesRegisterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the register operation. */
export type FeaturesRegisterResponse = FeatureResult;

/** Optional parameters. */
export interface FeaturesUnregisterOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the unregister operation. */
export type FeaturesUnregisterResponse = FeatureResult;

/** Optional parameters. */
export interface FeaturesListAllNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listAllNext operation. */
export type FeaturesListAllNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export interface FeaturesListNextOptionalParams
  extends coreClient.OperationOptions {}

/** Contains response data for the listNext operation. */
export type FeaturesListNextResponse = FeatureOperationsListResult;

/** Optional parameters. */
export interface FeatureClientOptionalParams
  extends coreClient.ServiceClientOptions {
  /** server parameter */
  $host?: string;
  /** Api Version */
  apiVersion?: string;
  /** Overrides client endpoint. */
  endpoint?: string;
}
