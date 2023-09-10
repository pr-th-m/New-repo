import React from 'react'
import './tip-calci.css'
import { useState } from 'react'

const Calci = () => {
  const [bill, setBill]=useState("")
  const [tip, setTip]=useState(0)

  const handleBill=(e)=>
  {
    if(!/[a-z]/g.test(e.target.value)&&e.target.value.length<17)
    {
      setBill(e.target.value)
    }
  }
  const handleTip = (classname) => {
    let btn1 = document.querySelector('.percent-1');
    let btn2 = document.querySelector('.percent-2');
    let btn3 = document.querySelector('.percent-3');
  
    btn1.style.backgroundColor = 'rgb(205, 205, 205)';
    btn2.style.backgroundColor = 'rgb(205, 205, 205)';
    btn3.style.backgroundColor = 'rgb(205, 205, 205)';
  
    if (classname === "percent-1") {
      setTip(5);
      btn1.style.backgroundColor = 'rgb(33, 181, 181)';
    } else if (classname === "percent-2") {
      setTip(10);
      btn2.style.backgroundColor = 'rgb(33, 181, 181)';
    } else if (classname === "percent-3") {
      setTip(15);
      btn3.style.backgroundColor = 'rgb(33, 181, 181)';
    }
  };
  const handleCustomTip=()=>
  {
    let custom=document.querySelector('.custom-tip')
    custom.style.display='none'
  }

  return (
    <>
      <div className='body'>
        <div className="calci-container">
          <div className="input-container">
            <div className="input-item-container">
              <div className="bill-container">
                <p className='text'>Bill Amount</p>
                <input className='bill-input' placeholder='0' type="text" value={bill} onChange={e=>handleBill(e)}></input>
              </div>
              <div className="tip-container">
                <p className='text'>Tip Amount</p>
                <div className="tip-percent">
                  <div className="percent-1 " onClick={()=>handleTip("percent-1")}>5%</div>
                  <div className="percent-2" onClick={()=>handleTip("percent-2")}>10%</div>
                  <div className="percent-3" onClick={()=>handleTip("percent-3")}>15%</div>
                </div>
                <div className="custom-tip" onClick={()=>handleCustomTip()}>Custom Tip</div>
                <input type="text" className="custom-tip-input"></input>
              </div>
              <div className="people-container">
                <p className='text'>How many people are paying?</p>
                <div className="number-container">
                  <button className="sub">-</button>
                  <input type="text" className="number-input" />
                  <button className='add'>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="display-container">
            <div className="final-amount">0.00</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calci