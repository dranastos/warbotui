import Select from '../Select/Select';

function To_Polygon() {
  return (
    <>
      <section className="To_Polygon">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/img/polygon.png" alt=""/>
              <h1 className="pe-5 mt-3">
                Transfer your assets to Polygon Network
              </h1>
              <p className="to_pol_text">
                Use this Bridge to transfer your MMAC from BSC to Polygon.
                You can transfer up to 12 MMAC at a time for a .1 BNB toll.
              </p>
              <br/>
              <p className="to_pol_bal">Your BNB Balance:</p>
              <button className="to_pol_btn">361 BNB</button>
            </div>
            <div className="col-md-8">
              <div className="to_pol_card">
                <div className="to_pol_upside">
                  <h1 className="text-center ">
                    <img
                      src="/img/BNB.png"
                      alt=""
                      className="rounded-circle"
                    />
                    &nbsp; BSC Network
                  </h1>
                  <div className="row mx-4">
                    <div className="col-md-8">
                      <div className="BSC_input">
                        <input
                          type="text"
                          placeholder="E.G. 10000"
                        />
                        <button>MAX</button>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <Select
                        placeholder="Option"
                        options={[
                          {img: '/img/MMAC-sm.png', text: 'NMAC'},
                          {img: '/img/MMAC-sm.png', text: 'NMAC1'},
                          {img: '/img/MMAC-sm.png', text: 'NMAC2'},
                        ]}
                        setSelectData={(e) => console.log(e)}
                        selectData={'NMAC'}
                      />
                    </div>
                    <p className="available_MMAC mt-3">
                      Available: 361 MMAC
                    </p>
                  </div>
                </div>
                <div className="to_pol_downside">
                  <img
                    className="down_arrow"
                    src="/img/arrow.png"
                    alt=""
                  />
                  <h1 className="text-center">
                    <img src="/img/polygon.png" alt=""/>
                    &nbsp; Polygon Network
                  </h1>
                  <div className="row mx-5">
                    <button className="approve_btn">
                      Approve
                    </button>
                  </div>
                </div>
                <p className="downside_p">
                  Lorem ipsum dolor <span>XX fee</span> to
                  ultrices amet massa urna scelerisque magna.
                  Elit turpis amet, a eleifend scelerisque.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default To_Polygon;
