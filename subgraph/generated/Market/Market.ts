// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Cancelled extends ethereum.Event {
  get params(): Cancelled__Params {
    return new Cancelled__Params(this);
  }
}

export class Cancelled__Params {
  _event: Cancelled;

  constructor(event: Cancelled) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Created extends ethereum.Event {
  get params(): Created__Params {
    return new Created__Params(this);
  }
}

export class Created__Params {
  _event: Created;

  constructor(event: Created) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get offer(): CreatedOfferStruct {
    return changetype<CreatedOfferStruct>(
      this._event.parameters[1].value.toTuple()
    );
  }
}

export class CreatedOfferStruct extends ethereum.Tuple {
  get owner(): Address {
    return this[0].toAddress();
  }

  get tokenA(): Address {
    return this[1].toAddress();
  }

  get tokenB(): Address {
    return this[2].toAddress();
  }

  get amountA(): BigInt {
    return this[3].toBigInt();
  }

  get amountB(): BigInt {
    return this[4].toBigInt();
  }
}

export class Taken extends ethereum.Event {
  get params(): Taken__Params {
    return new Taken__Params(this);
  }
}

export class Taken__Params {
  _event: Taken;

  constructor(event: Taken) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get taker(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Market__offersResult {
  value0: Address;
  value1: Address;
  value2: Address;
  value3: BigInt;
  value4: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: Address,
    value3: BigInt,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromAddress(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getOwner(): Address {
    return this.value0;
  }

  getTokenA(): Address {
    return this.value1;
  }

  getTokenB(): Address {
    return this.value2;
  }

  getAmountA(): BigInt {
    return this.value3;
  }

  getAmountB(): BigInt {
    return this.value4;
  }
}

export class Market extends ethereum.SmartContract {
  static bind(address: Address): Market {
    return new Market("Market", address);
  }

  offers(param0: BigInt): Market__offersResult {
    let result = super.call(
      "offers",
      "offers(uint256):(address,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Market__offersResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toAddress(),
      result[3].toBigInt(),
      result[4].toBigInt()
    );
  }

  try_offers(param0: BigInt): ethereum.CallResult<Market__offersResult> {
    let result = super.tryCall(
      "offers",
      "offers(uint256):(address,address,address,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Market__offersResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toAddress(),
        value[3].toBigInt(),
        value[4].toBigInt()
      )
    );
  }
}

export class CancelCall extends ethereum.Call {
  get inputs(): CancelCall__Inputs {
    return new CancelCall__Inputs(this);
  }

  get outputs(): CancelCall__Outputs {
    return new CancelCall__Outputs(this);
  }
}

export class CancelCall__Inputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class CancelCall__Outputs {
  _call: CancelCall;

  constructor(call: CancelCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get tokenA(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenB(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get amountA(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amountB(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }
}

export class TakeCall extends ethereum.Call {
  get inputs(): TakeCall__Inputs {
    return new TakeCall__Inputs(this);
  }

  get outputs(): TakeCall__Outputs {
    return new TakeCall__Outputs(this);
  }
}

export class TakeCall__Inputs {
  _call: TakeCall;

  constructor(call: TakeCall) {
    this._call = call;
  }

  get id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class TakeCall__Outputs {
  _call: TakeCall;

  constructor(call: TakeCall) {
    this._call = call;
  }
}
