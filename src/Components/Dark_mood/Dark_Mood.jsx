import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Dark from "../Assets/Dark.png"
import Landing from '../Landing/Landing';
import { Player } from 'video-react';
import { toast } from 'react-toastify';
import { bnbContractAddress, bnbNftContractAbi, ethContractAddress, ethNftContractAbi } from '../utilies/constant';
import { loadWeb3 } from '../apis/api';
// import "node_modules/video-react/dist/video-react.css"; // import css
import notcoonect from '../../Assets/notconnect.png'
import connected from '../../Assets/connected.png'
import { loadWeb4 } from '../apis/api2';
import Web3 from "web3";



export default function Dark_Mood() {
    let [value, setValue] = useState(1);
    let [btnOne, setButtonOne] = useState("Mint With BNB");
    const [ValueBNB, setValueBNB] = useState("")
    const [change_contract, setchange_contract] = useState("bnb")
    const [check_Chain_id, setcheck_Chain_id] = useState("")
    const [connect, setconnect] = useState(false)



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


    

  const getChainId = async () => {
    try {
      // const web3 = window.web3;
    //   console.log("Chain_ID");

      window.web3 = new Web3(window.ethereum);

      await window.web3.eth.getChainId((err, netId) => {
        setcheck_Chain_id(netId)
        // NetId = netId
        // setNetId_set(NetId)

        if(netId==97){
            setconnect(true)

        }else if(netId==5){
            setconnect(true)

        }else{
        setconnect(false)

        }

      }
      )

    } catch (e) {
      console.log("Error while Get chain ID", e);
    }
  }


  const connectWallte=async()=>{
    try{
      let acc 
    //   console.log("change_contract",connect);
      if(change_contract=="bnb"){

         acc = await loadWeb3();
      }else{
         acc = await loadWeb4();

      }

      // console.log("ACC=",acc)
      if (acc == "No Wallet") {
        setconnect(false)
          // toas("No Wallet")
    //   console.log("Wal   let");

      }
      else if (acc == "Wrong Network") {
          // setBtTxt("Wrong Network")
        setconnect(false)
    //   console.log("Wrong");


      } else {
        setconnect(true)
    //   console.log("connect");


          let myAcc = acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
          // setBtTxt(myAcc);

      }

    }catch(e){
      console.log("Error while Connect Walte",e);
    }
  }

  useEffect(() => {
    connectWallte();

  }, [change_contract])
  
  useEffect(() => {
      connectWallte();
      setInterval(() => {
          getChainId()
        
      }, 1000);
}, []);




    const Mint_With_BNB = async () => {
        let acc = await loadWeb3();

        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {


            try {
                setButtonOne("Please Wait While Processing")

                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(bnbNftContractAbi, bnbContractAddress);
                let mintingWirePrice
                let own_Address = await nftContractOf.methods.owner().call()
                console.log("own_Address", own_Address);
                if (own_Address == acc) {
                    mintingWirePrice = 0;
                } else {
                    mintingWirePrice = await nftContractOf.methods.lightPrice().call()
                    mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                    mintingWirePrice = parseFloat(mintingWirePrice);
                    mintingWirePrice = value * mintingWirePrice
                    mintingWirePrice = web3.utils.toWei(mintingWirePrice.toString());
                }
                console.log("mintingWirePrice", mintingWirePrice);


                let hash = await nftContractOf.methods.mintLight(acc, value).send({
                    from: acc,
                    value: mintingWirePrice
                })
                toast.success("Transaction Confirmed")
                setButtonOne("Mint With BNB")


            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed")
                setButtonOne("Mint With WHE")

            }

        }
    }
    const minting_live_price = async () => {
        try {

            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(bnbNftContractAbi, bnbContractAddress);
            let Value_in_bnb = await nftContractOf.methods.lightPrice().call()
            Value_in_bnb = web3.utils.fromWei(Value_in_bnb);
            setValueBNB(Value_in_bnb)



        } catch (e) {
            console.log("Erroe while get BNB value", e);
        }
    }

    const Mint_With_Eth = async () => {
        let acc = await loadWeb4();

        if (acc == "No Wallet") {
            toast.error("No Wallet Connected")
        }
        else if (acc == "Wrong Network") {
            toast.error("Wrong Newtwork please connect to test net")
        } else {


            try {
                setButtonOne("Please Wait While Processing")

                const web3 = window.web3;
                let nftContractOf = new web3.eth.Contract(ethNftContractAbi, ethContractAddress);
                let mintingWirePrice
                let own_Address = await nftContractOf.methods.owner().call()
                console.log("own_Address", own_Address);
                if (own_Address == acc) {
                    mintingWirePrice = 0;
                } else {
                    mintingWirePrice = await nftContractOf.methods.lightPrice().call()
                    mintingWirePrice = web3.utils.fromWei(mintingWirePrice);
                    mintingWirePrice = parseFloat(mintingWirePrice);
                    mintingWirePrice = value * mintingWirePrice
                    mintingWirePrice = web3.utils.toWei(mintingWirePrice.toString());
                }
                console.log("mintingWirePrice", mintingWirePrice);


                let hash = await nftContractOf.methods.mintLight(acc, value).send({
                    from: acc,
                    value: mintingWirePrice
                })
                toast.success("Transaction Confirmed")
                setButtonOne("Mint With BNB")


            } catch (e) {
                console.log("Error while minting ", e)
                toast.error("Transaction failed")
                setButtonOne("Mint With WHE")

            }

        }
    }
    const minting_live_price_eth = async () => {
        try {

            const web3 = window.web3;
            let nftContractOf = new web3.eth.Contract(ethNftContractAbi, ethContractAddress);
            let Value_in_bnb = await nftContractOf.methods.lightPrice().call()
            Value_in_bnb = web3.utils.fromWei(Value_in_bnb);
            setValueBNB(Value_in_bnb)



        } catch (e) {
            console.log("Erroe while get BNB value", e);
        }
    }





    useEffect(() => {
        minting_live_price()
        minting_live_price_eth()
    }, [])









    // useEffect(() => {

    //     document.getElementById('vid').play();

    // }, [])


    return (
        <div>

            <div className='main_div'>
                <div className="connected_div">

                {
            connect  ? <> <img src={connected} alt="" width="25%" /> </> : <><img src={ notcoonect} alt="" width="25%" /></>
          }
                </div>
                <div className="">
                    <div className="container kig">
                        <div className="row">
                            <div className="col-lg-2"></div>
                            <div className="col-lg-7 d-flex responsive">
                                <div className="row justify-content-center">
                                    <div className="col-md-6 responsive">
                                        <div className="vid_div">
                                            {/* <video src="Dark.mp4" className='w-100 '></video> */}
                                            <video autoplay="autoplay" loop width="100%" id='vid'>
                                                <source src="Dark.mp4" type="video/mp4" />

                                            </video>

                                        </div>
                                    </div>

                                    <div className="col-md-6 responsive scnd">
                                        <div className="logo">
                                            <img src="logo.png" alt="" />
                                        </div>

                                        <div className="bttn">
                                            <div className="btn fst_bttn" onClick={() => setchange_contract("bnb")}>BNB</div>
                                            <div className="btn fst_bttn" onClick={() => setchange_contract("ETH")}>ETH</div>
                                        </div>

                                        <div className="heding">
                                            <h4 className='text-white pt-3'>GENESIS KING CROWN</h4>
                                            <p>{ValueBNB} 
                                            {
                          check_Chain_id == 97 ? "BNB" : "ETH"
                        }
                                            </p>
                                        </div>

                                        <div className="scnd_emg">
                                            <img src={Dark} alt="" />
                                        </div>

                                        <div className="bttn">
                                            <button className="btn scnd_bttn activedark1 " onClick={() => navigate('/')}>LIGHT THEME</button>
                                            <button className="btn scnd_bttn activedark activedark1" onClick={() => navigate('/Dark_Mood')}>DARK THEME</button>
                                        </div>

                                        <div className="blck">
                                            <div className="btn plus" onClick={() => decreaseValue()}>-</div>{" "}
                                            <input type="text"
                                                value={value}
                                                onChange={(e) => setValue(e.target.value)} />{" "}
                                            <div className="btn plus" onClick={() => increaseValue()}>+</div>{" "}
                                        </div>

                                        <div className="mint" style={{cursor:"pointer"}}>
                                            {
                                                change_contract == "bnb" ?
                                                    <img src="mint.png" alt="" onClick={() => Mint_With_BNB()} />
                                                    :
                                                    <img src="mint.png" alt="" onClick={() => Mint_With_Eth()} />

                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
