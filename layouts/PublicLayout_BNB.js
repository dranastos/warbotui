import {useState, useEffect, useCallback} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {
  Layout,
  Menu,
  Breadcrumb,
  Space,
  Button,
  Typography,
  Drawer,
  Input,
  Form,
  Alert,
  Spin,
} from 'antd';
import {useWallet} from 'use-wallet';
import useGlobalBNB from '../hooks/useGlobalBNB';
import Link from 'next/link';

import useMicroMachines from '../hooks/useMicroMachines';

const {Header, Content, Footer} = Layout;
const {Title, Text} = Typography;

export default function PublicLayout({children}) {
  const wallet = useWallet();

  const [loading, setLoading] = useState(false);
  // balance
  const [state, actions] = useGlobalBNB([

    'micromachinesBNB',
    'hasMicromachinesBNB',

  ]);


  const [micromachinesBNB] = useMicroMachines(state.micromachinesBNB);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (wallet.status == 'connected' && micromachinesBNB && state.hasMicromachinesBNB) {
      getMMACbalance();
    }
  }, [micromachinesBNB, state.hasMicromachinesBNB]);


  const getMMACbalance = async () => {
    const MMACbalance = await micromachinesBNB
      .balanceOf(wallet.account)
      .call();
    setMMACBalance(web3.utils.fromWei(MMACbalance, 'nano'));
    setCounter(counter + 1);
  };

  useEffect(() => {
    if (
      wallet.status == 'connected'

    ) {

    }
  }, [wallet.status]);


  const renderWallet = useCallback(() => {
    if (wallet.status == 'connected' && wallet.account) {
      return (
        <div className="connect_btn">
          <button onClick={() => wallet.connect()}>
            <img src="/img/wallet.png" alt=""/>
            <Text
              style={{color: 'white', fontFamily: 'Teko_700'}}
            >
              {wallet.account.substr(0, 6)}....
              {wallet.account.substr(39)}
            </Text>
            {}
          </button>
        </div>
      );
    }
    return (
      <div className="connect_btn">
        <button onClick={() => wallet.connect()}>
          <img src="/img/wallet.png" alt=""/>
          Connect Wallet
        </button>
      </div>
    );
  }, [wallet]);

  function open() {
    document.getElementById('open_menu').style.display = 'none';
    document.getElementById('close_menu').style.display = 'block';
    document.getElementById('img_menu').style.display = 'block';
  }

  function close() {
    document.getElementById('close_menu').style.display = 'none';
    document.getElementById('open_menu').style.display = 'block';
    document.getElementById('img_menu').style.display = 'none';
  }


  return (
    <Layout>


      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          paddingTop: '64px',
          paddingBottom: '8px',
          // display: "flex",
          // flexDirection: "row",
          // alignItems: "center",
          backgroundImage: 'url(/img/Cogs.png)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top left',
        }}
      >
        <section className="Navbar">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="nav_menu_holder">
                <button
                  className="Nav_menu"
                  id="open_menu"
                  onClick={open}
                >
                  <img src="/img/list.png" alt=""/>
                </button>
                <button
                  className="Nav_menu nav_menu_extra"
                  id="close_menu"
                  onClick={close}
                >
                  <img src="/img/close_menu.png" alt=""/>
                </button>

                <ul id="img_menu" className="img_menu">
                  <li>
                    <Link href="/">
                      <a
                        title="Home"
                      >
                        <img src="/img/Home.png" alt=""/>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/combatzone">
                      <a
                        title="Combat Zone"
                      >
                        <img
                          src="/img/CombatZone.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a title="Manufacturing Center">
                        <img
                          src="/img/NanoMachines.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/warbots">
                      <a
                        title="Warbots"
                      >
                        <img
                          src="/img/Warbots.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nanomachines">
                      <a
                        title="NanoMachines"
                      >
                        <img src="/img/tank.png" alt=""/>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a title="MarketPlace">
                        <img
                          src="/img/Marketplace.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/nanosale">
                      <a
                        title="NMAC Sale"
                      >
                        <img
                          src="/img/NanoNFTs.png"
                          alt=""
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <a title="Location">
                        <img src="/img/globe.png" alt=""/>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bridge">
                      <a
                        title="Bridge"
                      >
                        <img src="/img/Bridge.png" alt=""/>
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  WARBOTS
                  <p className="m-0">The future is here</p>
                </a>
                <div className="nav_details">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center flex-wrap">
                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        <img
                          src="/img/Manufacturing_center.png"
                          alt=""
                        />

                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        <img
                          src="/img/NanoMachines.png"
                          alt=""
                        />

                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link " href="#">
                        <img
                          src="/img/gem.png"
                          alt=""
                        />

                      </a>
                    </li>

                    {/* <li
                                            className="nav-item"
                                            onClick={() => wallet.connect()}
                                            // onClick={connect_wallet}
                                        >
                                            <a className="nav-link " href="#">
                                                <img
                                                    src="/img/wallet.png"
                                                    alt=""
                                                />

                                                {addr}
                                            </a>
                                        </li> */}
                    {renderWallet()}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </section>

        {}
      </Header>
      <Content
        className="site-layout"
        style={{
          padding: `0 50px`,
          marginTop: 189,
          minHeight: `100vh`,
        }}
      >
        {wallet.status != 'connected' && (
          <Alert
            message="Connect Wallet"
            description="Please connect your wallet"
            type="error"
            showIcon
            closable
            style={{marginTop: 20}}
          />
        )}

        {children}
      </Content>
      <Footer style={{textAlign: 'center'}}>
        All Rights Reserved 2021
      </Footer>
    </Layout>
  );
}
