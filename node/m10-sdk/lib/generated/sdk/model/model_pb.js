// source: sdk/model/model.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.m10.sdk.model.Account', null, global);
goog.exportSymbol('proto.m10.sdk.model.AccountInfo', null, global);
goog.exportSymbol('proto.m10.sdk.model.AccountRef', null, global);
goog.exportSymbol('proto.m10.sdk.model.AccountSet', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.m10.sdk.model.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.m10.sdk.model.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.m10.sdk.model.Account.displayName = 'proto.m10.sdk.model.Account';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.m10.sdk.model.AccountRef = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.m10.sdk.model.AccountRef, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.m10.sdk.model.AccountRef.displayName = 'proto.m10.sdk.model.AccountRef';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.m10.sdk.model.AccountSet = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.m10.sdk.model.AccountSet.repeatedFields_, null);
};
goog.inherits(proto.m10.sdk.model.AccountSet, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.m10.sdk.model.AccountSet.displayName = 'proto.m10.sdk.model.AccountSet';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.m10.sdk.model.AccountInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.m10.sdk.model.AccountInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.m10.sdk.model.AccountInfo.displayName = 'proto.m10.sdk.model.AccountInfo';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.m10.sdk.model.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.m10.sdk.model.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.m10.sdk.model.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.m10.sdk.model.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: msg.getOwner_asB64(),
    profileImageUrl: jspb.Message.getFieldWithDefault(msg, 9, ""),
    name: jspb.Message.getFieldWithDefault(msg, 10, ""),
    publicName: jspb.Message.getFieldWithDefault(msg, 11, ""),
    id: msg.getId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.m10.sdk.model.Account}
 */
proto.m10.sdk.model.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.m10.sdk.model.Account;
  return proto.m10.sdk.model.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.m10.sdk.model.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.m10.sdk.model.Account}
 */
proto.m10.sdk.model.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwner(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileImageUrl(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicName(value);
      break;
    case 12:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.m10.sdk.model.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.m10.sdk.model.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.m10.sdk.model.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getProfileImageUrl();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getPublicName();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      12,
      f
    );
  }
};


/**
 * optional bytes owner = 1;
 * @return {!(string|Uint8Array)}
 */
proto.m10.sdk.model.Account.prototype.getOwner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner = 1;
 * This is a type-conversion wrapper around `getOwner()`
 * @return {string}
 */
proto.m10.sdk.model.Account.prototype.getOwner_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwner()));
};


/**
 * optional bytes owner = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwner()`
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.Account.prototype.getOwner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.m10.sdk.model.Account} returns this
 */
proto.m10.sdk.model.Account.prototype.setOwner = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string profile_image_url = 9;
 * @return {string}
 */
proto.m10.sdk.model.Account.prototype.getProfileImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.m10.sdk.model.Account} returns this
 */
proto.m10.sdk.model.Account.prototype.setProfileImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string name = 10;
 * @return {string}
 */
proto.m10.sdk.model.Account.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.m10.sdk.model.Account} returns this
 */
proto.m10.sdk.model.Account.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string public_name = 11;
 * @return {string}
 */
proto.m10.sdk.model.Account.prototype.getPublicName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.m10.sdk.model.Account} returns this
 */
proto.m10.sdk.model.Account.prototype.setPublicName = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bytes id = 12;
 * @return {!(string|Uint8Array)}
 */
proto.m10.sdk.model.Account.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * optional bytes id = 12;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.m10.sdk.model.Account.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 12;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.Account.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.m10.sdk.model.Account} returns this
 */
proto.m10.sdk.model.Account.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 12, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.m10.sdk.model.AccountRef.prototype.toObject = function(opt_includeInstance) {
  return proto.m10.sdk.model.AccountRef.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.m10.sdk.model.AccountRef} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.m10.sdk.model.AccountRef.toObject = function(includeInstance, msg) {
  var f, obj = {
    ledgerId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    accountId: msg.getAccountId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.m10.sdk.model.AccountRef}
 */
proto.m10.sdk.model.AccountRef.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.m10.sdk.model.AccountRef;
  return proto.m10.sdk.model.AccountRef.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.m10.sdk.model.AccountRef} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.m10.sdk.model.AccountRef}
 */
proto.m10.sdk.model.AccountRef.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setLedgerId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccountId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.AccountRef.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.m10.sdk.model.AccountRef.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.m10.sdk.model.AccountRef} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.m10.sdk.model.AccountRef.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLedgerId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string ledger_id = 1;
 * @return {string}
 */
proto.m10.sdk.model.AccountRef.prototype.getLedgerId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.m10.sdk.model.AccountRef} returns this
 */
proto.m10.sdk.model.AccountRef.prototype.setLedgerId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes account_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.m10.sdk.model.AccountRef.prototype.getAccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes account_id = 2;
 * This is a type-conversion wrapper around `getAccountId()`
 * @return {string}
 */
proto.m10.sdk.model.AccountRef.prototype.getAccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccountId()));
};


/**
 * optional bytes account_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccountId()`
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.AccountRef.prototype.getAccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.m10.sdk.model.AccountRef} returns this
 */
proto.m10.sdk.model.AccountRef.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.m10.sdk.model.AccountSet.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.m10.sdk.model.AccountSet.prototype.toObject = function(opt_includeInstance) {
  return proto.m10.sdk.model.AccountSet.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.m10.sdk.model.AccountSet} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.m10.sdk.model.AccountSet.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: msg.getOwner_asB64(),
    accountsList: jspb.Message.toObjectList(msg.getAccountsList(),
    proto.m10.sdk.model.AccountRef.toObject, includeInstance),
    id: msg.getId_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.m10.sdk.model.AccountSet}
 */
proto.m10.sdk.model.AccountSet.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.m10.sdk.model.AccountSet;
  return proto.m10.sdk.model.AccountSet.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.m10.sdk.model.AccountSet} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.m10.sdk.model.AccountSet}
 */
proto.m10.sdk.model.AccountSet.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setOwner(value);
      break;
    case 2:
      var value = new proto.m10.sdk.model.AccountRef;
      reader.readMessage(value,proto.m10.sdk.model.AccountRef.deserializeBinaryFromReader);
      msg.addAccounts(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.AccountSet.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.m10.sdk.model.AccountSet.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.m10.sdk.model.AccountSet} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.m10.sdk.model.AccountSet.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getAccountsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.m10.sdk.model.AccountRef.serializeBinaryToWriter
    );
  }
  f = message.getId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      7,
      f
    );
  }
};


/**
 * optional bytes owner = 1;
 * @return {!(string|Uint8Array)}
 */
proto.m10.sdk.model.AccountSet.prototype.getOwner = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes owner = 1;
 * This is a type-conversion wrapper around `getOwner()`
 * @return {string}
 */
proto.m10.sdk.model.AccountSet.prototype.getOwner_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getOwner()));
};


/**
 * optional bytes owner = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOwner()`
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.AccountSet.prototype.getOwner_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getOwner()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.m10.sdk.model.AccountSet} returns this
 */
proto.m10.sdk.model.AccountSet.prototype.setOwner = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * repeated AccountRef accounts = 2;
 * @return {!Array<!proto.m10.sdk.model.AccountRef>}
 */
proto.m10.sdk.model.AccountSet.prototype.getAccountsList = function() {
  return /** @type{!Array<!proto.m10.sdk.model.AccountRef>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.m10.sdk.model.AccountRef, 2));
};


/**
 * @param {!Array<!proto.m10.sdk.model.AccountRef>} value
 * @return {!proto.m10.sdk.model.AccountSet} returns this
*/
proto.m10.sdk.model.AccountSet.prototype.setAccountsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.m10.sdk.model.AccountRef=} opt_value
 * @param {number=} opt_index
 * @return {!proto.m10.sdk.model.AccountRef}
 */
proto.m10.sdk.model.AccountSet.prototype.addAccounts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.m10.sdk.model.AccountRef, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.m10.sdk.model.AccountSet} returns this
 */
proto.m10.sdk.model.AccountSet.prototype.clearAccountsList = function() {
  return this.setAccountsList([]);
};


/**
 * optional bytes id = 7;
 * @return {!(string|Uint8Array)}
 */
proto.m10.sdk.model.AccountSet.prototype.getId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes id = 7;
 * This is a type-conversion wrapper around `getId()`
 * @return {string}
 */
proto.m10.sdk.model.AccountSet.prototype.getId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getId()));
};


/**
 * optional bytes id = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getId()`
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.AccountSet.prototype.getId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.m10.sdk.model.AccountSet} returns this
 */
proto.m10.sdk.model.AccountSet.prototype.setId = function(value) {
  return jspb.Message.setProto3BytesField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.m10.sdk.model.AccountInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.m10.sdk.model.AccountInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.m10.sdk.model.AccountInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.m10.sdk.model.AccountInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountId: msg.getAccountId_asB64(),
    parentAccountId: msg.getParentAccountId_asB64(),
    publicName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    profileImageUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
    code: jspb.Message.getFieldWithDefault(msg, 5, ""),
    decimalPlaces: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.m10.sdk.model.AccountInfo}
 */
proto.m10.sdk.model.AccountInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.m10.sdk.model.AccountInfo;
  return proto.m10.sdk.model.AccountInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.m10.sdk.model.AccountInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.m10.sdk.model.AccountInfo}
 */
proto.m10.sdk.model.AccountInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAccountId(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setParentAccountId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublicName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfileImageUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setDecimalPlaces(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.AccountInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.m10.sdk.model.AccountInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.m10.sdk.model.AccountInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.m10.sdk.model.AccountInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getParentAccountId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getPublicName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProfileImageUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDecimalPlaces();
  if (f !== 0) {
    writer.writeUint32(
      6,
      f
    );
  }
};


/**
 * optional bytes account_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.m10.sdk.model.AccountInfo.prototype.getAccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes account_id = 1;
 * This is a type-conversion wrapper around `getAccountId()`
 * @return {string}
 */
proto.m10.sdk.model.AccountInfo.prototype.getAccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAccountId()));
};


/**
 * optional bytes account_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAccountId()`
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.AccountInfo.prototype.getAccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.m10.sdk.model.AccountInfo} returns this
 */
proto.m10.sdk.model.AccountInfo.prototype.setAccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional bytes parent_account_id = 2;
 * @return {!(string|Uint8Array)}
 */
proto.m10.sdk.model.AccountInfo.prototype.getParentAccountId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes parent_account_id = 2;
 * This is a type-conversion wrapper around `getParentAccountId()`
 * @return {string}
 */
proto.m10.sdk.model.AccountInfo.prototype.getParentAccountId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getParentAccountId()));
};


/**
 * optional bytes parent_account_id = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getParentAccountId()`
 * @return {!Uint8Array}
 */
proto.m10.sdk.model.AccountInfo.prototype.getParentAccountId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getParentAccountId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.m10.sdk.model.AccountInfo} returns this
 */
proto.m10.sdk.model.AccountInfo.prototype.setParentAccountId = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string public_name = 3;
 * @return {string}
 */
proto.m10.sdk.model.AccountInfo.prototype.getPublicName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.m10.sdk.model.AccountInfo} returns this
 */
proto.m10.sdk.model.AccountInfo.prototype.setPublicName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string profile_image_url = 4;
 * @return {string}
 */
proto.m10.sdk.model.AccountInfo.prototype.getProfileImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.m10.sdk.model.AccountInfo} returns this
 */
proto.m10.sdk.model.AccountInfo.prototype.setProfileImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string code = 5;
 * @return {string}
 */
proto.m10.sdk.model.AccountInfo.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.m10.sdk.model.AccountInfo} returns this
 */
proto.m10.sdk.model.AccountInfo.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint32 decimal_places = 6;
 * @return {number}
 */
proto.m10.sdk.model.AccountInfo.prototype.getDecimalPlaces = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.m10.sdk.model.AccountInfo} returns this
 */
proto.m10.sdk.model.AccountInfo.prototype.setDecimalPlaces = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


goog.object.extend(exports, proto.m10.sdk.model);
