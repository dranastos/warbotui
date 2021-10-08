import { useEffect, useState } from "react";
import {
    Typography,
    Space,
    Row,
    Col,
    Card,
    Statistic,
    Slider,
    Form,
    Spin,
    Button,
    Input,
    notification,
} from "antd";
const { Title, Text } = Typography;
import { useWallet } from "use-wallet";
import useWeb3 from "../hooks/useWeb3";
import useMicroMachineManufacturingPlant from "../hooks/useMicroMachineManufacturingPlant";
import useGlobal from "../hooks/useGlobal";

import useMicroMachines from "../hooks/useMicroMachines";
import Manufacturing_plants from "../components/Manufacturing_plants";
import UserManufacturingCenters from "./UserManufacturingCenters";

const slider_style = {
    backgroundColor: " rgba(113, 238, 255, 0.7)",
    // webkitAppearance: "none",
    appearance: "none",
    height: "14px",
    width: "100%",
    borderRadius: "7px",
};
const handle_style = {
    backgroundColor: "#71eeff",
    width: "30px",
    height: "30px",
    top: "0",
};

const MicroMachineStakingForm = ({ onComplete, address }) => {
    const wallet = useWallet();
    const [state, actions] = useGlobal([
        "warbotmanufacturer",
        "hasWarbotmanufacturer",
        "micromachines",
        "hasMicromachines",
    ]);
    const { warbotmanufacturer, web3, connected } =
        useMicroMachineManufacturingPlant(state.warbotmanufacturer);
    // const [welfare] = useWelfare(state.welfare);
    const [micromachines] = useMicroMachines(state.micromachines);
    const [balance, setBalance] = useState(0);
    const [allowance, setAllowance] = useState(0);
    const [timeValue, setTimeValue] = useState(0);
    const [canDeposit, setCanDeposit] = useState(false);
    const [data, setData] = useState({ months: 0, amount: 0, timelock: 0 });
    const [loading, setLoading] = useState(false);
    const [counter, setCounter] = useState(0);
    const [sufficientlyApproved, setSufficientlyApproved] = useState(0);
    const [insufficientlyApproved, setInsufficientlyApproved] = useState(0);

    useEffect(() => {
        if (connected && state.hasWarbotmanufacturer) {
            getTimeDeposit();
        }
    }, [data]);

    useEffect(() => {
        if (connected && micromachines && state.hasMicromachines) {
            getBalance();
            getAllowance();
        }
    }, [connected, micromachines, state.hasMicromachines]);

    const getBalance = async () => {
        const balance = await micromachines.balanceOf(wallet.account).call();
        setBalance(web3.utils.fromWei(balance, "nano"));
        setCounter(counter + 1);
    };

    const getAllowance = async () => {
        const balance = await micromachines
            .allowance(wallet.account, state.warbotmanufacturer)
            .call();
        setAllowance(web3.utils.fromWei(balance, "nano"));
        setSufficientlyApproved("stake_btn2");
        setInsufficientlyApproved("stake_btn");
        setCounter(counter + 1);
    };

    const getTimeDeposit = async () => {
        const weiValue = web3.utils
            .toWei((data.amount || 0).toString(), "nano")
            .toString();
        //const bonus = await security.timeValueDepositAmount(weiValue, parseInt(data.months)).call()

        console.log("VALUE", weiValue);
    };

    const approve = async () => {
        setLoading(true);

        try {
            if (data.amount > 0) {
                const value = web3.utils
                    .toWei(((data.amount || 0) * 1.0).toString(), "nano")
                    .toString();

                console.log("APPROVAL AMOUNT", value);

                const tx = await micromachines
                    .approve(state.warbotmanufacturer, value)
                    .send({
                        from: wallet.account,
                        to: state.warbotmanufacturer,
                    });

                if (tx.status) {
                    notification.success({
                        message: "Approve Successful",
                        description: tx.transactionHash,
                    });

                    await getAllowance();
                }
            }
        } catch (e) {
            notification.error({
                message: "Approval Failed",
                description: e.toString(),
            });
        }

        setLoading(false);
    };

    const handleDeposit = async () => {
        setLoading(true);

        try {
            const value = web3.utils
                .toWei(data.amount.toString(), "nano")
                .toString();

            console.log("STAKE MICROMACHINES ", value, parseInt(data.months));

            const tx = await warbotmanufacturer
                .stakeMicroMachines(value, parseInt(data.months), [0,0,0])
                .send({ from: wallet.account, to: state.warbotmanufacturer });

            if (tx.status) {
                setData({ amount: 0, months: 0 });
                notification.success({
                    message: "Deposit Successful",
                    description: tx.transactionHash,
                });

                actions.addVaultCount();
            }
        } catch (e) {
            notification.error({
                message: "Deposit Failed",
                description: e.toString(),
            });
        }

        setLoading(false);
    };

    const handleTimeLock = (months, amount) => {
        setData({ ...data, months });
    };
    const handleAmount = (e) => {
        setData({ ...data, amount: parseInt(e.target.value) });
    };

    const notEnough = (e) => {};

    return (
        <Spin spinning={loading}>
            <section className="For_innovators_tab">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1>Build a Warbot</h1>
                            <p>
                                Manufacture warbots by staking MMAC. The length of time you stake your MMAC for will dictate how many Warbots you manufacture. For every period you stake your MMAC, you manufacture 1 Warbot per period. A period is 90 days. Ex. Stake your MMAC for 1 period and you earn 1 warbot in 90 days Stake your MMAC for 4 periods and you earn 4 warbots every 90 days for 4 periods. Stake your MMAC for 12 periods and you earn 12 warbots every 90 days for 12 periods. At the end of the staking period, your MMAC will be returned to you.
                            </p>
                            {/* <Tank_model /> */}
                        </div>
                        <div className="col-lg-7">
                            <div className="stake_box">
                                <div className="stake_head">
                                    <div className="stake_text">
                                        <h3>Stake your MMAC</h3>
                                        <p className="m-0">
                                            1 MMAC = 1 Warbot every 90 days
                                        </p>
                                    </div>
                                    <button className="mmac_btn">
                                        {balance} MMAC
                                    </button>
                                </div>
                                <hr />
                                <div className="stake_input_div">
                                    {/* <label>Deposit amount</label> */}
                                    <Form.Item
                                        name="vAmount"
                                        label="Deposit Amount"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Enter deposit amount",
                                            },
                                        ]}
                                    >
                                        <Input
                                            type="number"
                                            placeholder="123"
                                            value={data.amount}
                                            onChange={handleAmount}
                                        />
                                    </Form.Item>
                                    {/* <input
                                        type="text"
                                        placeholder="123"
                                        value={data.amount}
                                        onChange={handleAmount}
                                    /> */}
                                    <label>Time lock :</label>

                                    <Form.Item
                                    // name="vTimelock"
                                    // label="Time Lock"
                                    // name="timelock"
                                    // id="slider"
                                    >
                                        <Slider
                                            min={1}
                                            max={12}
                                            defaultValue={3}
                                            value={data.months}
                                            onChange={handleTimeLock}
                                            trackStyle={slider_style}
                                            handleStyle={handle_style}
                                        />
                                        <Space>
                                            <p className="time_line">
                                                <b>{data.months} periods </b>
                                                <span>
                                                    {" "}
                                                    ({" "}
                                                    {parseFloat(
                                                        parseInt(data.months) /
                                                            4
                                                    ).toFixed(1)}{" "}
                                                    years)
                                                </span>
                                            </p>
                                        </Space>
                                    </Form.Item>
                                    {/* <input
                                        type="range"
                                        min="1"
                                        max="12"
                                        id="slider"
                                    />

                                    <p className="time_line">
                                        <b>3 quarters </b>
                                        <span> (0.8 years)</span>
                                    </p> */}
                                    <button
                                        className="stake_btn2"
                                        onClick={approve}
                                    >
                                        Approve Contract
                                    </button>
									<button
                                        className={
                                            allowance >= data.amount &&
                                            data.amount * data.months <= 50
                                                ? sufficientlyApproved
                                                : insufficientlyApproved
                                        }
                                        // className="stake_btn"
                                        // type={
                                        //     allowance >= data.amount &&
                                        //     data.amount * data.months <= 50
                                        //         ? sufficientlyApproved
                                        //         : insufficientlyApproved
                                        // }
                                        onClick={
                                            allowance >= data.amount
                                                ? handleDeposit
                                                : notEnough
                                        }
                                    >
                                        Stake MMAC
                                    </button>
                                    <p className="stake_info">
                                        Build{" "}
                                        <span>
                                            {data.amount * data.months} Warbots{" "}
                                        </span>
                                        a period by locking your MicroMachines
                                        for {data.months} periods for a total of
                                        <span>
                                            {" "}
                                            {data.amount *
                                                data.months *
                                                data.months}{" "}
                                            Warbots
                                        </span>
                                        .
                                    </p>
                                </div>
                                <hr />
                                <div className="stake_input_div">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <UserManufacturingCenters />
            {/* <Card title="Micromachine Staking">
                <Card title="Build WarBot Manufacturing Center">
                    <Form size="large" layout="vertical">
                        <Statistic title="Balance" value={balance} />
                        <Statistic title="Approved" value={allowance} />
                        <Form.Item
                            name="vAmount"
                            label="Deposit Amount"
                            rules={[
                                {
                                    required: true,
                                    message: "Enter deposit amount",
                                },
                            ]}
                        >
                            <Input
                                type="number"
                                placeholder="e.g 10000"
                                value={data.amount}
                                onChange={handleAmount}
                            />
                        </Form.Item>
                        <Form.Item
                            name="vTimelock"
                            label="Time Lock"
                            name="timelock"
                            id="slider"
                        >
                            <Slider
                                min={1}
                                max={12}
                                defaultValue={1}
                                value={data.months}
                                onChange={handleTimeLock}
                            />
                            <Space>
                                <Text>{data.months} Quarter(s)</Text>
                                <Text>
                                    {parseFloat(
                                        parseInt(data.months) / 4
                                    ).toFixed(1)}{" "}
                                    Year(s)
                                </Text>
                            </Space>
                        </Form.Item>
                        <Space>
                            <Button
                                size="large"
                                type="primary"
                                onClick={approve}
                            >
                                Approve
                            </Button>
                            <Button
                                size="large"
                                type={
                                    allowance >= data.amount &&
                                    data.amount * data.months <= 50
                                        ? sufficientlyApproved
                                        : insufficientlyApproved
                                }
                                onClick={
                                    allowance >= data.amount
                                        ? handleDeposit
                                        : notEnough
                                }
                            >
                                Stake MicroMachines
                            </Button>
                        </Space>
                        <Card style={{ marginTop: 20, textAlign: "center" }}>
                            <Text level={5} strong>
                                Build {data.amount * data.months} WarBots a
                                period by locking your MicroMachines for{" "}
                                {data.months} period(s) for a total of{" "}
                                {data.amount * data.months * data.months}{" "}
                                WarBots
                            </Text>
                        </Card>
                    </Form>
                </Card>
            </Card> */}
        </Spin>
    );
};
// export const mmac_bal = { MMAC_balance };
export default MicroMachineStakingForm;
