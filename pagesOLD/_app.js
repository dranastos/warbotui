import '../styles/global.css';
import { useWallet, UseWalletProvider } from 'use-wallet'
import useGlobal from '../hooks/useGlobal'

function MyApp({ Component, pageProps }) {
  const [state, actions] = useGlobal(['chain'])

  return (
    <UseWalletProvider chainId={state.chain}>
      <Component {...pageProps} />
    </UseWalletProvider>
  )
}

export default MyApp
