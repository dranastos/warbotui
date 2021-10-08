import "../styles/global.css";
import "../styles/combatzone/index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useWallet, UseWalletProvider } from "use-wallet";
import useGlobal from "../hooks/useGlobal";

function MyApp({ Component, pageProps }) {
    const [state, actions] = useGlobal(["chain"]);

    return (
        <UseWalletProvider chainId={state.chain}>
            <Component {...pageProps} />
        </UseWalletProvider>
    );
}

export default MyApp;
