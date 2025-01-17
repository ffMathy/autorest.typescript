/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import "@azure/core-paging";
import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { ElasticPoolDatabaseActivities } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";
import {
  ElasticPoolDatabaseActivity,
  ElasticPoolDatabaseActivitiesListByElasticPoolOptionalParams,
  ElasticPoolDatabaseActivitiesListByElasticPoolResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing ElasticPoolDatabaseActivities operations. */
export class ElasticPoolDatabaseActivitiesImpl
  implements ElasticPoolDatabaseActivities {
  private readonly client: SqlManagementClientContext;

  /**
   * Initialize a new instance of the class ElasticPoolDatabaseActivities class.
   * @param client Reference to the service client
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Returns activity on databases inside of an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  public listByElasticPool(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolDatabaseActivitiesListByElasticPoolOptionalParams
  ): PagedAsyncIterableIterator<ElasticPoolDatabaseActivity> {
    const iter = this.listByElasticPoolPagingAll(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listByElasticPoolPagingPage(
          resourceGroupName,
          serverName,
          elasticPoolName,
          options
        );
      }
    };
  }

  private async *listByElasticPoolPagingPage(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolDatabaseActivitiesListByElasticPoolOptionalParams
  ): AsyncIterableIterator<ElasticPoolDatabaseActivity[]> {
    let result = await this._listByElasticPool(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    );
    yield result.value || [];
  }

  private async *listByElasticPoolPagingAll(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolDatabaseActivitiesListByElasticPoolOptionalParams
  ): AsyncIterableIterator<ElasticPoolDatabaseActivity> {
    for await (const page of this.listByElasticPoolPagingPage(
      resourceGroupName,
      serverName,
      elasticPoolName,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Returns activity on databases inside of an elastic pool.
   * @param resourceGroupName The name of the resource group that contains the resource. You can obtain
   *                          this value from the Azure Resource Manager API or the portal.
   * @param serverName The name of the server.
   * @param elasticPoolName The name of the elastic pool.
   * @param options The options parameters.
   */
  private _listByElasticPool(
    resourceGroupName: string,
    serverName: string,
    elasticPoolName: string,
    options?: ElasticPoolDatabaseActivitiesListByElasticPoolOptionalParams
  ): Promise<ElasticPoolDatabaseActivitiesListByElasticPoolResponse> {
    return this.client.sendOperationRequest(
      { resourceGroupName, serverName, elasticPoolName, options },
      listByElasticPoolOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listByElasticPoolOperationSpec: coreClient.OperationSpec = {
  path:
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/servers/{serverName}/elasticPools/{elasticPoolName}/elasticPoolDatabaseActivity",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ElasticPoolDatabaseActivityListResult
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.$host,
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.serverName,
    Parameters.elasticPoolName
  ],
  headerParameters: [Parameters.accept],
  serializer
};
