import { useState, useEffect, useMemo } from "react";
import Contract from "web3-eth-contract";
import MMACBridge from "../build/contracts/MMACBridge.json";
import useWeb3 from "./useWeb3";
const useMMACbridge = (address) => {
    const web3 = useWeb3();
    const [contract, setContract] = useState({});
    useEffect(() => {
        if (address) {
            Contract.setProvider(global.window && window.ethereum);
            setContract(new Contract(MMACBridge.abi, address));
            console.log("MMACBridge ADDRESS", address);
        } else {
            console.log("MMACBridge NOT SET");
        }
    }, [address]);

    return [contract.methods, web3];
};

export default useMMACbridge;