import React from 'react'
import './tip-calci.css'
import { useState, useEffect} from 'react'

const Calci = () => {
  const [bill, setBill]=useState("")
  const [tip, setTip]=useState(0)
  const [persons, setPersons]=useState('')
  const [finalBill, setFinalBill]=useState("0.00")
  useEffect(()=>
  {
    setFinalBill((value)=>{
      if(value.length<5){
        let calculatedValue = ((tip/bill)*100)/persons
        if (!isFinite(calculatedValue) || isNaN(calculatedValue)) {
          return '0';
        }
        else
        {
          return calculatedValue
        }
      }
    })
  },[bill,tip,persons])
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
  const handleCustomTip=(event)=>
  {
    let custom=document.querySelector('.custom-tip')
    custom.style.display='none'
    let hiddenInput=document.querySelector('.custom-tip-input')
    hiddenInput.style.display='block'
    event.stopPropagation();
  }
  const handleCustomTipOut=()=>
  {
    let custom=document.querySelector('.custom-tip')
    custom.style.display='block'
    let hiddenInput=document.querySelector('.custom-tip-input')
    hiddenInput.style.display='none'
  }
  const handleCustomTipInput=(e)=>
  {
    if(!/[a-z]/g.test(e.target.value)&&e.target.value<=100)
    {
      setTip(e.target.value)
    }
  }

  const handlePersons=(e)=>
  {
    if(!/[a-z]/g.test(e.target.value)&&e.target.value<=12)
    {
      setPersons(e.target.value)
    }
  }

  return (
    <>
      <div onClick={handleCustomTipOut} className='body'>
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
                <div className="custom-tip" onClick={(e)=>handleCustomTip(e)}>Custom Tip</div>
                <input type="text" className="custom-tip-input" value={tip} onClick={(e)=>handleCustomTip(e)} onChange={(e)=>{handleCustomTipInput(e)}}></input>
              </div>
              <div className="people-container">
                <p className='text'>How many people are paying?</p>
                <div className="number-container">
                  <button className="sub" onClick={()=>{setPersons((value)=>{if(value>=0&&value!="")return value-1})}}>-</button>
                  <input type="text" className="number-input" value={persons} onChange={(e)=>{handlePersons(e)}}/>
                  <button className='add' onClick={()=>{setPersons((value)=>{if(value<=12||value==""||value==0)return ++value})}}>+</button>
                </div>
              </div>
            </div>
          </div>
          <div className="display-container">
            <div className="final-amount">{finalBill}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Calci