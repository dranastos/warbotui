import { useEffect, useState, useCallback } from "react";
import { useWallet } from "use-wallet";
import moment from "moment";
import Head from "next/head";
import {
    Layout,
    Menu,
    Breadcrumb,
    Typography,
    Space,
    Spin,
    Alert,
    Tabs,
    Statistic,
    Row,
    Col,
    Card,
    Slider,
    Form,
    Button,
    Input,
    Descriptions,
    notification,
} from "antd";

import PublicLayout from "../layouts/PublicLayout";
import MicroMachineStakingForm from "../forms/MicroMachineStakingForm";
import UserManufacturingCenters from "../forms/UserManufacturingCenters";
import UserManufacturingCentersClosed from "../forms/UserManufacturingCentersClosed";
import useGlobal from "../hooks/useGlobal";
import useMicroMachineManufacturingPlant from "../hooks/useMicroMachineManufacturingPlant";
import useMicroMachines from "../hooks/useMicroMachines";
import Closed_plants_tab from "../components/Closed_plants_tab";

import Statistics_tab from "../components/Statistics_tab";

const { Title, Text } = Typography;
const { Item } = Descriptions;

export default function Dashboard() {
    const wallet = useWallet();
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    const [address, setAddress] = useState(false);
    const [state, actions] = useGlobal([
        "chain",
        "micromachines",
        "warbotmanufacturer",
        "hasWarbotmanufacturer",
        "warbotmanufacturerInfo",
    ]);

    const { warbotmanufacturer, web3, getField, sendTx, connected, getFields } =
        useMicroMachineManufacturingPlant(state.warbotmanufacturer);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [MicroMachines] = useMicroMachines(state.micromachines);
    const [warbotsupply, setWarbotsupply] = useState(0);
    const [plants, setPlants] = useState(0);
    const [warbotproduction, setWarbotproduction] = useState(0);
    const [manufacturingperiod, setManufacturingPeriod] = useState(0);

    useEffect(() => {
        if (state.warbotmanufacturer && connected) {
            getInfo();
        }
    }, [state.hasWarbotmanufacturer, connected]);

    const getInfo = async () => {
        setLoading(true);

        var WarBots = await warbotmanufacturer.totalSupply().call();
        var plants = await warbotmanufacturer.ManufacturingPlantCount().call();
        console.log("Plant Count " + plants )
		var warbotproduction = await warbotmanufacturer
            .globalwarbotproduction()
            .call();
        var manufacturingPeriod = await warbotmanufacturer
            .manufacturingPeriod()
            .call();

        const warbotInfo = await getFields();

        setWarbotsupply(WarBots);
        setPlants(plants);
        setWarbotproduction(warbotproduction);
        setManufacturingPeriod(manufacturingPeriod);
        setData(warbotInfo);
        actions.setSecurityInfo(warbotInfo);
        setLoading(false);
    };

    const renderStats = useCallback(
        () => (
            <Spin spinning={loading}>
                <Card
                    title="Warbot Manufacturing Center"
                    extra={
                        <Button type="primary" onClick={getInfo}>
                            Refresh
                        </Button>
                    }
                >
                    <Row gutter={[20, 20]}>
                        <Col span={8}>
                            <Statistic
                                title="WarBots in Existence:"
                                value={warbotsupply}
                            />
                        </Col>
                        <Col span={8}>
                            <Statistic
                                title="Total Manufacturing Plants:"
                                value={plants}
                            />
                        </Col>
                        <Col span={8}>
                            <Statistic
                                title="Warbots Manufactured Per Period:"
                                value={warbotproduction}
                            />
                        </Col>
                        <Col span={8}>
                            <Statistic
                                title="Manufacturing Period in Seconds:"
                                value={manufacturingperiod}
                            />
                        </Col>
                    </Row>
                </Card>
            </Spin>
        ),
        [loading]
    );

    return (
        <PublicLayout>
            <div
                style={{
                    padding: `20px 0px`,
                    backgroundColor: "rgb(25, 40, 61)",
                }}
            >
                {state.hasSecurity && wallet.status == "connected" && (
                    <section className="War_dashboard_tabs">
                        <div className="container">
                            <h1>MicroMachine Warbot Manufacturing Center</h1>

                            <div className="tab_btn_holder">
                                <button
                                    className={
                                        toggleState === 1
                                            ? "tabs active_tabs"
                                            : "tabs"
                                    }
                                    onClick={() => toggleTab(1)}
                                >
                                    Dashboard
                                </button>
                                <button
                                    className={
                                        toggleState === 2
                                            ? "tabs active_tabs"
                                            : "tabs"
                                    }
                                    onClick={() => toggleTab(2)}
                                >
                                    Closed Plants
                                </button>
                                <button
                                    className={
                                        toggleState === 3
                                            ? "tabs active_tabs"
                                            : "tabs"
                                    }
                                    onClick={() => toggleTab(3)}
                                >
                                    Statistics
                                </button>
                            </div>

                            <div className="tab_content_holder">
                                <div
                                    className={
                                        toggleState === 1
                                            ? "content  active-content"
                                            : "content"
                                    }
                                >
                                    <MicroMachineStakingForm />
                                    <button
                                        className="view_closed"
                                        onClick={() => toggleTab(2)}
                                    >
                                        View Closed Plants
                                    </button>
                                    {/* <For_innovators_tab /> */}
                                </div>

                                <div
                                    className={
                                        toggleState === 2
                                            ? "content  active-content"
                                            : "content"
                                    }
                                >
                                    
                                    <button
                                        className="view_closed"
                                        onClick={() => toggleTab(1)}
                                    >
                                        View Active Plants
                                    </button>
                                </div>
                                <div
                                    className={
                                        toggleState === 3
                                            ? "content  active-content"
                                            : "content"
                                    }
                                >
                                    <Statistics_tab />
                                </div>
                            </div>
                        </div>
                    </section>
                )}
                {/* <Title level={2}>
                    MicroMachine Warbot Manufacturing Center
                </Title>

                {state.hasSecurity && wallet.status == "connected" && (
                    <div>
                        <Space style={{ marginTop: 20 }}></Space>
                        <Tabs
                            defaultActiveKey="dashboard"
                            style={{ marginTop: 20 }}
                        >
                            <Tabs.TabPane
                                tab="Warbot Manufacturer Dashboard"
                                key="dashboard"
                            >
                                <Row
                                    gutter={20}
                                    style={{
                                        marginTop: `10px`,
                                        marginBottom: `30px`,
                                    }}
                                >
                                    <Col xs={8}>
                                        <MicroMachineStakingForm />
                                    </Col>
                                    <Col xs={16}>
                                        <UserManufacturingCenters />
                                        <Space
                                            style={{ marginTop: 20 }}
                                        ></Space>
                                    </Col>
                                </Row>
                            </Tabs.TabPane>
                            <Tabs.TabPane
                                tab="Closed Plants"
                                key="closedVaults"
                            >
                                <UserManufacturingCentersClosed />
                            </Tabs.TabPane>
                            <Tabs.TabPane
                                tab="WarBot Manufacturing Statistics"
                                key="details"
                            >
                                {renderStats()}
                            </Tabs.TabPane>
                        </Tabs>
                    </div>
                )} */}
            </div>
        </PublicLayout>
    );
}
