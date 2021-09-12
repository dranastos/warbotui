import { useState, useEffect, useMemo } from "react";
import Contract from "web3-eth-contract";
import DicesiumBatteries from "../build/contracts/DicesiumBatteries.json";
import useWeb3 from "./useWeb3";

const useDicesiumBatteries = (address) => {
    const web3 = useWeb3();
    const [contract, setContract] = useState({});
    const [connected, setConnected] = useState(false);
    useEffect(() => {
        if (address) {
            Contract.setProvider(global.window && window.ethereum);
            setContract(new Contract(DicesiumBatteries.abi, address));
            setConnected(true);
            console.log("DicesiumBatteries ADDRESS", address);
        } else {
            console.log("DicesiumBatteries NOT SET");
        }
    }, [address]);
    return [contract.methods, web3, connected];
};

export default useDicesiumBatteries;
