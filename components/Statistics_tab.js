import { useEffect, useState, useCallback } from "react";
import { useWallet } from "use-wallet";
import useGlobal from "../hooks/useGlobal";
import useMicroMachineManufacturingPlant from "../hooks/useMicroMachineManufacturingPlant";




function  Statistics_tab() {
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Statistics_tab;
