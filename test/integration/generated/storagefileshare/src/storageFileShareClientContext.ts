import * as coreClient from "@azure/core-client";
import { StorageFileShareClientOptionalParams } from "./models";

export class StorageFileShareClientContext extends coreClient.ServiceClient {
  url: string;
  fileRangeWriteFromUrl: string;
  version: string;

  /**
   * Initializes a new instance of the StorageFileShareClientContext class.
   * @param url The URL of the service account, share, directory or file that is the target of the
   *            desired operation.
   * @param options The parameter options
   */
  constructor(url: string, options?: StorageFileShareClientOptionalParams) {
    if (url === undefined) {
      throw new Error("'url' cannot be null");
    }

    // Initializing default values for options
    if (!options) {
      options = {};
    }
    const defaults: StorageFileShareClientOptionalParams = {
      requestContentType: "application/json; charset=utf-8"
    };
    const optionsWithDefaults = {
      ...defaults,
      ...options,
      baseUri: options.endpoint || "{url}"
    };
    super(optionsWithDefaults);
    // Parameter assignments
    this.url = url;

    // Assigning values to Constant parameters
    this.fileRangeWriteFromUrl = options.fileRangeWriteFromUrl || "update";
    this.version = options.version || "2020-04-08";
  }
}