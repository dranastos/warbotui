/**
 *Submitted for verification at BscScan.com on 2021-03-01
*/

/**
 *Submitted for verification at BscScan.com on 2021-03-01
*/

/**
  
   #BEE
   
   #LIQ+#RFI+#SHIB+#DOGE = #BEE

   #SAFEMOON features:
   3% fee auto add to the liquidity pool to locked forever when selling
   2% fee auto distribute to all holders
   I created a black hole so #Bee token will deflate itself in supply with every transaction
   50% Supply is burned at start.
   

 */

pragma solidity ^0.8.7;
// SPDX-License-Identifier: Unlicensed
interface IERC20 {

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



/**
 * @dev Wrappers over Solidity's arithmetic operations with added overflow
 * checks.
 *
 * Arithmetic operations in Solidity wrap on overflow. This can easily result
 * in bugs, because programmers usually assume that an overflow raises an
 * error, which is the standard behavior in high level programming languages.
 * `SafeMath` restores this intuition by reverting the transaction when an
 * operation overflows.
 *
 * Using this library instead of the unchecked operations eliminates an entire
 * class of bugs, so it's recommended to use it always.
 */
 
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

abstract contract Context {
    function _msgSender() internal view virtual returns (address payable) {
        return payable(msg.sender);
    }

    function _msgData() internal view virtual returns (bytes memory) {
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
        return msg.data;
    }
}


/**
 * @dev Collection of functions related to the address type
 */
library Address {
    /**
     * @dev Returns true if `account` is a contract.
     *
     * [IMPORTANT]
     * ====
     * It is unsafe to assume that an address for which this function returns
     * false is an externally-owned account (EOA) and not a contract.
     *
     * Among others, `isContract` will return false for the following
     * types of addresses:
     *
     *  - an externally-owned account
     *  - a contract in construction
     *  - an address where a contract will be created
     *  - an address where a contract lived, but was destroyed
     * ====
     */
    function isContract(address account) internal view returns (bool) {
        // According to EIP-1052, 0x0 is the value returned for not-yet created accounts
        // and 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470 is returned
        // for accounts without code, i.e. `keccak256('')`
        bytes32 codehash;
        bytes32 accountHash = 0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470;
        // solhint-disable-next-line no-inline-assembly
        assembly { codehash := extcodehash(account) }
        return (codehash != accountHash && codehash != 0x0);
    }

    /**
     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to
     * `recipient`, forwarding all available gas and reverting on errors.
     *
     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost
     * of certain opcodes, possibly making contracts go over the 2300 gas limit
     * imposed by `transfer`, making them unable to receive funds via
     * `transfer`. {sendValue} removes this limitation.
     *
     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].
     *
     * IMPORTANT: because control is transferred to `recipient`, care must be
     * taken to not create reentrancy vulnerabilities. Consider using
     * {ReentrancyGuard} or the
     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].
     */
    function sendValue(address payable recipient, uint256 amount) internal {
        require(address(this).balance >= amount, "Address: insufficient balance");

        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value
        (bool success, ) = recipient.call{ value: amount }("");
        require(success, "Address: unable to send value, recipient may have reverted");
    }

    /**
     * @dev Performs a Solidity function call using a low level `call`. A
     * plain`call` is an unsafe replacement for a function call: use this
     * function instead.
     *
     * If `target` reverts with a revert reason, it is bubbled up by this
     * function (like regular Solidity function calls).
     *
     * Returns the raw returned data. To convert to the expected return value,
     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].
     *
     * Requirements:
     *
     * - `target` must be a contract.
     * - calling `target` with `data` must not revert.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data) internal returns (bytes memory) {
      return functionCall(target, data, "Address: low-level call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with
     * `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {
        return _functionCallWithValue(target, data, 0, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but also transferring `value` wei to `target`.
     *
     * Requirements:
     *
     * - the calling contract must have an ETH balance of at least `value`.
     * - the called Solidity function must be `payable`.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {
        return functionCallWithValue(target, data, value, "Address: low-level call with value failed");
    }

    /**
     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but
     * with `errorMessage` as a fallback revert reason when `target` reverts.
     *
     * _Available since v3.1._
     */
    function functionCallWithValue(address target, bytes memory data, uint256 value, string memory errorMessage) internal returns (bytes memory) {
        require(address(this).balance >= value, "Address: insufficient balance for call");
        return _functionCallWithValue(target, data, value, errorMessage);
    }

    function _functionCallWithValue(address target, bytes memory data, uint256 weiValue, string memory errorMessage) private returns (bytes memory) {
        require(isContract(target), "Address: call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.call{ value: weiValue }(data);
        if (success) {
            return returndata;
        } else {
            // Look for revert reason and bubble it up if present
            if (returndata.length > 0) {
                // The easiest way to bubble the revert reason is using memory via assembly

                // solhint-disable-next-line no-inline-assembly
                assembly {
                    let returndata_size := mload(returndata)
                    revert(add(32, returndata), returndata_size)
                }
            } else {
                revert(errorMessage);
            }
        }
    }
}

/**
 * @dev Contract module which provides a basic access control mechanism, where
 * there is an account (an owner) that can be granted exclusive access to
 * specific functions.
 *
 * By default, the owner account will be the one that deploys the contract. This
 * can later be changed with {transferOwnership}.
 *
 * This module is used through inheritance. It will make available the modifier
 * `onlyOwner`, which can be applied to your functions to restrict their use to
 * the owner.
 */
contract Ownable is Context {
    address private _owner;
    address private _previousOwner;
    uint256 private _lockTime;

    event OwnershipTransferred(address indexed previousOwner, address indexed newOwner);

    /**
     * @dev Initializes the contract setting the deployer as the initial owner.
     */
    constructor ()  {
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
        require( block.timestamp > _lockTime , "Contract is locked until 7 days");
        emit OwnershipTransferred(_owner, _previousOwner);
        _owner = _previousOwner;
    }
}

contract WarBotStatsData is Ownable{
 
    
    using SafeMath for uint256;
    mapping ( uint256 => uint256 ) public WarbotXP;
    mapping ( uint256 => uint256 ) public WarbotLevel;
    // 0 tractor
    // 1 walker
    // 2 air drone
    
    mapping ( uint256 => uint8 ) public WarbotType;
    mapping ( uint256 => uint256 ) public warbotLevelCount;
    mapping ( uint256 => uint256 ) public warbotWins;
    mapping ( uint256 => uint256 ) public warbotLosses;
    mapping ( uint256 => WarBotProfile ) public WarBotProfiles;
    mapping ( uint256 =>  WarBotCurrentStat ) public  WarBotCurrentStats;
    mapping ( uint256 => address ) public WarbotHandOff;
    mapping ( uint256 => uint256 ) public lastWarAt;
    
    address public oracle;
    address[] public EngineContracts;
    
    mapping ( uint256 => bool ) public RequestReroll;
    
    event levelStatsRerollRequested ( uint256 _warbot );
    event levelStatsRolled ( uint256 _warbot );
    
    event WarbotDamaged ( uint256 _warbot, uint256 _damage );
    event WarbotAttackDamaged ( uint256 _warbot, uint256 _damage );
    event WarbotDefenseDamaged ( uint256 _warbot, uint256 _damage );
    event WarbotSpeedDamaged ( uint256 _warbot, uint256 _damage );
    
    event WarbotRepaired ( uint256 _warbot, uint256 _repair );
    event WarbotAttackRepaired ( uint256 _warbot, uint256 _damage );
    event WarbotDefenseRepaired ( uint256 _warbot, uint256 _damage );
    event WarbotSpeedRepaired ( uint256 _warbot, uint256 _damage );
    event warbotUpgraded ( uint256 _warbot, uint256 _level );
   

    
    struct WarBotProfile {
           
            address creator;
            uint256 hitpoints;
            uint256 attack;
            uint256 defense;
            uint256 speed;
            uint256 slots;
            uint256 rerollCount;
            uint256 basehitpoints;
            uint256 baseattack;
            uint256 basedefense;
            uint256 basespeed;
            uint256[] globalXYZ;
            uint8 movement;
            
            
    }    
    
    struct WarBotCurrentStat {
        
        bool _levelinit;
        uint256   _warbothitpoints;
        uint256   _warbotattack;
        uint256   _warbotdefense;
        uint256   _warbotspeed;
        uint256[] _xyz;
        uint256[] _specialeffect;
        uint256[] _specialduration;
        uint8[]   _nftslots;
        uint8     _movement;
    }
    
    
    constructor () {
        oracle = 0x7cE0E55703F12D03Eb53B918aD6B9EB80d188afB;
    }
    
    
    function setWarBotGlobalXYZ ( uint256 _warbot, uint256[] memory _xyz ) public {
        
        WarBotProfiles[_warbot].globalXYZ= _xyz;
    }
    
    function getWarBotGlobalXYZ ( uint256 _warbot ) public view returns(uint256[] memory){
        
        return WarBotProfiles[_warbot].globalXYZ;
    }
    
    
    
    function setWarBotWins ( uint256 _warbot ) public {
        
        warbotWins[_warbot]++;
    }
    
    function setWarBotLosses ( uint256 _warbot ) public {
        
        warbotLosses[_warbot]++;
    }
    
    function incrementWarbotRerollCount ( uint256 _warbot ) public onlyEngine {
        
        WarBotProfiles[_warbot].rerollCount++;
    }
    
    function getRerollCount ( uint256 _warbot ) public view returns(uint256) {
        
        return WarBotProfiles[_warbot].rerollCount;
    }
             
    function setWarbotHandoff ( uint256 _warbot ) public {
        
        WarbotHandOff[ _warbot ] = msg.sender;
    }
    
    function incrementWarbotXP ( uint256 _warbot, uint256 _xp ) public {
        
        WarbotXP[ _warbot ] += _xp;
    }
    
    function getOracle ( ) public view returns (address){
        
        return oracle;
    }
    
    function getWarBotLevel ( uint256 _warbot ) public view returns (uint256){
        
        return WarbotLevel[ _warbot ];
    }
    
    function setWarBotCurrentStats( uint256 _warbot, uint256 _warbothitpoints,  uint256 _warbotattack, uint256 _warbotdefense, 
                                   uint256 _warbotspeed, uint256[] memory _xyz, uint256[]  memory _specialeffect, 
                                   uint256[] memory _specialduration , uint8[] memory _nftslots) public {
        
         WarBotCurrentStats[_warbot]._warbothitpoints   = _warbothitpoints;  
         WarBotCurrentStats[_warbot]._warbotattack = _warbotattack;
         WarBotCurrentStats[_warbot]._warbotdefense = _warbotdefense;
         WarBotCurrentStats[_warbot]._warbotspeed = _warbotspeed;
         WarBotCurrentStats[_warbot]._xyz = _xyz;
         WarBotCurrentStats[_warbot]._specialeffect = _specialeffect;
         WarBotCurrentStats[_warbot]._specialduration = _specialduration;
         WarBotCurrentStats[_warbot]._nftslots = _nftslots;
    }
    
    function repairWarbot( uint256 _warbot, uint256 _warbothitpoints,  uint256 _warbotattack, uint256 _warbotdefense, 
                                   uint256 _warbotspeed, uint8 _movement  ) public {
        
         if ( WarBotCurrentStats[_warbot]._warbothitpoints + _warbothitpoints > WarBotProfiles[_warbot].hitpoints ) _warbothitpoints = WarBotProfiles[_warbot].hitpoints;
         if ( WarBotCurrentStats[_warbot]._warbotattack + _warbotdefense > WarBotProfiles[_warbot].defense ) _warbothitpoints = WarBotProfiles[_warbot].defense;
         if ( WarBotCurrentStats[_warbot]._warbotdefense + _warbotattack > WarBotProfiles[_warbot].attack ) _warbothitpoints = WarBotProfiles[_warbot].attack;
         if ( WarBotCurrentStats[_warbot]._warbotspeed + _warbotspeed > WarBotProfiles[_warbot].speed ) _warbothitpoints = WarBotProfiles[_warbot].speed;
         if ( _movement > WarBotProfiles[_warbot].movement) _warbothitpoints = WarBotProfiles[_warbot].movement;
         
         WarBotCurrentStats[_warbot]._warbothitpoints   += _warbothitpoints;  
         WarBotCurrentStats[_warbot]._warbotattack += _warbotattack;
         WarBotCurrentStats[_warbot]._warbotdefense += _warbotdefense;
         WarBotCurrentStats[_warbot]._warbotspeed += _warbotspeed;
         WarBotCurrentStats[_warbot]._movement += _movement;
        
    }
    
    
    
    
    
    
    function getWarbotProfile ( uint256 _warbot ) public view returns( WarBotProfile memory ){
        return WarBotProfiles[_warbot];
    }
    
    function getWarbotCurrentStats ( uint256 _warbot ) public view returns( WarBotCurrentStat memory ){
        return WarBotCurrentStats[_warbot];
    }
    
    function getWarbotCurrentMovement ( uint256 _warbot ) public view returns( uint8  ){
        return WarBotCurrentStats[_warbot]._movement;
    }
    
    function getWarbotCurrentAttack ( uint256 _warbot ) public view returns( uint256  ){
        return WarBotCurrentStats[_warbot]._warbotattack;
    }
    
    function getWarbotCurrentDefense ( uint256 _warbot ) public view returns( uint256  ){
        return WarBotCurrentStats[_warbot]._warbotdefense;
    }
    
    function getWarbotCurrentSpeed ( uint256 _warbot ) public view returns( uint256  ){
        return WarBotCurrentStats[_warbot]._warbotspeed;
    }
    
    function setWarbotType ( uint256 _warbot, uint8 _type ) public onlyOracle {
        
        WarbotType[ _warbot ] = _type;
    }
    
    function rollStats ( uint256 _warbot, uint256 _hitpoints, uint256 _attack, uint256 _defense, uint256 _speed, uint8 _type, uint8 _movement ) public onlyOracle {
        
        WarBotProfiles[ _warbot ].hitpoints = WarBotProfiles[ _warbot ].basehitpoints + _hitpoints;
        WarBotProfiles[ _warbot ].attack = WarBotProfiles[ _warbot ].baseattack + _attack;
        WarBotProfiles[ _warbot ].defense = WarBotProfiles[ _warbot ].basedefense + _defense;
        WarBotProfiles[ _warbot ].speed = WarBotProfiles[ _warbot ].basespeed + _speed;
        RequestReroll[_warbot]=false;
        if (_type > 0 ) setWarbotType ( _warbot, _type );
        if (_movement > 0 ) WarBotProfiles[ _warbot ].movement += _movement;
        if ( WarBotCurrentStats[ _warbot ]._levelinit == false ) {
            
            
             WarBotCurrentStats[_warbot]._warbothitpoints   =  WarBotProfiles[ _warbot ].basehitpoints + _hitpoints;
             WarBotCurrentStats[_warbot]._warbotattack = WarBotProfiles[ _warbot ].baseattack + _attack;
             WarBotCurrentStats[_warbot]._warbotdefense = WarBotProfiles[ _warbot ].basedefense + _defense;
             WarBotCurrentStats[_warbot]._warbotspeed = WarBotProfiles[ _warbot ].basespeed + _speed;
             WarBotCurrentStats[ _warbot ]._levelinit = true;
        }
        
        emit levelStatsRolled ( _warbot );
    }
    
    
    function requestRerollOfStats ( uint256 _warbot ) public onlyEngine {
        
        RequestReroll[_warbot] = true;
        emit levelStatsRerollRequested ( _warbot );
    }
    
    function setSlots( uint256 _warbot, uint8 _slots ) public {
        WarBotProfiles[_warbot].slots = _slots;
    }
    
    function setCreator( uint256 _warbot, address _creator ) public {
        WarBotProfiles[_warbot].creator = _creator;
    }
    
     function getCreator( uint256 _warbot ) public view returns(address) {
       return  WarBotProfiles[_warbot].creator;
     }
    
    function zeroWarbotLevel( uint256 _warbot ) public {
        uint256 _level = WarbotLevel[_warbot];
        WarbotLevel[_warbot] = 0;
        warbotLevelCount[_level].sub(1);
        
        
    }
    
    function incrementWarbotLevel( uint256 _warbot ) public {
        uint256 _level = WarbotLevel[_warbot];
        WarbotLevel[_warbot]++;
        warbotLevelCount[WarbotLevel[_warbot]]++;
        if( _level != 0 ) warbotLevelCount[_level]--;
        requestRerollOfStats(_warbot);
        WarBotProfiles[_warbot].basehitpoints = WarBotProfiles[ _warbot ].hitpoints;
        WarBotProfiles[_warbot].baseattack = WarBotProfiles[ _warbot ].attack;
        WarBotProfiles[_warbot].basedefense = WarBotProfiles[ _warbot ].defense;
        WarBotProfiles[_warbot].basespeed = WarBotProfiles[ _warbot ].speed;
        WarBotProfiles[ _warbot ].rerollCount = 0;
        WarBotCurrentStats[ _warbot ]._levelinit = false;
        emit warbotUpgraded ( _warbot, WarbotLevel[_warbot] );
        
    }
    
    
    
    function incrementReroll( uint256 _warbot ) public {
        WarBotProfiles[_warbot].rerollCount++;
    }
    
    function getCurrentRerollCount( uint256 _warbot ) public view returns(uint256) {
        return WarBotProfiles[_warbot].rerollCount;
    }
    
    function setCurrentHitPoint( uint256 _warbot , uint256 _warbothitpoints) public {
        WarBotCurrentStats[_warbot]._warbothitpoints   = _warbothitpoints; 
        
    }
    
    function getCurrentHitPoint( uint256 _warbot ) public view returns(uint256){
        return WarBotCurrentStats[_warbot]._warbothitpoints; 
        
    }
    
    function damageWarbot ( uint256 _warbot, uint256 _damage )  public {
        unchecked{ WarBotCurrentStats[_warbot]._warbothitpoints -= _damage; }
        if ( WarBotCurrentStats[_warbot]._warbothitpoints >   WarBotProfiles[_warbot].hitpoints )  
                                                            WarBotCurrentStats[_warbot]._warbothitpoints = 0;
        emit WarbotDamaged ( _warbot, _damage );
        
    }
    
    function repairWarbot ( uint256 _warbot, uint256 _repair )  public {
        WarBotCurrentStats[_warbot]._warbothitpoints += _repair; 
        if ( WarBotCurrentStats[_warbot]._warbothitpoints >   WarBotProfiles[_warbot].hitpoints )  
                                                            WarBotCurrentStats[_warbot]._warbothitpoints = WarBotProfiles[_warbot].hitpoints;
        emit WarbotRepaired (  _warbot, _repair ); 
    }
    
    
    function damageWarbotDefense ( uint256 _warbot, uint256 _damage )  public {
       unchecked{ WarBotCurrentStats[_warbot]._warbotdefense -= _damage; }
        if ( WarBotCurrentStats[_warbot]._warbotdefense >   WarBotProfiles[_warbot].defense )  
                                                            WarBotCurrentStats[_warbot]._warbotdefense = 0;
        emit  WarbotDefenseDamaged (  _warbot, _damage );
    }
    
    function repairWarbotDefense ( uint256 _warbot, uint256 _repair )  public {
        WarBotCurrentStats[_warbot]._warbotdefense += _repair; 
        if ( WarBotCurrentStats[_warbot]._warbotdefense >   WarBotProfiles[_warbot].defense )  
                                                            WarBotCurrentStats[_warbot]._warbotdefense = WarBotProfiles[_warbot].defense;
        emit WarbotDefenseRepaired (  _warbot, _repair ); 
    
        
    }
    
    function damageWarbotAttack ( uint256 _warbot, uint256 _damage )  public {
        unchecked{WarBotCurrentStats[_warbot]._warbotattack -= _damage; }
        if ( WarBotCurrentStats[_warbot]._warbotattack >   WarBotProfiles[_warbot].attack )  
                                                            WarBotCurrentStats[_warbot]._warbotattack = 0;
        emit WarbotAttackDamaged ( _warbot, _damage );
    }
    
    function repairWarbotAttack ( uint256 _warbot, uint256 _repair )  public {
        WarBotCurrentStats[_warbot]._warbotattack += _repair; 
        if ( WarBotCurrentStats[_warbot]._warbotattack >   WarBotProfiles[_warbot].attack )  
                                                            WarBotCurrentStats[_warbot]._warbotattack = WarBotProfiles[_warbot].attack;
        emit WarbotAttackRepaired (  _warbot, _repair ); 
        
    }
    
    function damageWarbotSpeed ( uint256 _warbot, uint256 _damage )  public {
        unchecked{WarBotCurrentStats[_warbot]._warbotspeed -= _damage; }
        if ( WarBotCurrentStats[_warbot]._warbotspeed >   WarBotProfiles[_warbot].speed )  
                                                            WarBotCurrentStats[_warbot]._warbotspeed = 0;
         emit WarbotSpeedDamaged (  _warbot, _damage );
    }
    
    function repairWarbotSpeed ( uint256 _warbot, uint256 _repair )  public {
        WarBotCurrentStats[_warbot]._warbotspeed += _repair; 
        if ( WarBotCurrentStats[_warbot]._warbotspeed >   WarBotProfiles[_warbot].speed )  
                                                            WarBotCurrentStats[_warbot]._warbotspeed = WarBotProfiles[_warbot].speed;
        emit WarbotSpeedRepaired (  _warbot, _repair );                                                    
        
    }
    
     function damageWarbotMovement ( uint256 _warbot, uint8 _damage )  public {
        unchecked{WarBotCurrentStats[_warbot]._movement -= _damage; }
        if ( WarBotCurrentStats[_warbot]._movement >   WarBotProfiles[_warbot].movement )  
                                                            WarBotCurrentStats[_warbot]._movement = 0;
         emit WarbotSpeedDamaged (  _warbot, _damage );
    }
    
    function repairWarbotMovement ( uint256 _warbot, uint8 _repair )  public {
        WarBotCurrentStats[_warbot]._movement += _repair; 
        if ( WarBotCurrentStats[_warbot]._movement >   WarBotProfiles[_warbot].movement )  
                                                            WarBotCurrentStats[_warbot]._movement = WarBotProfiles[_warbot].movement;
        emit WarbotSpeedRepaired (  _warbot, _repair );                                                    
        
    }
    
    
    
    function bindCardtoWarbot( uint256 _warbot, uint8 _cardtype, uint8 _bonus ) public {
        
        
        WarBotProfile storage _profile = WarBotProfiles[_warbot];
        if ( _cardtype == 1 ) _profile.attack += _bonus;
        if ( _cardtype == 2 ) _profile.defense += _bonus;
        if ( _cardtype == 3 )_profile.speed += _bonus;
        if ( _cardtype == 4 )_profile.hitpoints += _bonus;
       
        
    }
    
    
    function setWarbotHandoff ( uint256 _warbot, address _contract ) public {
        WarbotHandOff[_warbot] = _contract;
        
    }
    
    
    function setEngineContracts ( address[] memory _addresses ) public onlyOwner {
        EngineContracts = _addresses;
    }
    
    function setOracle ( address _address ) public onlyOwner {
        oracle = _address;
    }
    
    
    
    
    
    modifier onlyEngine() {

        bool team_member = false;
        for( uint i=0; i < EngineContracts.length ; i++){
          if( EngineContracts[i] == msg.sender ) team_member = true;
        }
        require(team_member == true , 'Game Engine Contracts Only');
        _;
    }
    
    modifier onlyOracle() {
        require( msg.sender == oracle, "Oracle Only");
        _;
    }
    
    
}