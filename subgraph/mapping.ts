import { Created, Taken, Cancelled } from './generated/Market/Market';
import { Bytes, BigInt, Address } from '@graphprotocol/graph-ts';
import { Offer, Token } from './generated/schema';
import { ERC20 } from './generated/Market/ERC20';

function toBytes(id: BigInt): Bytes {
   return Bytes.fromByteArray(Bytes.fromBigInt(id));
}

function handleToken(id: Bytes): boolean {
   if (Token.load(id))
      return true;

   const contract = ERC20.bind(Address.fromBytes(id));

   const name = contract.try_name();
   if (name.reverted)
      return false;

   const symbol = contract.try_symbol();
   if (symbol.reverted)
      return false;

   const decimals = contract.try_decimals();
   if (decimals.reverted)
      return false;

   const token = new Token(id);

   token.name = name.value;
   token.symbol = symbol.value;
   token.decimals = decimals.value;
   
   token.save();

   return true;
}

export function handleCreated(event: Created): void {
   const params = event.params.offer;

   if (!handleToken(params.tokenA))
      return;
   if (!handleToken(params.tokenB))
      return;

   const offer = new Offer(toBytes(event.params.id));

   offer.owner = params.owner;
   offer.createdTimeStamp = event.block.timestamp;
   offer.tokenA = params.tokenA;
   offer.tokenB = params.tokenB;
   offer.amountA = params.amountA;
   offer.amountB = params.amountB;
   offer.state = "Open";

   offer.save();
}

export function handleTaken(event: Taken): void {
   const offer = Offer.load(toBytes(event.params.id));
   
   if (!offer)
      return;

   offer.taker = event.params.taker;
   offer.closedTimeStamp = event.block.timestamp;
   offer.state = "Taken";

   offer.save();
}

export function handleCancelled(event: Cancelled): void {
   const offer = Offer.load(toBytes(event.params.id))

   if (!offer)
      return;

   offer.closedTimeStamp = event.block.timestamp;
   offer.state = "Cancelled";

   offer.save();
}