import React,{useState,useRef,useContext} from 'react';
import {APPLContext} from './../App'

import './../App.css'

const Alarm = (props) => {
    
    const aPPLContext = useContext(APPLContext)
    const Alarmonoffstyleindicator = useRef('alarmindicatorOffstyle')
    let  [,setState]=useState();

    const openAlarm = ()  => {
        
        setState({});
        document.getElementById("alarmboxcontainer").style.width= "340px";
        document.getElementById("alarmboxcontainer").style.height= "360px";
        
      }
      
    const  closeAlarm = () => {
        
        setState({});
        document.getElementById("alarmboxcontainer").style.width = "0px";
        document.getElementById("alarmboxcontainer").style.height= "0px";
      }

    const Increasehrbutton = () =>{
       // console.log (aPPLContext.hr)
        let h = 0
        if (aPPLContext.hr <=11 ){
        h = parseInt(aPPLContext.hr) + 1
         
        aPPLContext.Changehr(h)
      //  console.log (aPPLContext.hr)
        }else{
            aPPLContext.hr = -1
        }
        
    }

    
    const decreasehrbutton = () =>{
      //  console.log (aPPLContext.hr)
        let h = 0
        if (aPPLContext.hr > 0 ){
        h = parseInt(aPPLContext.hr) - 1
         
        aPPLContext.Changehr(h)
     //   console.log (aPPLContext.hr)
        }else{
            aPPLContext.hr = 13
        }
        
    }

    const Increaseminbutton = () =>{
       // console.log (aPPLContext.min)
        let m = 0
        if (aPPLContext.min <=58 ){
        m = parseInt(aPPLContext.min) + 1
        aPPLContext.Changemin(m)
       // console.log (aPPLContext.min)
        } else{
            aPPLContext.min = -1
        }
    }

    const decreaseminbutton = () =>{
       // console.log (aPPLContext.min)
        let m = 0
        if (aPPLContext.min > 0 ){
        m = parseInt(aPPLContext.min) - 1
        aPPLContext.Changemin(m)
       // console.log (aPPLContext.min)
        }else{
            aPPLContext.min = 60
        }
        
    }

    const Increaseampmbutton = () =>{
      //  console.log (aPPLContext.hr)
        let ap = 'PM'
        aPPLContext.ChangeAMPM(ap)
      //  console.log (aPPLContext.ampm)
        
    }
    const decreaseampmbutton = () =>{
       // console.log (aPPLContext.hr)
        let ap = 'AM'
        aPPLContext.ChangeAMPM(ap)
      //  console.log (aPPLContext.ampm)
        
    }
    
    //for toggle switch on alarm panel
    document.addEventListener('DOMContentLoaded', function () {

    let checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {

        if (checkbox.checked) {
            let ap = 'on'
            aPPLContext.Changealarmflag(ap)
            //console.log (aPPLContext.alarmflag)
          //console.log('Checked');
          Alarmonoffstyleindicator.current = 'alarmindicatorOnstyle'
          setState({});

        } else {
            let ap = 'off'
            aPPLContext.Changealarmflag(ap)
           // console.log (aPPLContext.alarmflag)
         // console.log('Not checked');
          Alarmonoffstyleindicator.current = 'alarmindicatorOffstyle'
          setState({});
        }
      })
    })


    return(
        <div >
             <div id='alarmboxcontainer'  className='alarmboxdetail' >
                <div className='Closebutton'onClick={() => closeAlarm()}>
                    X
                </div>
                <div>
                    <div className='incrementhrbutton' onClick={() => Increasehrbutton()} >+</div>
                    <div className='hour'>{aPPLContext.hr}</div>
                    <div className='decrementhrbutton' onClick={() => decreasehrbutton()}>-</div>
                   
                    <div className='incrementminbutton' onClick={() => Increaseminbutton()}>+</div>
                    <div className='min'>{aPPLContext.min}</div>
                    <div className='decrementminbutton' onClick={() => decreaseminbutton()}>-</div>
                    <div className='incrementampmbutton' onClick={() => Increaseampmbutton()}>PM</div>
                    <div className='AMPMSETTING'>{aPPLContext.ampm}</div>
                    <div className='decrementampmbutton' onClick={() => decreaseampmbutton()}>AM</div>
                    
                    <div className='switchcontainer'>
                    <label class="switch">
                        <input type="checkbox"></input>
                        <div class="slider"></div>
                    </label>
                    </div>
                </div>
            </div>
            <div className='alarmbutton' onClick={() => openAlarm()}  >
                <div className={Alarmonoffstyleindicator.current}></div>
            </div>

       
        </div>
        
    )
}


export default Alarm