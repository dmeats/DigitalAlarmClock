import React, {useRef,useState, useEffect,useContext} from 'react'
import {APPLContext} from './../App'
import '../App.css';
//import Sound from './Sound.js'
import alarmsound from './../Sounds/alarmsound.mp3'
import useWindowDimensions from './usewindowsize'
import DigitalCharacter from './DigitalCharacter'
import Colon from './colon'
import Day from './Day'


//import { getByDisplayValue } from '@testing-library/react';


//main digital clock routine
const  Digitalclock = () => {
  const { width } = useWindowDimensions();
  const [date, setDate] = useState(new Date());
  const aPPLContext = useContext(APPLContext)
  const hr1digit = useRef('');
  const hr2digit = useRef('');
  const min1digit = useRef('');
  const min2digit = useRef('');
  const second1digit = useRef('');
  const second2digit = useRef('');
  const AMPMCharterChange = useRef('');
  const day = useRef('');
  const month = useRef('');
  const year = useRef('');
  const daydate = useRef('');
  const countdowntime = useRef('');
  const timersec = useRef('');
  const timermin = useRef('');
  let  [,setState]=useState();
  const isPlaying = useRef(false);
  const audioRef = useRef(new Audio(alarmsound));
  

  //<img src={logo} className="App-logo" alt="logo" />
 

 
 //checks for hour and then splits the hour into two digits which are displayed in the seven segement LED
 const hourtime = () =>{
  
  let hr=date.getHours().toString()
  
  if(hr==='0'){
    hr='12'
  }
  if (hr<10){
    
    hr1digit.current = '0'
    hr2digit.current = hr 
  }
   if (hr>=10){
    hr1digit.current = hr.slice(0, 1);
    hr2digit.current = hr.slice(1, 2); 
   
   }

   //covert to regular time
   if (hr>=13){
   
    hr = hr-12
    
    if (hr<10){
      
      hr1digit.current = '0'
      hr2digit.current = hr.toString() 
      
    }
     if (hr>=10){
     
      hr1digit.current = hr.toString().slice(0, 1);
      hr2digit.current = hr.toString().slice(1, 2); 
     
     } 
   }

   let ap=date.getHours().toString()
   //console.log(ap)
   if (ap >=12){
    AMPMCharterChange.current = 'P'
   }
   else{
    AMPMCharterChange.current = 'A'
   }
 }

 //cal minutes
 const mintime = () =>{
  
  let min=date.getMinutes().toString()
  if (min<10){
    min1digit.current = '0'
    min2digit.current = min 
  }
   if (min>=10){
    min1digit.current = min.slice(0, 1);
    min2digit.current = min.slice(1, 2); 
   
   }
 }

 //cal seconds
 const sectime = () =>{
  
  let sec=date.getSeconds().toString()
  if (sec<10){
    second1digit.current = '0'
    second2digit.current = sec 
  }
   if (sec>=10){
    second1digit.current = sec.slice(0, 1);
    second2digit.current = sec.slice(1, 2); 
   
   }
 }

 //cal of week which returns a number from 0-6 - 0=Sunday .....
 const daytime = () =>{
  let d = new Date();
    day.current = d.getDay().toString() 
 }

 //cal month which returns back 0-11 0=Jan
 const monthtime = () =>{
  let d = new Date();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];
  month.current = monthNames[d.getMonth()] 
}

//cal year
const yeartime = () =>{
  let d = new Date();
  year.current = d.getFullYear() 
}


//cal the calander date of the current day
const calendardatetime = () =>{
  let d = new Date();
  daydate.current = parseInt(d.getDate()) 
  //console.log(daydate.current)
}



//sets off the alarm when alarm time matches current time
const checkAlarmSet = () => {

  let hr = hr1digit.current + hr2digit.current
  let min = min1digit.current + min2digit.current
  let ampm =  AMPMCharterChange.current + 'M'
 
//  let context = new (window.AudioContext || window.webkitAudioContext || false)();
 // if (context) {
    // Do whatever you want using the Web Audio API
 //   console.log('exists')
    // ...
//} else {
    // Web Audio API is not supported
    // Alert the user
 //   alert("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox");
//}
 // let note = new Sound(context);
 // let now = context.currentTime;
  

   if( parseInt(hr) === parseInt(aPPLContext.hr) &&  parseInt(min) === parseInt(aPPLContext.min) &&  ampm === aPPLContext.ampm &&  aPPLContext.alarmflag ==='on'){
    
    isPlaying.current = true
    if(isPlaying.current === true){
      audioRef.current.play();
    }
   // console.log(context.currentTime)
     
   //  note.play(520.00, now + 2 );
   //  note.play(600.63, now + 1.5);
   //  note.play(802.18, now + 1);
   //  note.play(1864.66, now  );
   //  note.play(1479.98, now + 1.5);
   //  note.play(1244.51, now + 2);
   //  note.play(155.56, now );
   //  note.play(1479.98, now + .5);
   //  note.play(783.99, now + 2.5);
   //  note.play(1864.66, now );
   //  note.play(1479.98, now  + .5);
   //  note.play(659.25, now + 1.5);
   //  note.play(783.99, now + .5);
   
   
   }
   else{
    isPlaying.current = false
    audioRef.current.pause()
   }
 }

 useEffect(() => {
  var tkID = setInterval( () => tick(), 1000 );
  
  return function cleanup() {
      clearInterval(tkID);
    };

    
 },[]);

 //set new date on every second
   function tick() {
    setDate(new Date());
    
   }

  
  // useEffect(() => {
 //   if (isPlaying.current === true) {
  //    audioRef.current.play();
 //   } else {
 //     audioRef.current.pause();
 //   }
 // }, [isPlaying]);

 mintime()
 hourtime()
 sectime()
 daytime()
 calendardatetime()
 monthtime()
 yeartime()
 checkAlarmSet()
 

 //check screen to see if it is mobile or desk top
 if(width <= 414){
   return(
    <div className="clockbackground">
          
    <div    className='svgbborderbox' >
  <svg xmlns="http://www.w3.org/2000/svg"  width='88%' height='93%' viewBox="-1 10 65 100" className='svgbox'>
   
    <DigitalCharacter num={hr1digit.current} fillcolor='#18dbdb' xval='-2' yval='-55'/>
    <DigitalCharacter num={hr2digit.current} fillcolor='#18dbdb' xval='10' yval='-55'/>
    <Colon fillcolor='yellow' xval='-9' yval='-37'screenwidth={width}/>
    <DigitalCharacter num={min1digit.current} fillcolor='#18dbdb' xval='-2' yval='-28'/>
    <DigitalCharacter num={min2digit.current} fillcolor='#18dbdb' xval='10' yval='-28'/>
    <Colon fillcolor='yellow' xval='-9' yval='-11'screenwidth={width}/>
    <DigitalCharacter num={second1digit.current} fillcolor='#18dbdb' xval='-2' yval='-2'/>
    <DigitalCharacter num={second2digit.current} fillcolor='#18dbdb' xval='10' yval='-2'/>
    <Colon fillcolor='yellow' xval='-9' yval='16' screenwidth={width}/>
    <DigitalCharacter num={ AMPMCharterChange.current} fillcolor='#18dbdb' xval='-2' yval='25'/>
    <DigitalCharacter num='M' fillcolor='#18dbdb' xval='10' yval='25'/>
    <Day dayval={day.current} fillcolor='red' screenwidth={width}/>
    <text x="6.5" y="109"font-family="Arial" font-size='9' fill="blue">{month.current} {daydate.current}/{year.current}</text>
     <path d="m 6.9,110.782259 0.0942,2.052062 1.318824,3.078094 2.637647,2.145336 18.463531,-0.09327 v -6.90239 z" fill='white' />
     <path d=" m 55.77928,110.782259 -0.0942,2.052062 -1.31883,3.078094 -2.637642,2.145336 -18.463532,-0.09327 v -6.90239 z" fill='white'/>
     <text x="13" y="115.782259"font-family="Arial" font-size='5' fill="red">Alarm</text>
     <text x="37.5" y="115.782259"font-family="Arial" font-size='5' fill="red">Timer</text>
   
  </svg>
  
  </div>
  
</div>
   )
 }
 else{
  return (
    <div className="App">
          
          <div    className='svgbborderbox'>
        <svg xmlns="http://www.w3.org/2000/svg"  width='600px' height='250px' viewBox="0 0 120 60" className='svgbox'>
         
          <DigitalCharacter num={hr1digit.current} fillcolor='#18dbdb' xval='-35' yval='-53'/>
          <DigitalCharacter num={hr2digit.current} fillcolor='#18dbdb' xval='-24' yval='-53'/>
          <Colon fillcolor='yellow' xval='-24' yval='-53' screenwidth={width}/>
          <DigitalCharacter num={min1digit.current} fillcolor='#18dbdb' xval='-6' yval='-53'/>
          <DigitalCharacter num={min2digit.current} fillcolor='#18dbdb' xval='5' yval='-53'/>
          <Colon fillcolor='yellow' xval='5.2' yval='-53' screenwidth={width}/>
          <DigitalCharacter num={second1digit.current} fillcolor='#18dbdb' xval='23' yval='-53'/>
          <DigitalCharacter num={second2digit.current} fillcolor='#18dbdb' xval='34' yval='-53'/>
          <Colon fillcolor='yellow' xval='36' yval='-53' screenwidth={width}/>
          <DigitalCharacter num={ AMPMCharterChange.current} fillcolor='#18dbdb' xval='55' yval='-53'/>
          <DigitalCharacter num='M' fillcolor='#18dbdb' xval='68' yval='-53'/>
          <Day dayval={day.current} fillcolor='red' screenwidth={width}/>
          <text x="28.5" y="54.5"font-family="Arial" font-size='11' fill="blue">{month.current} {daydate.current}/{year.current}</text>
          <path d="m 0.9,47 0.0942,2.052062 1.318824,3.078094 2.637647,2.145336 18.463531,-0.09327 v -6.90239 z" fill='#18dbdb'/>
          <path d=" m 118,47 -0.0942,2.052062 -1.31883,3.078094 -2.637642,2.145336 -18.463532,-0.09327 v -6.90239 z" fill='#18dbdb'/>
          <text x="6" y="52"font-family="Arial" font-size='5' fill="red">Alarm</text>
          <text x="100" y="52"font-family="Arial" font-size='5' fill="red">Timer</text>
        </svg>
        
        
        </div>
     
    </div>
  );
 }
}

export default Digitalclock;
