import '../styles/global.css';
import { useWallet, UseWalletProvider } from 'use-wallet'

function MyApp({ Component, pageProps }) {
  return (
    <UseWalletProvider chainId={97}>
      <Component {...pageProps} />
    </UseWalletProvider>
  )
}

export default MyApp
