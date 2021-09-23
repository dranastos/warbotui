import { useEffect, useState, useCallback } from "react";
import PublicLayout from "../layouts/PublicLayout_BNB";
import To_BSC from "../components/To_BSC";
import To_Polygon from "../components/To_Polygon";
export default function bridge() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <PublicLayout>
            <section className="War_dashboard_tabs Cross_Chain_Bridge">
                <div className="container">
                    <h1>Cross-Chain Bridge</h1>

                    <div className="tab_btn_holder">
                        <button
                            className={
                                toggleState === 1 ? "tabs active_tabs" : "tabs"
                            }
                            onClick={() => toggleTab(1)}
                        >
                            To Polygon
                        </button>
                        <button
                            className={
                                toggleState === 2 ? "tabs active_tabs" : "tabs"
                            }
                            onClick={() => toggleTab(2)}
                        >
                            To BSC
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
                            <To_Polygon />
                            {/* <For_innovators_tab /> */}
                        </div>

                        <div
                            className={
                                toggleState === 2
                                    ? "content  active-content"
                                    : "content"
                            }
                        >
                            <To_BSC />
                            {/* <Closed_plants_tab /> */}
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}