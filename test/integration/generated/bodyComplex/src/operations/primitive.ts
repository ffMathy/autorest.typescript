/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { Primitive } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { BodyComplexClientContext } from "../bodyComplexClientContext";
import {
  PrimitiveGetIntOptionalParams,
  PrimitiveGetIntResponse,
  IntWrapper,
  PrimitivePutIntOptionalParams,
  PrimitiveGetLongOptionalParams,
  PrimitiveGetLongResponse,
  LongWrapper,
  PrimitivePutLongOptionalParams,
  PrimitiveGetFloatOptionalParams,
  PrimitiveGetFloatResponse,
  FloatWrapper,
  PrimitivePutFloatOptionalParams,
  PrimitiveGetDoubleOptionalParams,
  PrimitiveGetDoubleResponse,
  DoubleWrapper,
  PrimitivePutDoubleOptionalParams,
  PrimitiveGetBoolOptionalParams,
  PrimitiveGetBoolResponse,
  BooleanWrapper,
  PrimitivePutBoolOptionalParams,
  PrimitiveGetStringOptionalParams,
  PrimitiveGetStringResponse,
  StringWrapper,
  PrimitivePutStringOptionalParams,
  PrimitiveGetDateOptionalParams,
  PrimitiveGetDateResponse,
  DateWrapper,
  PrimitivePutDateOptionalParams,
  PrimitiveGetDateTimeOptionalParams,
  PrimitiveGetDateTimeResponse,
  DatetimeWrapper,
  PrimitivePutDateTimeOptionalParams,
  PrimitiveGetDateTimeRfc1123OptionalParams,
  PrimitiveGetDateTimeRfc1123Response,
  Datetimerfc1123Wrapper,
  PrimitivePutDateTimeRfc1123OptionalParams,
  PrimitiveGetDurationOptionalParams,
  PrimitiveGetDurationResponse,
  DurationWrapper,
  PrimitivePutDurationOptionalParams,
  PrimitiveGetByteOptionalParams,
  PrimitiveGetByteResponse,
  ByteWrapper,
  PrimitivePutByteOptionalParams
} from "../models";

/** Class containing Primitive operations. */
export class PrimitiveImpl implements Primitive {
  private readonly client: BodyComplexClientContext;

  /**
   * Initialize a new instance of the class Primitive class.
   * @param client Reference to the service client
   */
  constructor(client: BodyComplexClientContext) {
    this.client = client;
  }

  /**
   * Get complex types with integer properties
   * @param options The options parameters.
   */
  getInt(
    options?: PrimitiveGetIntOptionalParams
  ): Promise<PrimitiveGetIntResponse> {
    return this.client.sendOperationRequest({ options }, getIntOperationSpec);
  }

  /**
   * Put complex types with integer properties
   * @param complexBody Please put -1 and 2
   * @param options The options parameters.
   */
  putInt(
    complexBody: IntWrapper,
    options?: PrimitivePutIntOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putIntOperationSpec
    );
  }

  /**
   * Get complex types with long properties
   * @param options The options parameters.
   */
  getLong(
    options?: PrimitiveGetLongOptionalParams
  ): Promise<PrimitiveGetLongResponse> {
    return this.client.sendOperationRequest({ options }, getLongOperationSpec);
  }

  /**
   * Put complex types with long properties
   * @param complexBody Please put 1099511627775 and -999511627788
   * @param options The options parameters.
   */
  putLong(
    complexBody: LongWrapper,
    options?: PrimitivePutLongOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putLongOperationSpec
    );
  }

  /**
   * Get complex types with float properties
   * @param options The options parameters.
   */
  getFloat(
    options?: PrimitiveGetFloatOptionalParams
  ): Promise<PrimitiveGetFloatResponse> {
    return this.client.sendOperationRequest({ options }, getFloatOperationSpec);
  }

  /**
   * Put complex types with float properties
   * @param complexBody Please put 1.05 and -0.003
   * @param options The options parameters.
   */
  putFloat(
    complexBody: FloatWrapper,
    options?: PrimitivePutFloatOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putFloatOperationSpec
    );
  }

  /**
   * Get complex types with double properties
   * @param options The options parameters.
   */
  getDouble(
    options?: PrimitiveGetDoubleOptionalParams
  ): Promise<PrimitiveGetDoubleResponse> {
    return this.client.sendOperationRequest(
      { options },
      getDoubleOperationSpec
    );
  }

  /**
   * Put complex types with double properties
   * @param complexBody Please put 3e-100 and
   *                    -0.000000000000000000000000000000000000000000000000000000005
   * @param options The options parameters.
   */
  putDouble(
    complexBody: DoubleWrapper,
    options?: PrimitivePutDoubleOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putDoubleOperationSpec
    );
  }

  /**
   * Get complex types with bool properties
   * @param options The options parameters.
   */
  getBool(
    options?: PrimitiveGetBoolOptionalParams
  ): Promise<PrimitiveGetBoolResponse> {
    return this.client.sendOperationRequest({ options }, getBoolOperationSpec);
  }

  /**
   * Put complex types with bool properties
   * @param complexBody Please put true and false
   * @param options The options parameters.
   */
  putBool(
    complexBody: BooleanWrapper,
    options?: PrimitivePutBoolOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putBoolOperationSpec
    );
  }

  /**
   * Get complex types with string properties
   * @param options The options parameters.
   */
  getString(
    options?: PrimitiveGetStringOptionalParams
  ): Promise<PrimitiveGetStringResponse> {
    return this.client.sendOperationRequest(
      { options },
      getStringOperationSpec
    );
  }

  /**
   * Put complex types with string properties
   * @param complexBody Please put 'goodrequest', '', and null
   * @param options The options parameters.
   */
  putString(
    complexBody: StringWrapper,
    options?: PrimitivePutStringOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putStringOperationSpec
    );
  }

  /**
   * Get complex types with date properties
   * @param options The options parameters.
   */
  getDate(
    options?: PrimitiveGetDateOptionalParams
  ): Promise<PrimitiveGetDateResponse> {
    return this.client.sendOperationRequest({ options }, getDateOperationSpec);
  }

  /**
   * Put complex types with date properties
   * @param complexBody Please put '0001-01-01' and '2016-02-29'
   * @param options The options parameters.
   */
  putDate(
    complexBody: DateWrapper,
    options?: PrimitivePutDateOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putDateOperationSpec
    );
  }

  /**
   * Get complex types with datetime properties
   * @param options The options parameters.
   */
  getDateTime(
    options?: PrimitiveGetDateTimeOptionalParams
  ): Promise<PrimitiveGetDateTimeResponse> {
    return this.client.sendOperationRequest(
      { options },
      getDateTimeOperationSpec
    );
  }

  /**
   * Put complex types with datetime properties
   * @param complexBody Please put '0001-01-01T12:00:00-04:00' and '2015-05-18T11:38:00-08:00'
   * @param options The options parameters.
   */
  putDateTime(
    complexBody: DatetimeWrapper,
    options?: PrimitivePutDateTimeOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putDateTimeOperationSpec
    );
  }

  /**
   * Get complex types with datetimeRfc1123 properties
   * @param options The options parameters.
   */
  getDateTimeRfc1123(
    options?: PrimitiveGetDateTimeRfc1123OptionalParams
  ): Promise<PrimitiveGetDateTimeRfc1123Response> {
    return this.client.sendOperationRequest(
      { options },
      getDateTimeRfc1123OperationSpec
    );
  }

  /**
   * Put complex types with datetimeRfc1123 properties
   * @param complexBody Please put 'Mon, 01 Jan 0001 12:00:00 GMT' and 'Mon, 18 May 2015 11:38:00 GMT'
   * @param options The options parameters.
   */
  putDateTimeRfc1123(
    complexBody: Datetimerfc1123Wrapper,
    options?: PrimitivePutDateTimeRfc1123OptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putDateTimeRfc1123OperationSpec
    );
  }

  /**
   * Get complex types with duration properties
   * @param options The options parameters.
   */
  getDuration(
    options?: PrimitiveGetDurationOptionalParams
  ): Promise<PrimitiveGetDurationResponse> {
    return this.client.sendOperationRequest(
      { options },
      getDurationOperationSpec
    );
  }

  /**
   * Put complex types with duration properties
   * @param complexBody Please put 'P123DT22H14M12.011S'
   * @param options The options parameters.
   */
  putDuration(
    complexBody: DurationWrapper,
    options?: PrimitivePutDurationOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putDurationOperationSpec
    );
  }

  /**
   * Get complex types with byte properties
   * @param options The options parameters.
   */
  getByte(
    options?: PrimitiveGetByteOptionalParams
  ): Promise<PrimitiveGetByteResponse> {
    return this.client.sendOperationRequest({ options }, getByteOperationSpec);
  }

  /**
   * Put complex types with byte properties
   * @param complexBody Please put non-ascii byte string hex(FF FE FD FC 00 FA F9 F8 F7 F6)
   * @param options The options parameters.
   */
  putByte(
    complexBody: ByteWrapper,
    options?: PrimitivePutByteOptionalParams
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { complexBody, options },
      putByteOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const getIntOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/integer",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.IntWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putIntOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/integer",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody1,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLongOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/long",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LongWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putLongOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/long",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody2,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getFloatOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/float",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.FloatWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putFloatOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/float",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody3,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/double",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DoubleWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putDoubleOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/double",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody4,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getBoolOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/bool",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.BooleanWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putBoolOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/bool",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody5,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getStringOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/string",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.StringWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putStringOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/string",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody6,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDateOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/date",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DateWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putDateOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/date",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody7,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/datetime",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DatetimeWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putDateTimeOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/datetime",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody8,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDateTimeRfc1123OperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/datetimerfc1123",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Datetimerfc1123Wrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putDateTimeRfc1123OperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/datetimerfc1123",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody9,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDurationOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/duration",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DurationWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putDurationOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/duration",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody10,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getByteOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/byte",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.ByteWrapper
    },
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept],
  serializer
};
const putByteOperationSpec: coreClient.OperationSpec = {
  path: "/complex/primitive/byte",
  httpMethod: "PUT",
  responses: {
    200: {},
    default: {
      bodyMapper: Mappers.ErrorModel
    }
  },
  requestBody: Parameters.complexBody11,
  urlParameters: [Parameters.$host],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
