// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
        return msg.data;
    }
}

contract Ownable is Context {
    address private _owner;
    address private _previousOwner;
    uint256 private _lockTime;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor () {
        address msgSender = _msgSender();
        _owner = msgSender;

        emit OwnershipTransferred(address(0), msgSender);
    }

    /**
     * @dev Returns the address of the current owner.
     */
    function owner() public view returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(_owner == _msgSender(), "Ownable: caller is not the owner");
        _;
    }

     /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() public virtual onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    /**
     * @dev Transfers ownership of the contract to a new account (`newOwner`).
     * Can only be called by the current owner.
     */
    function transferOwnership(address newOwner) public virtual onlyOwner {
        require(newOwner != address(0), "Ownable: new owner is the zero address");
        emit OwnershipTransferred(_owner, newOwner);
        _owner = newOwner;
    }

    function geUnlockTime() public view returns (uint256) {
        return _lockTime;
    }

    //Locks the contract for owner for the amount of time provided
    function lock(uint256 time) public virtual onlyOwner {
        _previousOwner = _owner;
        _owner = address(0);
        _lockTime = block.timestamp + time;
        emit OwnershipTransferred(_owner, address(0));
    }

    //Unlocks the contract for owner when _lockTime is exceeds
    function unlock() public virtual {
        require(_previousOwner == msg.sender, "You don't have permission to unlock");
        require(block.timestamp > _lockTime , "Contract is locked until 7 days");
        emit OwnershipTransferred(_owner, _previousOwner);
        _owner = _previousOwner;
    }
}



interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `recipient`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `sender` to `recipient` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}


library SafeMath {
    /**
     * @dev Returns the addition of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `+` operator.
     *
     * Requirements:
     *
     * - Addition cannot overflow.
     */
    function add(uint256 a, uint256 b) internal pure returns (uint256) {
        uint256 c = a + b;
        require(c >= a, "SafeMath: addition overflow");

        return c;
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b) internal pure returns (uint256) {
        return sub(a, b, "SafeMath: subtraction overflow");
    }

    /**
     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on
     * overflow (when the result is negative).
     *
     * Counterpart to Solidity's `-` operator.
     *
     * Requirements:
     *
     * - Subtraction cannot overflow.
     */
    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b <= a, errorMessage);
        uint256 c = a - b;

        return c;
    }

    /**
     * @dev Returns the multiplication of two unsigned integers, reverting on
     * overflow.
     *
     * Counterpart to Solidity's `*` operator.
     *
     * Requirements:
     *
     * - Multiplication cannot overflow.
     */
    function mul(uint256 a, uint256 b) internal pure returns (uint256) {
        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the
        // benefit is lost if 'b' is also tested.
        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522
        if (a == 0) {
            return 0;
        }

        uint256 c = a * b;
        require(c / a == b, "SafeMath: multiplication overflow");

        return c;
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b) internal pure returns (uint256) {
        return div(a, b, "SafeMath: division by zero");
    }

    /**
     * @dev Returns the integer division of two unsigned integers. Reverts with custom message on
     * division by zero. The result is rounded towards zero.
     *
     * Counterpart to Solidity's `/` operator. Note: this function uses a
     * `revert` opcode (which leaves remaining gas untouched) while Solidity
     * uses an invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b > 0, errorMessage);
        uint256 c = a / b;
        // assert(a == b * c + a % b); // There is no case in which this doesn't hold

        return c;
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b) internal pure returns (uint256) {
        return mod(a, b, "SafeMath: modulo by zero");
    }

    /**
     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),
     * Reverts with custom message when dividing by zero.
     *
     * Counterpart to Solidity's `%` operator. This function uses a `revert`
     * opcode (which leaves remaining gas untouched) while Solidity uses an
     * invalid opcode to revert (consuming all remaining gas).
     *
     * Requirements:
     *
     * - The divisor cannot be zero.
     */
    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {
        require(b != 0, errorMessage);
        return a % b;
    }
}

interface WelfareCommandCenter {
  function updateWelfareAddress( address _comrade ) external;
  function updatePensionAddress( address _pension ) external;
  function getWelfareAddress( ) external view returns ( address );
  function getSocialSecurityAddress() external view returns ( address );
  function updateSSAddress( address _pension ) external;
  function getBonusVault( ) external view returns ( address );
}

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
