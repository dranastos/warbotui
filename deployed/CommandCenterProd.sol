// Sources flattened with hardhat v2.3.0 https://hardhat.org

// File contracts/CommandCenter.sol

// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

interface WelfareCommandCenter {
  function updateWelfareAddress( address _comrade ) external;
  function updatePensionAddress( address _pension ) external;
  function getWelfareAddress( ) external view returns ( address );
  function getSocialSecurityAddress() external view returns ( address );
  function updateSSAddress( address _pension ) external;
  function getBonusVault( ) external view returns ( address );
}
