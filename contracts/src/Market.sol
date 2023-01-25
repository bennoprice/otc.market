// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.17;

interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
}

// TODO: use vaults to store deposits
// TODO: support native eth

contract Market {
   struct Offer {
      address owner;
      IERC20 tokenA;
      IERC20 tokenB;
      uint256 amountA;
      uint256 amountB;
   }

   Offer[] public offers;

   event Taken(uint256 indexed id, address taker);
   event Created(uint256 indexed id, Offer offer);
   event Cancelled(uint256 indexed id);

   function create(
      IERC20 tokenA,
      IERC20 tokenB,
      uint256 amountA,
      uint256 amountB
   ) external {
      require(address(tokenA) != address(0), "invalid token");
      require(address(tokenB) != address(0), "invalid token");
      require(address(tokenA) != address(tokenB), "tokens cannot be the same");

      require(amountA > 0, "invalid amount");
      require(amountB > 0, "invalid amount");

      tokenA.transferFrom(msg.sender, address(this), amountA);

      Offer memory offer = Offer(
         msg.sender,
         tokenA,
         tokenB,
         amountA,
         amountB
      );

      offers.push(offer);

      emit Created(offers.length-1, offer);
   }

   // check-effects-interaction pattern
   function cancel(uint256 id) external {
      Offer memory offer = offers[id];

      require(offer.owner == msg.sender, "must be owner");

      delete offers[id];

      offer.tokenA.transfer(msg.sender, offer.amountA);

      emit Cancelled(id);
   }

   // check-effects-interaction pattern
   function take(uint256 id) external {
      Offer memory offer = offers[id];

      require(offer.owner != address(0), "invalid offer");
      require(offer.owner != msg.sender, "cannot accept own offer");

      delete offers[id];

      offer.tokenB.transferFrom(msg.sender, offer.owner, offer.amountB);
      offer.tokenA.transfer(msg.sender, offer.amountA);

      emit Taken(id, msg.sender);
   }
}