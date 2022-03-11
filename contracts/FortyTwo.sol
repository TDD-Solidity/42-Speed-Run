// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract FortyTwo {
  
  mapping(address => uint) stuff;

  constructor() public {
  }

  function get42() public pure returns (uint) {
    return 42;
  }

}
