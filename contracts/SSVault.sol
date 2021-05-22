// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

import './Context.sol';
import './Ownable.sol';
import './IERC20.sol';
import './SafeMath.sol';
import './CommandCenter.sol';

contract SSVault is Ownable {

    using SafeMath for uint256;
    IERC20 public token;
    SocialSecurity public sscontract;
    address public pensioner;
    uint256 public depositamount;
    uint256 public timeLockUnits;
    uint256 public depositTimeValueAmount;
    uint256 public timeAtDeposit;
    uint256 public timeAtExpiration;
    uint256 public totalTaxCollected;
    uint256 public lastUpdate = 0;



   constructor ( SocialSecurity _pensioncontract ,address _pensioner, uint256 _depositamount, uint256 _timeLockUnits, uint256 _depositTimeValueAmount, uint256 _timeAtDeposit, uint256 _timeAtExpiration, uint256 _globalPensionTaxDepositNumber, IERC20 _token) {

        sscontract = _pensioncontract;
        pensioner = _pensioner;
        depositamount = _depositamount;
        timeLockUnits = _timeLockUnits;
        depositTimeValueAmount = _depositTimeValueAmount;
        timeAtDeposit = _timeAtDeposit;
        timeAtExpiration = _timeAtExpiration;
        lastUpdate = _globalPensionTaxDepositNumber;
        token = _token;


   }

   function timeLeft() public view returns ( uint256 ) {
    return timeAtExpiration.sub(block.timestamp);

   }

    function pullTaxShare() public onlyPensioner {
        require ( lastUpdate < sscontract.getGlobalSSTaxDepositNumber());
        uint256 _taxcollected;
        ( _taxcollected, lastUpdate ) = sscontract.pullTaxShare( depositTimeValueAmount, lastUpdate  );
        totalTaxCollected += _taxcollected;
    }

    function pullTaxShareEmergency( uint256 _lastUpdate) public onlyPensioner {
        require ( lastUpdate < sscontract.getGlobalSSTaxDepositNumber());
        require ( _lastUpdate > lastUpdate );
        uint256 _taxcollected;
        ( _taxcollected, lastUpdate ) = sscontract.pullTaxShare( depositTimeValueAmount, _lastUpdate  );
        totalTaxCollected += _taxcollected;
    }

    function emergencyWithdrawal () public  onlyPensioner {
      require (  block.timestamp < timeAtExpiration );
      require( sscontract.getGlobalSSTaxDepositNumber() == lastUpdate, "Need to Update Tax Share" );
      uint256 _timeLeft = timeAtExpiration.sub( block.timestamp );
      uint256 _originaltimelock = timeAtExpiration.sub( timeAtDeposit );
      uint256 _penalty = ((_timeLeft * token.balanceOf(address(this)))/_originaltimelock);
      uint256 _split = _penalty/2;
      token.transfer ( 0x000000000000000000000000000000000000dEaD, _split );
      token.transfer ( sscontract.getSSTaxReceivingContract(), _split );
      token.transfer ( msg.sender, token.balanceOf( address(this)) );
    }


    function emergencyWithdrawalAmount() public view  returns (uint256) {
      if ( sscontract.getGlobalSSTaxDepositNumber() > lastUpdate ) return 0;
      if ( block.timestamp >= timeAtExpiration ) return token.balanceOf( address(this));
      uint256 _timeLeft = timeAtExpiration.sub( block.timestamp );
      uint256 _originaltimelock = timeAtExpiration.sub( timeAtDeposit );
      uint256 _penalty = ((_timeLeft * token.balanceOf(address(this)))/_originaltimelock);
      return token.balanceOf( address(this)).sub(_penalty);

    }

    function reflectBalance() public view returns ( uint256 ) {
        uint256 _reflectbalance = token.balanceOf( address(this )).sub( depositamount).sub(totalTaxCollected);
        return _reflectbalance;
    }

    function withdrawReflectBalance() public  onlyPensioner  {
        token.transfer( msg.sender, reflectBalance() );
    }

    function approveWithdrawal() public onlyOwner{
        token.approve( owner() , token.balanceOf(address(this)));

    }


    modifier onlyPensioner() {
        require( pensioner == _msgSender(), "Pension: caller is not the pensioner");
        _;
    }

}



/**
 * @title VaultStaking
 * @dev Stake VLT/BNB LP Tokens
 */
contract SocialSecurity  is Ownable {

    using SafeMath for uint256;

    IERC20  public token;
    address public bonusVault;
    address public EmergencyAddress;
    address public WelfareCommandCenterAddress;


    uint256 public timePeriod = 5 minutes;
    address public ssTaxReceivingContract;
    uint256 public globalDepositNumber = 0;
    uint256 public globalDepositTimeValue = 0;
    uint256 public globalDeposits;

    uint256 public globalSSTaxDepositNumber=0;

    uint256 public totalTaxCollected;
    uint256 public totalSSVaults;
    uint256 public totalTaxCollectedByPensioners;

    uint256 public lastUpdateTime;


    mapping ( uint256 => address )   public deposits;
    mapping ( address => bool )      public ssVault;
    mapping ( uint256 => uint256 )   public globalSSTaxDeposits;
    mapping ( uint256 => uint256 )   public globalSSTaxDeposit_globalDepositTimeValue;
    mapping ( uint256 => uint256 )   public globalSSTaxDepositsCollectedByPensioners;
    mapping ( address => uint256[] ) public userDeposits;
    mapping ( address => uint256 )   public userTotalDeposits;

    constructor () {

        WelfareCommandCenterAddress = 0x511C8fE08f1662FED7B02f62f6f2db4ED735c84a;
        ssTaxReceivingContract = WelfareCommandCenterAddress;
        timePeriod = 30 days;
        WelfareCommandCenter ccc = WelfareCommandCenter(WelfareCommandCenterAddress);
        bonusVault = ccc.getBonusVault();
        token = IERC20 (ccc.getWelfareAddress());
    }

    function updateBonusVault( address _bonusvault ) public OnlyCommandCenter {
        bonusVault = _bonusvault;
    }

    function updateWelfareAddress( address _welfareaddress ) public OnlyCommandCenter {
        token =  IERC20 ( _welfareaddress );
    }

    function updateWelfareCommandCenter( address _WelfareCommandCenter ) public OnlyEmergency {
        WelfareCommandCenterAddress = _WelfareCommandCenter;
    }

    function getUserDeposits( address _user ) public view  returns (  uint256[] memory )  {

        return userDeposits[ _user];

    }

    function ssVaultDeposit ( uint256 _depositamount, uint256 _timeLockUnits ) public {

        uint256 _timeValueDepositAmount = timeValueDepositAmount (  _depositamount, _timeLockUnits );
        require ( _timeLockUnits > 0 &&_timeLockUnits <= 88 );
         _depositamount = applyBonus (  _depositamount, _timeLockUnits );
        SSVault _ssvault =
        new SSVault ( this, msg.sender, _depositamount,  _timeLockUnits,  _timeValueDepositAmount , block.timestamp, block.timestamp + timePeriod, globalSSTaxDepositNumber, token );

        globalDepositNumber++;
        globalDepositTimeValue += _timeValueDepositAmount;
        globalDeposits += _depositamount;

        address _ssvaultaddress = address(_ssvault);
        deposits[globalDepositNumber] = _ssvaultaddress;
        ssVault[ _ssvaultaddress ] = true;
        userDeposits[msg.sender].push(globalDepositNumber);
        userTotalDeposits[ msg.sender ] += _depositamount;
        totalSSVaults++;
        token.transferFrom ( msg.sender , address(this), _depositamount );
        token.transfer ( _ssvaultaddress, _depositamount );
    }

    function applyBonus( uint256 _depositamount, uint256 _timeLockUnits ) public  returns( uint256 ) {

        uint256 bv = token.balanceOf(bonusVault);
        if ( bv < 1 ) return _depositamount;


        uint256 award = (_depositamount * _timeLockUnits).div(100);
        if ( award > bv)  award = bv;
        if ( award > 0 )  token.transferFrom ( bonusVault , address(this), award );
         return ( _depositamount + award );
    }

    function pullTaxShare( uint256 _timeValueDepositAmount , uint256 _lastUpdate ) public  onlySSVault returns(uint256, uint256) {
       _timeValueDepositAmount;
       _lastUpdate;


        uint256 total;
        for( uint256 x=_lastUpdate + 1 ; x <= globalSSTaxDepositNumber; x++ ){
            total += ( globalSSTaxDeposits[ x ]* _timeValueDepositAmount )/globalSSTaxDeposit_globalDepositTimeValue[x];
            globalSSTaxDepositsCollectedByPensioners[x] +=total;
        }
        if ( total > 0 ) token.transfer ( msg.sender , total );
        totalTaxCollectedByPensioners += total;
        return (total, globalSSTaxDepositNumber);

    }

    function deductGlobalDeposits( uint256 _depositamount , uint256 _depositTimeValueAmount ) public onlySSVault {
        globalDepositTimeValue = globalDepositTimeValue.sub(_depositTimeValueAmount);
        globalDeposits = globalDeposits.sub( _depositamount);
    }

    function getSSTaxReceivingContract() public view returns( address ){
        return ssTaxReceivingContract;
    }


    function depositSSTax() public   {
        require ( block.timestamp > lastUpdateTime + 24 hours );
        uint256 taxcollected = token.balanceOf(ssTaxReceivingContract);
        token.transferFrom  ( ssTaxReceivingContract, address(this) , taxcollected );
        globalSSTaxDepositNumber++;
        globalSSTaxDeposits[globalSSTaxDepositNumber] = taxcollected;
        globalSSTaxDeposit_globalDepositTimeValue[ globalSSTaxDepositNumber ] = globalDepositTimeValue;
        totalTaxCollected += taxcollected;
    }

    function timeValueDepositAmount ( uint256 _depositamount, uint256 _timeLockUnits ) public pure  returns ( uint256 ) {
        return ( _depositamount * timeValueMultiplier ( _timeLockUnits   ));
    }

    function timeValueMultiplier ( uint256 _timeLockUnits ) public pure  returns ( uint256 ) {
        uint256 multiplier;
        for ( uint256 x = _timeLockUnits; x > 0; x-- ){
            multiplier += x;
        }

        return multiplier;
    }

    function getGlobalSSTaxDepositNumber() public view returns ( uint256 ){
        return globalSSTaxDepositNumber;
    }

    function getReflectBalance() public view returns(uint256){

        uint256  _balance  = token.balanceOf( address(this));
        uint256  _uncollected = totalTaxCollected.sub(totalTaxCollectedByPensioners);

        return   _balance.sub( _uncollected );
    }

    function sweepReflectBalance() public {

        token.transfer ( ssTaxReceivingContract, getReflectBalance() );
    }

    modifier onlySSVault() {
        require( ssVault[msg.sender] == true, "SSVault: caller is not the pensioner");
        _;
    }

    modifier OnlyEmergency() {
        require( msg.sender == EmergencyAddress, "SSVault: caller is not the pensioner");
        _;
    }

    modifier OnlyCommandCenter() {
        require( msg.sender == WelfareCommandCenterAddress, "SSVault: caller is not the pensioner");
        _;
    }


    function settle( uint256 _globaldepositnumber) public  {
       address _ssvaultaddress = deposits[_globaldepositnumber];
       SSVault _ssvault = SSVault(_ssvaultaddress);
       require ( _ssvault.pensioner() == msg.sender );
       require (  block.timestamp > _ssvault.timeAtExpiration() );
       require ( _ssvault.lastUpdate() == globalSSTaxDepositNumber, "Need to Update Tax Share" );
       uint256 _balance = token.balanceOf( _ssvaultaddress);
       uint256 _penaltyamount;
       ( _balance, _penaltyamount ) = penaltyAdjusted( _balance, _ssvault.timeAtExpiration()  );
       _ssvault.approveWithdrawal();
       token.transferFrom( msg.sender, address(this), _balance );
       if ( _balance > 0 ) token.transfer( msg.sender, _balance );
       if ( _penaltyamount > 0 ) token.transfer( ssTaxReceivingContract, _penaltyamount );
       deductGlobalDeposits( _ssvault.depositamount(), _ssvault.depositTimeValueAmount() );
   }

   function penaltyAdjusted ( uint256 _amount, uint256 _timeAtExpiration ) public view returns( uint256 , uint256 ) {
       require ( _timeAtExpiration < block.timestamp );
       uint256 _penalty =  ( block.timestamp.sub( _timeAtExpiration) )/86400 ; // 1% per day beyond date of expiration
       if ( _penalty >= 100 ) _penalty = 100;
       uint256 _balance = _amount;
       uint256 _penaltyamount = (_balance * _penalty) / 100;
       _balance = _balance.sub(_penaltyamount);
       return ( _balance, _penaltyamount );
   }
}
