import React from "react";

function Manufacturing_plants() {
    return (
        <>
            <section className="Manufacturing_plants">
                <div className="container-lg">
                    <div className="Manufacturing_head">
                        <h1 className="m-0">
                            <img src="/img/green_light.png" alt="" /> Warbot
                            Manufacturing Plants
                        </h1>
                        <button className="Manufacturing_head_btn">
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
                            <tr>
                                <td>123</td>
                                <td> 15:00 2021-07-23</td>
                                <td> 3 quarters</td>
                                <td>269D 16h 39m 20s </td>
                                <td>1107</td>
                                <td className="halka_edit">
                                    <button className="tb_btn_1">369</button>
                                    <button className="tb_btn_2">
                                        Claim Warbots
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td> 15:00 2021-07-23</td>
                                <td> 1 quarters</td>
                                <td>89D 16h 39m 20s </td>
                                <td>3</td>
                                <td className="halka_edit">
                                    <button className="tb_btn_1">1</button>
                                    <button className="tb_btn_2">
                                        Claim Warbots
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td> 15:00 2021-07-23</td>
                                <td> 1 quarters</td>
                                <td>89D 16h 39m 20s </td>
                                <td>12</td>
                                <td className="halka_edit">
                                    <button className="tb_btn_1">3</button>
                                    <button className="tb_btn_2">
                                        Claim Warbots
                                    </button>
                                </td>
                            </tr>
                            <tr>
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
                            </tr>
                        </table>
                    </div>

                    <button className="view_closed">View Closed Plants</button>
                </div>
            </section>
        </>
    );
}

export default Manufacturing_plants;
