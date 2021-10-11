import Select from '../../Select/Select';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import {useState} from 'react';

function To_BSC() {
  const [data, setData] = useState({months: 0, amount: '', timelock: 0});

  return (
    <>
      <section className="To_BSC">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img src="/img/BNB.png" alt=""/>
              <h1 className="pe-5 mt-3">
                Transfer your assets to BSC
              </h1>
              <p className="to_pol_text">
                Praesent dis id aliquet urna enim facilisis sed.
                Tincidunt nunc, lectus quisque magna praesent
                vitae. Urna quisque neque ultrices amet massa
                urna scelerisque magna. Elit turpis amet, a
                eleifend scelerisque. Nulla orci, sit posuere
                habitant mauris id in mauris, facilisis.
              </p>
              <br/>
              <p className="to_pol_bal">Your MATIC Balance:</p>
              <button className="to_pol_btn">204 MATIC</button>
            </div>
            <div className="col-md-8">
              <div className="to_pol_card">
                <div className="to_pol_upside mt-3">
                  <h1 className="text-center">
                    <img src="/img/polygon.png" alt=""/>
                    &nbsp; Polygon Network
                  </h1>
                  <div className="row mx-4">
                    <div className="col-md-8">
                      <div className="BSC_input mb-3">
                        <Input
                          placeholder="E.G. 10000"
                          value={data.amount}
                          onInput={(event) => setData({...data, amount: event.target.value})}
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
                      Available: 204 MATIC
                    </p>
                  </div>
                </div>
                <div className="to_pol_downside">
                  <img
                    className="down_arrow"
                    src="/img/arrow.png"
                    alt=""
                  />
                  <h1 className="text-center ">
                    <img
                      src="/img/BNB.png"
                      alt=""
                      className="rounded-circle"
                    />
                    &nbsp; BSC Network
                  </h1>

                  <div className="row mx-5">
                    <Button value="Approve"/>
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

export default To_BSC;
