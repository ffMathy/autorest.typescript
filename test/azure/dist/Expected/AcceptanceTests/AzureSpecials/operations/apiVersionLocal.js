"use strict";
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const msRest = require("ms-rest-js");
const Mappers = require("../models/mappers");
const WebResource = msRest.WebResource;
/** Class representing a ApiVersionLocal. */
class ApiVersionLocal {
    /**
     * Create a ApiVersionLocal.
     * @param {AutoRestAzureSpecialParametersTestClient} client Reference to the service client.
     */
    constructor(client) {
        this.client = client;
    }
    /**
     * Get method with api-version modeled in the method.  pass in api-version =
     * '2.0' to succeed
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getMethodLocalValidWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let apiVersion = '2.0';
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/apiVersion/method/string/none/query/local/2.0';
            let queryParamsArray = [];
            queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Get method with api-version modeled in the method.  pass in api-version =
     * null to succeed
     *
     * @param {ApiVersionLocalGetMethodLocalNullOptionalParams} [options] Optional
     * Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getMethodLocalNullWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let apiVersion = (options && options.apiVersion !== undefined) ? options.apiVersion : undefined;
            // Validate
            try {
                if (apiVersion !== null && apiVersion !== undefined && typeof apiVersion.valueOf() !== 'string') {
                    throw new Error('apiVersion must be of type string.');
                }
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/apiVersion/method/string/none/query/local/null';
            let queryParamsArray = [];
            if (apiVersion !== null && apiVersion !== undefined) {
                queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
            }
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Get method with api-version modeled in the method.  pass in api-version =
     * '2.0' to succeed
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getPathLocalValidWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let apiVersion = '2.0';
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/apiVersion/path/string/none/query/local/2.0';
            let queryParamsArray = [];
            queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    /**
     * Get method with api-version modeled in the method.  pass in api-version =
     * '2.0' to succeed
     *
     * @param {RequestOptionsBase} [options] Optional Parameters.
     *
     * @returns {Promise} A promise is returned
     *
     * @resolve {HttpOperationResponse} - The deserialized result object.
     *
     * @reject {Error|ServiceError} - The error object.
     */
    getSwaggerLocalValidWithHttpOperationResponse(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let client = this.client;
            let apiVersion = '2.0';
            // Validate
            try {
                if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
                    throw new Error('this.client.acceptLanguage must be of type string.');
                }
            }
            catch (error) {
                return Promise.reject(error);
            }
            // Construct URL
            let baseUrl = this.client.baseUri;
            let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'azurespecials/apiVersion/swagger/string/none/query/local/2.0';
            let queryParamsArray = [];
            queryParamsArray.push('api-version=' + encodeURIComponent(apiVersion));
            if (queryParamsArray.length > 0) {
                requestUrl += '?' + queryParamsArray.join('&');
            }
            // Create HTTP transport objects
            let httpRequest = new WebResource();
            httpRequest.method = 'GET';
            httpRequest.url = requestUrl;
            httpRequest.headers = {};
            // Set Headers
            httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
            if (this.client.generateClientRequestId) {
                httpRequest.headers['x-ms-client-request-id'] = msRest.generateUuid();
            }
            if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
                httpRequest.headers['accept-language'] = this.client.acceptLanguage;
            }
            if (options && options.customHeaders) {
                for (let headerName in options.customHeaders) {
                    if (options.customHeaders.hasOwnProperty(headerName)) {
                        httpRequest.headers[headerName] = options.customHeaders[headerName];
                    }
                }
            }
            // Send Request
            let operationRes;
            try {
                operationRes = yield client.pipeline(httpRequest);
                let response = operationRes.response;
                let statusCode = response.status;
                if (statusCode !== 200) {
                    let error = new msRest.RestError(operationRes.bodyAsText);
                    error.statusCode = response.status;
                    error.request = msRest.stripRequest(httpRequest);
                    error.response = msRest.stripResponse(response);
                    let parsedErrorResponse = operationRes.bodyAsJson;
                    try {
                        if (parsedErrorResponse) {
                            let internalError = null;
                            if (parsedErrorResponse.error)
                                internalError = parsedErrorResponse.error;
                            error.code = internalError ? internalError.code : parsedErrorResponse.code;
                            error.message = internalError ? internalError.message : parsedErrorResponse.message;
                        }
                        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
                            let resultMapper = Mappers.ErrorModel;
                            error.body = client.serializer.deserialize(resultMapper, parsedErrorResponse, 'error.body');
                        }
                    }
                    catch (defaultError) {
                        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                            `- "${operationRes.bodyAsText}" for the default response.`;
                        return Promise.reject(error);
                    }
                    return Promise.reject(error);
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
            return Promise.resolve(operationRes);
        });
    }
    getMethodLocalValid(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getMethodLocalValidWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getMethodLocalValidWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    getMethodLocalNull(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getMethodLocalNullWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getMethodLocalNullWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    getPathLocalValid(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getPathLocalValidWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getPathLocalValidWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
    getSwaggerLocalValid(options, callback) {
        if (!callback && typeof options === 'function') {
            callback = options;
            options = undefined;
        }
        let cb = callback;
        if (!callback) {
            return this.getSwaggerLocalValidWithHttpOperationResponse(options).then((operationRes) => {
                return Promise.resolve(operationRes.bodyAsJson);
            }).catch((err) => {
                return Promise.reject(err);
            });
        }
        else {
            msRest.promiseToCallback(this.getSwaggerLocalValidWithHttpOperationResponse(options))((err, data) => {
                if (err) {
                    return cb(err);
                }
                let result = data.bodyAsJson;
                return cb(err, result, data.request, data.response);
            });
        }
    }
}
exports.ApiVersionLocal = ApiVersionLocal;
//# sourceMappingURL=apiVersionLocal.js.map