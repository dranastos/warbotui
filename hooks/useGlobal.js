import React from "react";
import globalHook from "./globalHook";

const actions = {
    setSecurity: (store, security) => {
        console.log("SETTING Sec WITH " + welfare);
        if (security && security.startsWith("0x") && security.length == 42) {
            store.setState({ security, hasSecurity: true });
        } else {
            store.setState({ security: "", hasSecurity: false });
        }
    },
    setSecurityInfo: (store, securityInfo) => {
        store.setState({ securityInfo });
    },
    setVault: (store, vault) => {
        if (vault && vault.startsWith("0x") && vault.length == 42) {
            store.setState({ vault, hasVault: true });
        } else {
            store.setState({ vault: "", hasVault: false });
        }
    },
    setBonus: (store, bonus) => {
        if (bonus && bonus.startsWith("0x") && bonus.length == 42) {
            store.setState({ bonus, hasBonus: true });
        } else {
            store.setState({ bonus: "", hasBonus: false });
        }
    },
    setWicBonus: (store, wicbonus) => {
        if (wicbonus && wicbonus.startsWith("0x") && wicbonus.length == 42) {
            store.setState({ wicbonus, hasWicBonus: true });
        } else {
            store.setState({ wicbonus: "", hasWicBonus: false });
        }
    },
    setCenter: (store, center) => {
        if (center && center.startsWith("0x") && center.length == 42) {
            store.setState({ center, hasCenter: true });
        } else {
            store.setState({ center: "", hasCenter: false });
        }
    },
    setWelfare: (store, welfare) => {
        console.log("SET WELFARE");
        console.log("SETTING WITH " + welfare);
        if (welfare && welfare.startsWith("0x") && welfare.length == 42) {
            store.setState({ welfare, hasWelfare: true });
        } else {
            store.setState({ welfare: "", hasWelfare: false });
        }
    },
    setWicCardMinter: (store, wicCardMinter) => {
        console.log("SET WICCARDMINTER");
        if (
            wicCardMinter &&
            wicCardMinter.startsWith("0x") &&
            wicCardMinter.length == 42
        ) {
            store.setState({ wicCardMinter, haswicCardMinter: true });
        } else {
            store.setState({ wicCardMinter: "", hasWicCardMinter: false });
        }
    },
	setMicromachines: (store, micromachines) => {
        console.log("SET MicroOMACHINE");
        if (
            micromachines &&
            micromachines.startsWith("0x") &&
            micromachines.length == 42
        ) {
            store.setState({ micromachines, hasMicromachines: true });
        } else {
            store.setState({ micromachines: "", hasMicromachines: false });
        }
    },
	setMicromachinesBNB: (store, micromachinesBNB) => {
        console.log("SET MicroOMACHINE");
        if (
            micromachinesBNB &&
            micromachinesBNB.startsWith("0x") &&
            micromachinesBNB.length == 42
        ) {
            store.setState({ micromachinesBNB, hasMicromachinesBNB: true });
        } else {
            store.setState({ micromachinesBNB: "", hasMicromachinesBNB: false });
        }
    },
    setNanomachines: (store, nanomachines) => {
        console.log("SET NANOMACHINE");
        if (
            nanomachines &&
            nanomachines.startsWith("0x") &&
            nanomachines.length == 42
        ) {
            store.setState({ nanomachines, hasNanomachines: true });
        } else {
            store.setState({ nanomachines: "", hasNanomachines: false });
        }
    },
    setNanostaking: (store, nanostaking) => {
        console.log("SET NANOMACHINE");
        if (
            nanostaking &&
            nanostaking.startsWith("0x") &&
            nanostaking.length == 42
        ) {
            store.setState({ nanostaking, hasNanostaking: true });
        } else {
            store.setState({ nanostaking: "", hasNanostaking: false });
        }
    },
    setMasterchef: (store, masterchef) => {
        console.log("SET MASTERCHEF");
        if (
            masterchef &&
            masterchef.startsWith("0x") &&
            masterchef.length == 42
        ) {
            store.setState({ masterchef, hasMasterchef: true });
        } else {
            store.setState({ masterchef: "", hasMasterchef: false });
        }
    },
    setBusd: (store, busd) => {
        console.log("SET BUSD");
        if (busd && busd.startsWith("0x") && busd.length == 42) {
            store.setState({ busd, hasBusd: true });
        } else {
            store.setState({ busd: "", hasBusd: false });
        }
    },
    setNanosales: (store, busd) => {
        console.log("SET NANOSALES");
        if (nanosales && nanosales.startsWith("0x") && nanosales.length == 42) {
            store.setState({ nanosales, hasNanosales: true });
        } else {
            store.setState({ nanosales: "", hasNanosales: false });
        }
    },
    setWarbotmanufacturer: (store, warbotmanufacturer) => {
        console.log("SET Warbotmanufacturer");
        if (
            warbotmanufacturer &&
            warbotmanufacturer.startsWith("0x") &&
            warbotmanufacturer.length == 42
        ) {
            store.setState({ warbotmanufacturer, hasWarbotmanufacturer: true });
        } else {
            store.setState({
                warbotmanufacturer: "",
                hasWarbotmanufacturer: false,
            });
        }
    },
    setWarbotstats: (store, warbotstats) => {
        console.log("SET WARBOTSTATS");
        if (
            warbotstats &&
            warbotstats.startsWith("0x") &&
            warbotstats.length == 42
        ) {
            store.setState({ warbotstats, hasWarbotstats: true });
        } else {
            store.setState({ warbotstats: "", hasWarbotstats: false });
        }
    },
    setNanonft: (store, busd) => {
        console.log("SET NANONFT");
        if (nanonft && nanonft.startsWith("0x") && nanonft.length == 42) {
            store.setState({ nanonft, hasNanonft: true });
        } else {
            store.setState({ nanonft: "", hasNanonft: false });
        }
    },
    setWarbotstatsdata: (store, warbotstatsdata) => {
        console.log("SET WARBOTSTATS");
        if (
            warbotstatsdata &&
            warbotstatsdata.startsWith("0x") &&
            warbotstatsdata.length == 42
        ) {
            store.setState({ warbotstatsdata, hasWarbotstatsdata: true });
        } else {
            store.setState({ warbotstatsdata: "", hasWarbotstatsdata: false });
        }
    },
    setWarcontract: (store, warbotstatsdata) => {
        console.log("SET WARBOTSTATS");
        if (
            warcontract &&
            warcontract.startsWith("0x") &&
            warcontract.length == 42
        ) {
            store.setState({ warcontract, hasWarcontract: true });
        } else {
            store.setState({ warcontract: "", hasWarcontract: false });
        }
    },

    setTestnet: (store) => store.setState({ chain: 97 }),
    setMainnet: (store) => store.setState({ chain: 56 }),
    addVaultCount: (store) =>
        store.setState({ vaultCount: store.state.vaultCount + 1 }),
};

const initialState = {
    chain: 137, // 56 - Mainnet | 97 - Testnet
    //chain: 97, // 56 - Mainnet | 97 - Testnet
    //matic security: '0x99465Cd00D42AEd0262c54EaE49365558AD5066f',
    security: "0xF4225b776793B44391496636115CBF1483B5E153",
    securityInfo: {},
    hasSecurity: true,
    vault: "",
    hasVault: false,
    center: "0x53019b3DA4acC6c3C01bEa4FDD8E93773716715D",
    hasCenter: true,
    bonus: "0x60d80ae39F74d6Cd694E61ec43c90A6B02130b47",
    hasBonus: true,
    wicbonus: "0x390895B239a6e1FaBd22FecBaBC71F39948f39cC",
    hasWicBonus: true,

    //matic nanosales: '0xcd62fAf0AE83EbfE726AD6BbA966c9084c3AD866',
    nanosales: "0x28241184DC0FCBDa2a0A414C48Ee7Ab2AA76cA3F",
    hasNanosales: true,

    busd: "0x314E8457a3A2f80f620CD4965287044fc2fACB0e",
    hasBusd: true,

    //matic masterchef: '0xe7576D71f162dfCC64c7128d46Ac41Ee8116d424',
    masterchef: "0x2ad02356F07AbBb327cAF71f65A53270B8C10891",
    hasMasterchef: true,

    micromachines: '0xB4C2E61Dbf9ad64bE35F2c665b7e22aCE9310A0A',
    //micromachines: "0x8Bc3EB7ded0ec83D0A8EF18D327644c04191f7DD",
    hasMicromachines: true,
	
	micromachinesBNB: '0xcc116e59Dd51DF5460E8B11Ff615E3E706a9202A',
    hasMicromachinesBNB: true,

    // Dicesium Batteries :'0x8373a372e8Fe67CF208e693F10C8a04B48367Db5',
    dicesiumBatteries: "0x11910c3Ef32D5418F98559f5272201cdeb59af6e",
    hasDicesiumBatteries: true,

    //matic nanomachines: '0xc10006027DCFdABdce5BA9c589b7900241681510',
    nanomachines: "0xf6b353258ee23d2527442f11681b892ce8742adc",
    hasNanomachines: true,

    nanostaking: "0x029B2Cc69a3f43F166C5684bD2E60a43CAC33e68",
    hasNanostaking: true,

    //matic nanobnblp:   '0x3BeD127C91E82A8FfE331C1Fd9d25d7e0d5B8E7e',
    nanobnblp: "0xDb896a0D3E853789056245C3168d463F9C5b633D",
    hasNanobnblp: true,

    nanonft: "0x78548d389D1d26FA9B4cA6891D02D9f64b882898",
    hasNanonft: true,

    warbotstats: "0xC665dFa4CEe8D947f181ccE176264b143A063933",
    hasWarbotstats: true,

    warbotstatsdata: "0x40fE42588870269d2592229c02d57baa84548E9D",
    hasWarbotstatsdata: true,

    warcontract: "0xf0c1f5C1ca09BF843Ec7eb861627e51f48De1C90",
    hasWarcontract: true,
	
	welfare: "0xf0c1f5C1ca09BF843Ec7eb861627e51f48De1C90",
    hasWelfare: true,
	
	MMACBridge: "0xEdECC0c3bd2A58f4F35226f20393c80Cf5C66D51",
	hasMMACBridge: true,

    //matic microbnblp: '0xb0E283BB71471F6b1A046580AA2117317D1b50a1',
    microbnblp: "0xb4ec5205c12c6539fd6763354c7439811CF51C15",
    hasMicrobnblp: true,
    //matic warbotmanufacturer: '0x99465Cd00D42AEd0262c54EaE49365558AD5066f',
    warbotmanufacturer: "0xF4225b776793B44391496636115CBF1483B5E153",
    warbotmanufacturerInfo: {},
    hasWarbotmanufacturer: true,
    vaultCount: 0,
};

export const useGlobal = globalHook(React, initialState, actions);

export default useGlobal;
