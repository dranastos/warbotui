import { useEffect, useState, useCallback } from "react";
import { useWallet } from "use-wallet";
import useGlobal from "../hooks/useGlobal";
import useMicroMachineManufacturingPlant from "../hooks/useMicroMachineManufacturingPlant";




function  Statistics_tab() {
	const [state, actions] = useGlobal([
        "chain",
        "micromachines",
        "warbotmanufacturer",
        "hasWarbotmanufacturer",
        "warbotmanufacturerInfo",
    ]);
	const [loading, setLoading] = useState(false);
	const [show, setShow] = useState(false);
    const [data, setData] = useState({});
	const { warbotmanufacturer, web3, getField, sendTx, connected, getFields } =
        useMicroMachineManufacturingPlant(state.warbotmanufacturer);
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
        setManufacturingPeriod(parseInt(manufacturingPeriod)/60/60/24);
        setData(warbotInfo);
        actions.setSecurityInfo(warbotInfo);
        setLoading(false);
    };
		
		
    return (
        <>
            <section className="For_innovators_tab">
                <div className="container-lg">
                    <div className="row">
                        <div className="col-lg-5">
                            <h1>Statistics</h1>
                            <p>
                                Statistics for Warbot Data will be shown here.
                            </p>
                            {/* <Tank_model /> */}
                        </div>
                        <div className="col-lg-7 mt-3">
                            <div className="stat_box_holder">
                                <div className="stat_box">
                                    <div className="stat_text">
                                        <p>Warbots in existence</p>
                                        <h1 className="m-0">{warbotsupply}</h1>
                                    </div>
                                    <div className="stat_img">
                                        <img src="/img/stat_cog.png" alt="" />
                                    </div>
                                </div>
                                <div className="stat_box">
                                    <div className="stat_text">
                                        <p>Total Manufacturing Plants</p>
                                        <h1 className="m-0">{plants}</h1>
                                    </div>
                                    <div className="stat_img">
                                        <img src="/img/stat_cog.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="stat_box_holder">
                                <div className="stat_box">
                                    <div className="stat_text">
                                        <p>Warbots manufactured per period</p>
                                        <h1 className="m-0">{warbotproduction}</h1>
                                    </div>
                                    <div className="stat_img">
                                        <img src="/img/stat_cog.png" alt="" />
                                    </div>
                                </div>
                                <div className="stat_box">
                                    <div className="stat_text">
                                        <p>Manufacturing period </p>
                                        <h1 className="m-0">{manufacturingperiod} Days</h1>
                                    </div>
                                    <div className="stat_img">
                                        <img src="/img/stat_cog.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Statistics_tab;
