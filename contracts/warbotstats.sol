pragma solidity ^0.8.7;


// SPDX-License-Identifier: Unlicensed
interface IERC20 {

    function totalSupply() external view returns (uint256);
     function decimals() external returns (uint256);

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
        // This method relies on extcodesize, which returns 0 for contracts in
        // construction, since the code is only stored at the end of the
        // constructor execution.

        uint256 size;
        // solhint-disable-next-line no-inline-assembly
        assembly { size := extcodesize(account) }
        return size > 0;
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
        return functionCallWithValue(target, data, 0, errorMessage);
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
        require(isContract(target), "Address: call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.call{ value: value }(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {
        return functionStaticCall(target, data, "Address: low-level static call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a static call.
     *
     * _Available since v3.3._
     */
    function functionStaticCall(address target, bytes memory data, string memory errorMessage) internal view returns (bytes memory) {
        require(isContract(target), "Address: static call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.staticcall(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {
        return functionDelegateCall(target, data, "Address: low-level delegate call failed");
    }

    /**
     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],
     * but performing a delegate call.
     *
     * _Available since v3.4._
     */
    function functionDelegateCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {
        require(isContract(target), "Address: delegate call to non-contract");

        // solhint-disable-next-line avoid-low-level-calls
        (bool success, bytes memory returndata) = target.delegatecall(data);
        return _verifyCallResult(success, returndata, errorMessage);
    }

    function _verifyCallResult(bool success, bytes memory returndata, string memory errorMessage) private pure returns(bytes memory) {
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

library ExtendedMath {
    /**
     * @return The given number raised to the power of 2
     */
    function pow2(uint256 a) internal pure returns (uint256) {
        if (a == 0) {
            return 0;
        }
        uint256 c = a * a;
        require(c / a == a, "ExtendedMath: squaring overflow");
        return c;
    }

    
    function sqrt(uint y) internal pure returns (uint z) {
        if (y > 3) {
            z = y;
            uint x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }
}

abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691
        return msg.data;
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
abstract contract Ownable is Context {
    address private _owner;

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
    function owner() public view virtual returns (address) {
        return _owner;
    }

    /**
     * @dev Throws if called by any account other than the owner.
     */
    modifier onlyOwner() {
        require(owner() == _msgSender(), "Ownable: caller is not the owner");
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
}

abstract contract ReentrancyGuard {
    // Booleans are more expensive than uint256 or any type that takes up a full
    // word because each write operation emits an extra SLOAD to first read the
    // slot's contents, replace the bits taken up by the boolean, and then write
    // back. This is the compiler's defense against contract upgrades and
    // pointer aliasing, and it cannot be disabled.

    // The values being non-zero value makes deployment a bit more expensive,
    // but in exchange the refund on every call to nonReentrant will be lower in
    // amount. Since refunds are capped to a percentage of the total
    // transaction's gas, it is best to keep them low in cases like this one, to
    // increase the likelihood of the full refund coming into effect.
    uint256 private constant _NOT_ENTERED = 1;
    uint256 private constant _ENTERED = 2;

    uint256 private _status;

    constructor() {
        _status = _NOT_ENTERED;
    }

    /**
     * @dev Prevents a contract from calling itself, directly or indirectly.
     * Calling a `nonReentrant` function from another `nonReentrant`
     * function is not supported. It is possible to prevent this from happening
     * by making the `nonReentrant` function external, and make it call a
     * `private` function that does the actual work.
     */
    modifier nonReentrant() {
        // On the first call to nonReentrant, _notEntered will be true
        require(_status != _ENTERED, "ReentrancyGuard: reentrant call");

        // Any calls to nonReentrant after this point will fail
        _status = _ENTERED;

        _;

        // By storing the original value once again, a refund is triggered (see
        // https://eips.ethereum.org/EIPS/eip-2200)
        _status = _NOT_ENTERED;
    }
}

library SafeERC20 {
    using Address for address;

    function safeTransfer(
        IERC20 token,
        address to,
        uint256 value
    ) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));
    }

    function safeTransferFrom(
        IERC20 token,
        address from,
        address to,
        uint256 value
    ) internal {
        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));
    }

    /**
     * @dev Deprecated. This function has issues similar to the ones found in
     * {IERC20-approve}, and its usage is discouraged.
     *
     * Whenever possible, use {safeIncreaseAllowance} and
     * {safeDecreaseAllowance} instead.
     */
    function safeApprove(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        // safeApprove should only be called when setting an initial allowance,
        // or when resetting it to zero. To increase and decrease it, use
        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'
        require(
            (value == 0) || (token.allowance(address(this), spender) == 0),
            "SafeERC20: approve from non-zero to non-zero allowance"
        );
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));
    }

    function safeIncreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        uint256 newAllowance = token.allowance(address(this), spender) + value;
        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
    }

    function safeDecreaseAllowance(
        IERC20 token,
        address spender,
        uint256 value
    ) internal {
        unchecked {
            uint256 oldAllowance = token.allowance(address(this), spender);
            require(oldAllowance >= value, "SafeERC20: decreased allowance below zero");
            uint256 newAllowance = oldAllowance - value;
            _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));
        }
    }

    /**
     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement
     * on the return value: the return value is optional (but if data is returned, it must not be false).
     * @param token The token targeted by the call.
     * @param data The call data (encoded using abi.encode or one of its variants).
     */
    function _callOptionalReturn(IERC20 token, bytes memory data) private {
        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since
        // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that
        // the target address contains contract code and also asserts for success in the low-level call.

        bytes memory returndata = address(token).functionCall(data, "SafeERC20: low-level call failed");
        if (returndata.length > 0) {
            // Return data is optional
            require(abi.decode(returndata, (bool)), "SafeERC20: ERC20 operation did not succeed");
        }
    }
}



interface IERC20Mintable {
    function transfer(address _to, uint256 _value) external returns (bool);
    function transferFrom(address _from, address _to, uint256 _value) external returns (bool);
    function mint(address _to, uint256 _value) external returns (bool);
    function balanceOf(address _account) external view returns (uint256);
    function totalSupply() external view returns (uint256);
}

interface WarbotManufacturer {
    
    function setApprovalForAll(address operator, bool approved) external;
    function transfer(address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function burn(uint256 tokenId) external;
    function incrementTokenId() external;
    function getLastWarbotManufactured() external returns(uint256);
    function mint(address to, uint256 tokenId) external;
    function setTokenURIWarbotStats(uint256 tokenId, string memory _tokenURI) external;
    function ownerOf(uint256 tokenId) external returns(address);
}


interface NanoNFT {
    
    function setApprovalForAll(address operator, bool approved) external;
    function transfer(address to, uint256 tokenId) external;
    function transferFrom(address from, address to, uint256 tokenId) external;
    function burn(uint256 tokenId) external;
    function ownerOf(uint256 tokenId) external returns(address);
    function  getNanoNFTCardStats ( uint256 _nftcard ) external returns( uint8, uint8, uint256, uint256, bool);
    function deployNFTNanoset( uint256 _warbot, address _creator ) external;
}


interface WarbotStatsData {
    
    function WarbotLevel ( uint256 _warbot ) external returns( uint256 );
    function incrementReroll ( uint256 _warbot ) external returns (uint256);
    function getCurrentRerollCount( uint256 _warbot ) external returns(uint256);
    function RequestRoll ( uint256 _warbot ) external returns ( bool );
    function requestRerollOfStats ( uint256 _warbot ) external ;
    function setSlots( uint256 _warbot, uint8 _slots )external;
    function incrementWarbotLevel( uint256 _warbot ) external;
    function setCreator( uint256 _warbot, address _creator )external;
    function getCreator( uint256 _warbot )external returns(address);
    function zeroWarbotLevel( uint256 _warbot ) external ;
    function bindCardtoWarbot( uint256 _warbot, uint8 _cardtype, uint8 _bonus ) external;
    function incrementWarbotRerollCount ( uint256 _warbot ) external;
    function getRerollCount ( uint256 _warbot ) external returns(uint256);

    
}



contract WarbotStats is Ownable {
    
    
    
    using SafeMath for uint256;
    bytes4 ERC721_RECEIVED = 0x150b7a02;
    address public burnAddress;
    address public micromachines;
    address public nanomachines;
    address public nanonft;
    address public micromachinemanufacturingplant;
    uint256 public activationcost;
    uint256 public rerollcost;
    address public oracle;
    address public warbotstatsdata;
    
    WarbotStatsData __warbotData;
    WarbotManufacturer __warbotmanufacturer;
    IERC20 __nanomachines;
    NanoNFT __nanonft;
   
    
    
    mapping ( uint256 => string  ) public  levelURI;
    
    event bindCardEvent ( uint256 indexed _warbot, uint256 indexed  _nftcard, string _message);
   
   
    constructor() {
        micromachines = 0x8Bc3EB7ded0ec83D0A8EF18D327644c04191f7DD;
        nanomachines = 0x4C0AeEB37210b97956309BB4585c5433Cc015F6c;
        micromachinemanufacturingplant = 0xe7e92e4Ccc08f381984de6CF35E050CE7729B9C6;
        warbotstatsdata = 0x0C97878C47B060D736bC987130cfA2b1E961b72E;
        nanonft = 0x7eC07349eC92aA8a403A95DA4682403c307Ee3E5;
        levelURI[1] = '{"attributes": [],"name": "MMWarbot","description": "Micromachine WarBot NFT LEVEL 1","image": "https://gateway.pinata.cloud/ipfs/ipfs://QmQp2Pfj3gRKsCCtMpFWzwJmfRyAys8SDY7srFBmfZ2W4g"}';
        activationcost = 2 * 10 **18;
        rerollcost =  1 * 10 **18;
        burnAddress = 0x000000000000000000000000000000000000dEaD;
        oracle = 0x7cE0E55703F12D03Eb53B918aD6B9EB80d188afB;
        
        __warbotmanufacturer = WarbotManufacturer ( micromachinemanufacturingplant );
        __warbotData = WarbotStatsData ( warbotstatsdata );
        __nanonft = NanoNFT ( nanonft );
        __nanomachines = IERC20 ( nanomachines );
    }
    
    function WarbotLevel ( uint256 _warbot ) public  returns ( uint256 ){
       return  __warbotData.WarbotLevel( _warbot );
    }
    
    function rerollLevelStats ( uint256 _warbot ) public {
        require (  __warbotData.WarbotLevel ( _warbot )  > 0,  "Warbot not activated");
       
        require ( msg.sender == __warbotmanufacturer.ownerOf( _warbot ) );
         __warbotData.incrementReroll(_warbot);
        IERC20 _nano = IERC20 ( nanomachines );
        _nano.transferFrom ( msg.sender, address(this ),  levelRequirement( __warbotData.getCurrentRerollCount(_warbot) ));
         __warbotData.requestRerollOfStats( _warbot ); 
        
    }
    
    
    
    function bindCard ( uint256 _warbot, uint256 _nftcard ) public {
        require ( __warbotData.WarbotLevel ( _warbot )  > 0,  "Warbot not activated");
        require ( msg.sender == __warbotmanufacturer.ownerOf( _warbot ) );
         NanoNFT _nanonft = NanoNFT ( nanonft );
        _nanonft.transferFrom ( msg.sender, address(this) , _nftcard );
        ( uint8 _cardtype , uint8 _bonus , , uint256 _minimumlevel , bool _bindable) = _nanonft.getNanoNFTCardStats( _nftcard );
        require ( _bindable == true, "Card is not bindable." );
        require ( __warbotData.WarbotLevel(_warbot ) >= _minimumlevel, "Warbot Level Requirement not Met." );
         __warbotData.bindCardtoWarbot(  _warbot,  _cardtype, _bonus );
        _nanonft.burn(_nftcard);
        emit bindCardEvent ( _warbot , _nftcard, "WARBOT UPGRADED WITH BINDABLE CARD" );
    }
    
    
    
    function setLevelURI ( uint256 _level, string calldata _levelURI ) public onlyOwner {
        levelURI[_level] = _levelURI;
    }
    
    function setActivationCost ( uint256 _activationcost ) public onlyOwner {
        activationcost = _activationcost;
    }
    
    function setRerollCost ( uint256 _rerollcost ) public onlyOwner {
        rerollcost = _rerollcost;
    }
    
    function setMicromachines( address _address ) public onlyOwner {
        micromachines = _address;
    }
    
    function setWarbotStatsData( address _address ) public onlyOwner {
        warbotstatsdata = _address;
        __warbotData = WarbotStatsData ( _address );
    }
    
    function setNanomachines( address _address ) public onlyOwner {
        nanomachines = _address;
        __nanomachines = IERC20 ( nanomachines );
    }
    
     function setNanoNFT( address _address ) public onlyOwner {
        nanonft = _address;
        __nanonft = NanoNFT ( nanonft );
    }
    
    function setMicromachinesManufacturingplant( address _address ) public onlyOwner {
        micromachinemanufacturingplant = _address;
        __warbotmanufacturer = WarbotManufacturer ( micromachinemanufacturingplant );
    }
    
    function levelRequirement ( uint256 _level ) public  returns (uint256 ){
        IERC20 _nano = IERC20 ( nanomachines );
        return  (  _level * _level ) * 10 ** _nano.decimals();
    }
    

    function activateWarbot ( uint256 _warbot ) public {
        
        require ( msg.sender == __warbotmanufacturer.ownerOf( _warbot ), "Only the Owner Can Activate" );
        require ( __warbotData.WarbotLevel ( _warbot ) == 0,  "Warbot already activated");
        __warbotData.setSlots( _warbot, 2 );
        __warbotData.requestRerollOfStats(_warbot) ;
        __warbotData.incrementWarbotLevel( _warbot );
        __warbotData.setCreator( _warbot, msg.sender);
         chargeNanos ( activationcost );
        __nanonft.deployNFTNanoset(  _warbot, __warbotData.getCreator(_warbot) );
    }
    
    function requestRerollOfStats ( uint256 _warbot ) public {
        
        require ( msg.sender == __warbotmanufacturer.ownerOf( _warbot ), "Only the Owner Can Reroll" );
        require ( __warbotData.WarbotLevel ( _warbot ) > 0,  "Warbot needs to be activated");
       __warbotData.incrementWarbotRerollCount ( _warbot );
        __warbotData.requestRerollOfStats(_warbot) ;
         
        uint256 _count =__warbotData.getCurrentRerollCount( _warbot );
        chargeNanos ( rerollcost * _count * _count  );
        
    }


    function chargeNanos ( uint256 _activationcost ) public {
           __nanomachines.transferFrom ( msg.sender , address(this), _activationcost );
           __nanomachines.transfer ( burnAddress, _activationcost );
        
    }




    function upgradeWarbot ( uint256 _warbot1, uint256 _warbot2  ) public {
        require ( __warbotData.WarbotLevel ( _warbot1 ) == __warbotData.WarbotLevel ( _warbot2 )  );
        require ( __warbotData.WarbotLevel ( _warbot1 ) > 0,  "Warbot not activated");
        uint256 _level = __warbotData.WarbotLevel ( _warbot1 );
        uint256 _levelto = __warbotData.WarbotLevel ( _warbot1 ) + 1;
        
       chargeNanos ( levelRequirement(_level ));       
       __warbotmanufacturer.transferFrom ( msg.sender, address(this) , _warbot2 );
       __warbotmanufacturer.burn(_warbot2);
       __warbotData.incrementWarbotLevel(_warbot1);
       __warbotData.zeroWarbotLevel(  _warbot2 );
      
        __warbotmanufacturer.setTokenURIWarbotStats(_warbot1, levelURI[_levelto]);
        
      
    }
    
    
    
    
    function onERC721Received( address _operator, address _from, uint256 _tokenId, bytes memory _data) public view returns(bytes4){
        _operator; _from; _tokenId; _data; 
        return ERC721_RECEIVED;
    }
    
    modifier onlyOracle() {
        require( msg.sender == oracle, "Oracle Only");
        _;
    }
    
    
    modifier onlyWarbotManufacturer() {
        require( msg.sender == micromachinemanufacturingplant, "WarbotManufacturer Only");
        _;
    }
    
}