import '../styles/global.css';
import {UseWalletProvider} from 'use-wallet';
import {useState} from 'react';
import useWeb3 from '../hooks/useWeb3';
import useInterval from '../hooks/useInterval';

function MyApp({Component, pageProps}) {
	const [chainId, setChainId] = useState(null);
	const Web3 = useWeb3();

	useInterval(() => {
		Web3.eth.net.getId().then(setChainId);
	}, 1500);

	return (
		<UseWalletProvider chainId={chainId}>
			<Component {...pageProps} />
		</UseWalletProvider>
	);
}

export default MyApp;
