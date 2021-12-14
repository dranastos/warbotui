import { useEffect, useState } from "react";
import {
    Typography,
    Space,
    Row,
    Col,
    Card,
    Slider,
    List,
    Spin,
    Collapse,
    Form,
    Button,
    Input,
    Tag,
    Statistic,
    notification,
} from "antd";
const { Title, Text } = Typography;
import { useWallet } from "use-wallet";
import useWeb3 from "../hooks/useWeb3";
import useMicroMachineManufacturingPlant from "../hooks/useMicroMachineManufacturingPlant";
import useGlobal from "../hooks/useGlobal";
import useStaking from "../hooks/useStaking";
import moment from "moment";

const UserManufacturingCenters = ({ onComplete, address }) => {


    const renderDeposit = (id, key) => {
        if (vaults[id] == undefined) return null;

        var timeNow = new Date().getTime() / 1000;
        var expirationTime = vaults[id].timeAtExpirationUnix;
        var expiry = vaults[id].timeAtExpirationUnix;
        var vaultStatus = vaults[id].vaultStatus;

        var production =
            "MONTHLY PRODUCTION RATE: " +
            vaults[id].MonthlyProductionRate +
            " WarBots ";
        // "MicroMachines Staked:" +
        var mmstaked = vaults[id].MicroMachinesStaked;
        var expiration =
            "Lease Expires: " +
            moment.unix(vaults[id].timeAtExpiration).format("MM/DD/YYYY HH:mm");

        if (vaults[id].PlantStatus == "Inactive") return <div></div>;


    };

};

export default UserManufacturingCenters;
