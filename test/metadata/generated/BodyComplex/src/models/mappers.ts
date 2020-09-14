/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreHttp from "@azure/core-http";


export const ErrorModel: coreHttp.CompositeMapper = {
  serializedName: "Error",
  type: {
    name: "Composite",
    className: "ErrorModel",
    modelProperties: {
      status: {
        serializedName: "status",
        type: {
          name: "Number"
        }
      },
      message: {
        serializedName: "message",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Basic: coreHttp.CompositeMapper = {
  serializedName: "basic",
  type: {
    name: "Composite",
    className: "Basic",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      color: {
        serializedName: "color",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Pet: coreHttp.CompositeMapper = {
  serializedName: "pet",
  type: {
    name: "Composite",
    className: "Pet",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "Number"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Dog: coreHttp.CompositeMapper = {
  serializedName: "dog",
  type: {
    name: "Composite",
    className: "Dog",
    modelProperties: {
      ...Pet.type.modelProperties,
      food: {
        serializedName: "food",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cat: coreHttp.CompositeMapper = {
  serializedName: "cat",
  type: {
    name: "Composite",
    className: "Cat",
    modelProperties: {
      ...Pet.type.modelProperties,
      color: {
        serializedName: "color",
        type: {
          name: "String"
        }
      },
      hates: {
        serializedName: "hates",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Dog"
            }
          }
        }
      }
    }
  }
};

export const Siamese: coreHttp.CompositeMapper = {
  serializedName: "siamese",
  type: {
    name: "Composite",
    className: "Siamese",
    modelProperties: {
      ...Cat.type.modelProperties,
      breed: {
        serializedName: "breed",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DotFish: coreHttp.CompositeMapper = {
  serializedName: "DotFish",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "fish.type",
      clientName: "fishtype"
    },
    uberParent: "DotFish",
    className: "DotFish",
    modelProperties: {
      species: {
        serializedName: "species",
        type: {
          name: "String"
        }
      },
      fishtype: {
        required: true,
        serializedName: "fish\\.type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DotSalmon: coreHttp.CompositeMapper = {
  serializedName: "DotSalmon",
  type: {
    name: "Composite",
    polymorphicDiscriminator: DotFish.type.polymorphicDiscriminator,
    uberParent: "DotFish",
    className: "DotSalmon",
    modelProperties: {
      ...DotFish.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      iswild: {
        serializedName: "iswild",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DotFishMarket: coreHttp.CompositeMapper = {
  serializedName: "DotFishMarket",
  type: {
    name: "Composite",
    className: "DotFishMarket",
    modelProperties: {
      sampleSalmon: {
        serializedName: "sampleSalmon",
        type: {
          name: "Composite",
          className: "DotSalmon"
        }
      },
      salmons: {
        serializedName: "salmons",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DotSalmon"
            }
          }
        }
      },
      sampleFish: {
        serializedName: "sampleFish",
        type: {
          name: "Composite",
          className: "DotFish"
        }
      },
      fishes: {
        serializedName: "fishes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DotFish"
            }
          }
        }
      }
    }
  }
};

export const Fish: coreHttp.CompositeMapper = {
  serializedName: "Fish",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "fishtype",
      clientName: "fishtype"
    },
    uberParent: "Fish",
    className: "Fish",
    modelProperties: {
      species: {
        serializedName: "species",
        type: {
          name: "String"
        }
      },
      length: {
        required: true,
        serializedName: "length",
        type: {
          name: "Number"
        }
      },
      siblings: {
        serializedName: "siblings",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Fish"
            }
          }
        }
      },
      fishtype: {
        required: true,
        serializedName: "fishtype",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Salmon: coreHttp.CompositeMapper = {
  serializedName: "salmon",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Salmon",
    modelProperties: {
      ...Fish.type.modelProperties,
      location: {
        serializedName: "location",
        type: {
          name: "String"
        }
      },
      iswild: {
        serializedName: "iswild",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const SmartSalmon: coreHttp.CompositeMapper = {
  serializedName: "smart_salmon",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "SmartSalmon",
    modelProperties: {
      ...Salmon.type.modelProperties,
      collegeDegree: {
        serializedName: "college_degree",
        type: {
          name: "String"
        }
      }
    },
    additionalProperties: {
      type: {
        name: "Object"
      }
    }
  }
};

export const Shark: coreHttp.CompositeMapper = {
  serializedName: "shark",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Shark",
    modelProperties: {
      ...Fish.type.modelProperties,
      age: {
        serializedName: "age",
        type: {
          name: "Number"
        }
      },
      birthday: {
        required: true,
        serializedName: "birthday",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Sawshark: coreHttp.CompositeMapper = {
  serializedName: "sawshark",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Sawshark",
    modelProperties: {
      ...Shark.type.modelProperties,
      picture: {
        serializedName: "picture",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const Goblinshark: coreHttp.CompositeMapper = {
  serializedName: "goblin",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Goblinshark",
    modelProperties: {
      ...Shark.type.modelProperties,
      jawsize: {
        serializedName: "jawsize",
        type: {
          name: "Number"
        }
      },
      color: {
        serializedName: "color",
        defaultValue: 'gray',
        type: {
          name: "String"
        }
      }
    }
  }
};

export const Cookiecuttershark: coreHttp.CompositeMapper = {
  serializedName: "cookiecuttershark",
  type: {
    name: "Composite",
    polymorphicDiscriminator: Fish.type.polymorphicDiscriminator,
    uberParent: "Fish",
    className: "Cookiecuttershark",
    modelProperties: {
      ...Shark.type.modelProperties
    }
  }
};

export const IntWrapper: coreHttp.CompositeMapper = {
  serializedName: "int-wrapper",
  type: {
    name: "Composite",
    className: "IntWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const LongWrapper: coreHttp.CompositeMapper = {
  serializedName: "long-wrapper",
  type: {
    name: "Composite",
    className: "LongWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const FloatWrapper: coreHttp.CompositeMapper = {
  serializedName: "float-wrapper",
  type: {
    name: "Composite",
    className: "FloatWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field2: {
        serializedName: "field2",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const DoubleWrapper: coreHttp.CompositeMapper = {
  serializedName: "double-wrapper",
  type: {
    name: "Composite",
    className: "DoubleWrapper",
    modelProperties: {
      field1: {
        serializedName: "field1",
        type: {
          name: "Number"
        }
      },
      field56ZerosAfterTheDotAndNegativeZeroBeforeDotAndThisIsALongFieldNameOnPurpose: {
        serializedName: "field_56_zeros_after_the_dot_and_negative_zero_before_dot_and_this_is_a_long_field_name_on_purpose",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const BooleanWrapper: coreHttp.CompositeMapper = {
  serializedName: "boolean-wrapper",
  type: {
    name: "Composite",
    className: "BooleanWrapper",
    modelProperties: {
      fieldTrue: {
        serializedName: "field_true",
        type: {
          name: "Boolean"
        }
      },
      fieldFalse: {
        serializedName: "field_false",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const StringWrapper: coreHttp.CompositeMapper = {
  serializedName: "string-wrapper",
  type: {
    name: "Composite",
    className: "StringWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "String"
        }
      },
      empty: {
        serializedName: "empty",
        type: {
          name: "String"
        }
      },
      nullProperty: {
        serializedName: "null",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DateWrapper: coreHttp.CompositeMapper = {
  serializedName: "date-wrapper",
  type: {
    name: "Composite",
    className: "DateWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "Date"
        }
      },
      leap: {
        serializedName: "leap",
        type: {
          name: "Date"
        }
      }
    }
  }
};

export const DatetimeWrapper: coreHttp.CompositeMapper = {
  serializedName: "datetime-wrapper",
  type: {
    name: "Composite",
    className: "DatetimeWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "DateTime"
        }
      },
      now: {
        serializedName: "now",
        type: {
          name: "DateTime"
        }
      }
    }
  }
};

export const Datetimerfc1123Wrapper: coreHttp.CompositeMapper = {
  serializedName: "datetimerfc1123-wrapper",
  type: {
    name: "Composite",
    className: "Datetimerfc1123Wrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "DateTimeRfc1123"
        }
      },
      now: {
        serializedName: "now",
        type: {
          name: "DateTimeRfc1123"
        }
      }
    }
  }
};

export const DurationWrapper: coreHttp.CompositeMapper = {
  serializedName: "duration-wrapper",
  type: {
    name: "Composite",
    className: "DurationWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "TimeSpan"
        }
      }
    }
  }
};

export const ByteWrapper: coreHttp.CompositeMapper = {
  serializedName: "byte-wrapper",
  type: {
    name: "Composite",
    className: "ByteWrapper",
    modelProperties: {
      field: {
        serializedName: "field",
        type: {
          name: "ByteArray"
        }
      }
    }
  }
};

export const ArrayWrapper: coreHttp.CompositeMapper = {
  serializedName: "array-wrapper",
  type: {
    name: "Composite",
    className: "ArrayWrapper",
    modelProperties: {
      arrayProperty: {
        serializedName: "array",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const DictionaryWrapper: coreHttp.CompositeMapper = {
  serializedName: "dictionary-wrapper",
  type: {
    name: "Composite",
    className: "DictionaryWrapper",
    modelProperties: {
      defaultProgram: {
        serializedName: "defaultProgram",
        type: {
          name: "Dictionary",
          value: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const ReadonlyObj: coreHttp.CompositeMapper = {
  serializedName: "readonly-obj",
  type: {
    name: "Composite",
    className: "ReadonlyObj",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      size: {
        serializedName: "size",
        type: {
          name: "Number"
        }
      }
    }
  }
};

export const MyBaseType: coreHttp.CompositeMapper = {
  serializedName: "MyBaseType",
  type: {
    name: "Composite",
    polymorphicDiscriminator: {
      serializedName: "kind",
      clientName: "kind"
    },
    uberParent: "MyBaseType",
    className: "MyBaseType",
    modelProperties: {
      propB1: {
        serializedName: "propB1",
        type: {
          name: "String"
        }
      },
      kind: {
        required: true,
        serializedName: "kind",
        type: {
          name: "String"
        }
      },
      propBH1: {
        serializedName: "helper.propBH1",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const MyDerivedType: coreHttp.CompositeMapper = {
  serializedName: "Kind1",
  type: {
    name: "Composite",
    polymorphicDiscriminator: MyBaseType.type.polymorphicDiscriminator,
    uberParent: "MyBaseType",
    className: "MyDerivedType",
    modelProperties: {
      ...MyBaseType.type.modelProperties,
      propD1: {
        serializedName: "propD1",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const discriminators = {
  'DotFish' : DotFish,
  'DotFish.DotSalmon' : DotSalmon,
  'Fish' : Fish,
  'Fish.salmon' : Salmon,
  'Fish.smart_salmon' : SmartSalmon,
  'Fish.shark' : Shark,
  'Fish.sawshark' : Sawshark,
  'Fish.goblin' : Goblinshark,
  'Fish.cookiecuttershark' : Cookiecuttershark,
  'MyBaseType' : MyBaseType,
  'MyBaseType.Kind1' : MyDerivedType

};