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
    const wallet = useWallet();
    const [getVault, sendVaultTx] = useStaking();
    const [state, actions] = useGlobal([
        "security",
        "hasSecurity",
        "vaultCount",
    ]);
    const { security, web3, connected } = useMicroMachineManufacturingPlant(
        state.security
    );
    const [deposits, setDeposits] = useState([]);
    const [vaults, setVaults] = useState({});
    const [total, setTotal] = useState(0);
    const [loading, setLoading] = useState(false);
    const [hasVaults, setHasVaults] = useState(false);

    useEffect(() => {
        if (connected && state.hasSecurity) {
            getDeposits(false);
        }
    }, [connected, state.hasSecurity, state.vaultCount]);

    const getDeposits = async () => {
        setLoading(true);

        const deps = await security
            .getUserManufacturingPlants(wallet.account)
            .call();
        const totalDeps = await security
            .userManufacturingPlantCount(wallet.account)
            .call();

        setDeposits(deps);

        let vaults = {};
        for (let dep of deps) {
            const rawdata = await security.ManufacturingPlants(dep).call();
            const data = await getVault(rawdata);
            console.dir(data);

            vaults[dep] = {
                ...data,
            };
        }

        setVaults(vaults);
        setTotal(totalDeps);
        setHasVaults(true);
        setLoading(false);
    };

    const manufacture = async (id) => {
        const tx = await security
            .manufacture(id)
            .send({ from: wallet.account, to: state.warbotmanufacturer });
        if (tx.status) {
            notification.success({
                message:
                    vaults[id].MonthlyProductionRate +
                    " Warbot(s) Succesfully Manufactured",
                description: tx.transactionHash,
            });
        }
    };

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

        return (
            <tr key={`vault-${id}`}>
                <td> {mmstaked} </td>
                <td> {vaults[id].timeAtExpiration} </td>
                <td> {vaults[id]["Total Periods Locked"]} quarters </td>
                <td> {vaults[id]["Time Left to Expiration"]} </td>
                <td> {vaults[id].WarBotsManufactured} </td>
                <td className="halka_edit">
                    <button className="tb_btn_1">
                        {vaults[id]["NextBatch/Shutdown"]}
                    </button>
                    <button
                        className="tb_btn_2"
                        onClick={() => manufacture(id)}
                    >
                        Claim Warbots
                    </button>
                </td>

                {/* <Collapse>
                    <Collapse.Panel
                        header={`${mmstaked} - ${vaults[id].timeAtExpiration} - ${production}`}
                    >
                        <Row style={{ marginTop: 10 }} gutter={[20, 20]}>
                            <Col span={24}>
                                <Space
                                    size="small"
                                    style={{ marginBottom: 10 }}
                                >
                                    <Button
                                        type="primary"
                                        onClick={() => manufacture(id)}
                                    >
                                        Manufacture WarBots
                                    </Button>
                                    <Button
                                        type="danger"
                                        onClick={() =>
                                            sendVaultTx(
                                                "unstakeMicroMachines",
                                                state.warbotmanufacturer,
                                                wallet.account,
                                                id
                                            )
                                        }
                                    >
                                        Shutdown Plant
                                    </Button>
                                </Space>
                            </Col>
                            <Col span={12}>
                                <Statistic
                                    title="WarBot Manufacturing Plant "
                                    value={id}
                                />
                            </Col>

                            {Object.keys(vaults[id]).map((name, key) => (
                                <Col
                                    key={`${id}-${name}-${key}`}
                                    span={
                                        vaults[id]["MicroMachinesStaked"]
                                            .toString()
                                            .startsWith("0x")
                                            ? 24
                                            : 8
                                    }
                                >
                                    <Statistic
                                        title={name.toUpperCase()}
                                        value={vaults[id][name]}
                                        precision={
                                            name == "POOL WEIGHT" ? 9 : 0
                                        }
                                        style={{ marginBottom: 20 }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Collapse.Panel>
                </Collapse> */}
            </tr>
        );
    };

    return (
        <Spin spinning={loading}>
            <section className="Manufacturing_plants">
                <div className="container-lg">
                    <div className="Manufacturing_head">
                        <h1 className="m-0">
                            <img src="/img/green_light.png" alt="" /> Warbot
                            Manufacturing Plants
                        </h1>
                        <button
                            className="Manufacturing_head_btn"
                            onClick={getDeposits}
                        >
                            <i class="fas fa-redo-alt"></i> Refresh
                        </button>
                    </div>
                    <div className="table_holder">
                        <table>
                            <tr>
                                <th>Staked</th>
                                <th>Time and date staked</th>
                                <th>Time lock</th>
                                <th>Time left</th>
                                <th>Warbots Manufactured</th>
                                <th>Unclaimed Warbots</th>
                            </tr>
                            {/* <tr>
                                <td>25</td>
                                <td> 15:00 2021-07-23</td>
                                <td> 2 quarters</td>
                                <td>89D 16h 39m 20s </td>
                                <td>150</td>
                                <td className="halka_edit">
                                    <button className="tb_btn_1">50</button>
                                    <button className="tb_btn_2">
                                        Claim Warbots
                                    </button>
                                </td>
                            </tr> */}

                            {hasVaults && deposits.map(renderDeposit)}
                        </table>
                    </div>
                </div>
            </section>
            {/* <Card
                title="WarBot Manufacturing Plants"
                extra={<Button onClick={getDeposits}>Refresh</Button>}
            >
                <Row style={{ marginBottom: 20 }}>
                    <Col span={12}></Col>
                    <Col span={12}></Col>
                </Row>
                {hasVaults && deposits.map(renderDeposit)}
            </Card> */}
        </Spin>
    );
};

export default UserManufacturingCenters;
