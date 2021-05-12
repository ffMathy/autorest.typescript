/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import * as coreHttp from "@azure/core-http";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  NatGateway,
  NatGatewaysListAllNextOptionalParams,
  NatGatewaysListAllOptionalParams,
  NatGatewaysListNextOptionalParams,
  NatGatewaysListOptionalParams,
  NatGatewaysDeleteOptionalParams,
  NatGatewaysGetOptionalParams,
  NatGatewaysGetResponse,
  NatGatewaysCreateOrUpdateOptionalParams,
  NatGatewaysCreateOrUpdateResponse,
  TagsObject,
  NatGatewaysUpdateTagsOptionalParams,
  NatGatewaysUpdateTagsResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a NatGateways. */
export interface NatGateways {
  /**
   * Gets all the Nat Gateways in a subscription.
   * @param options The options parameters.
   */
  listAll(
    options?: NatGatewaysListAllOptionalParams
  ): PagedAsyncIterableIterator<NatGateway>;
  /**
   * Gets all nat gateways in a resource group.
   * @param resourceGroupName The name of the resource group.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    options?: NatGatewaysListOptionalParams
  ): PagedAsyncIterableIterator<NatGateway>;
  /**
   * Deletes the specified nat gateway.
   * @param resourceGroupName The name of the resource group.
   * @param natGatewayName The name of the nat gateway.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    natGatewayName: string,
    options?: NatGatewaysDeleteOptionalParams
  ): Promise<
    PollerLike<PollOperationState<coreHttp.RestResponse>, coreHttp.RestResponse>
  >;
  /**
   * Gets the specified nat gateway in a specified resource group.
   * @param resourceGroupName The name of the resource group.
   * @param natGatewayName The name of the nat gateway.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    natGatewayName: string,
    options?: NatGatewaysGetOptionalParams
  ): Promise<NatGatewaysGetResponse>;
  /**
   * Creates or updates a nat gateway.
   * @param resourceGroupName The name of the resource group.
   * @param natGatewayName The name of the nat gateway.
   * @param parameters Parameters supplied to the create or update nat gateway operation.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    natGatewayName: string,
    parameters: NatGateway,
    options?: NatGatewaysCreateOrUpdateOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<NatGatewaysCreateOrUpdateResponse>,
      NatGatewaysCreateOrUpdateResponse
    >
  >;
  /**
   * Updates nat gateway tags.
   * @param resourceGroupName The name of the resource group.
   * @param natGatewayName The name of the nat gateway.
   * @param parameters Parameters supplied to update nat gateway tags.
   * @param options The options parameters.
   */
  updateTags(
    resourceGroupName: string,
    natGatewayName: string,
    parameters: TagsObject,
    options?: NatGatewaysUpdateTagsOptionalParams
  ): Promise<NatGatewaysUpdateTagsResponse>;
}