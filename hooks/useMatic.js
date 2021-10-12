import { useState, useEffect, useMemo } from "react";
import Contract from "web3-eth-contract";
import Matic from "../build/contracts/Matic.json";
import useWeb3 from "./useWeb3";

const useMatic = (address) => {
	const web3 = useWeb3();
	const [contract, setContract] = useState({});
	useEffect(() => {
		if (address) {
			Contract.setProvider(global.window && window.ethereum);
			setContract(new Contract(Matic.abi, address));
			console.log("Matic ADDRESS", address);
		} else {
			console.log("Matic NOT SET");
		}
	}, [address]);

	return [contract.methods, web3];
};

export default useMatic;
