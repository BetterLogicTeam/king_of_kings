import React, { useEffect, useState } from 'react';
import './Landing.css';
import card from "../Assets/card.png"
import KingLogo from "../Assets/logo.png"
import Dark from "../Assets/Dark.png"
import Btn from "../Assets/Btn.png"
import Dark_Mood from '../Dark_mood/Dark_Mood';
import { useNavigate } from 'react-router-dom';


function Landing() {
  let [value, setValue] = useState(1);

  let navigate = useNavigate()
  const increaseValue = () => {
    if (value < 10) {
      setValue(++value);
      console.log("setValue", value);
    }
  };

  const decreaseValue = () => {
    if (value > 1) {
      setValue(--value);
      console.log("setValue", value);
    }
  };
  setInterval(() => {
      
    document.getElementById('vid').play();
  }, 1000);

  return (
    <>
      <div className='main_div'>
        <div className="">
          <div className="container kig">
            <div className="row">
              <div className="col-lg-2"></div>
              <div className="col-lg-7 d-flex responsive">
                <div className="row justify-content-center">
                  <div className="col-md-6 responsive">
                    <div className="vid_div">
                      {/* <video src="light.mp4" className='w-100 '></video> */}
                      <div className="vid_div">
                        {/* <video src="Dark.mp4" className='w-100 '></video> */}
                        <video autoplay="autoplay" loop width="100%" id='vid'>
                          <source src="light.mp4" type="video/mp4" />

                        </video>

                      </div>

                    </div>
                  </div>

                  <div className="col-md-6 responsive scnd">
                    <div className="logo">
                      <img src="logo.png" alt="" />
                    </div>

                    <div className="bttn">
                      <div className="btn fst_bttn">BNB</div>
                      <div className="btn fst_bttn">ETH</div>
                    </div>

                    <div className="heding">
                      <h4 className='text-white pt-3'>GENESIS KING CROWN</h4>
                      <p>0.4 BNB</p>
                    </div>

                    <div className="scnd_emg">
                      <img src="LIGHT.png" alt="" />
                    </div>

                    <div className="bttn">
                      <div className="btn scnd_bttn actiggve" onClick={() => navigate('/')}>LIGHT THEME</div>
                      <div className="btn scnd_bttn" onClick={() => navigate('/Dark_Mood')}>DARK THEME</div>
                    </div>

                    <div className="blck">
                      <div className="btn plus" onClick={() => decreaseValue()}>-</div>{" "}
                      <input type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)} />{" "}
                      <div className="btn plus" onClick={() => increaseValue()}>+</div>{" "}
                    </div>

                    <div className="mint">
                      <img src="mint.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




    </>


  )
}

export default Landing