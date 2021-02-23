import React, {useState} from 'react';
import './App.css';

import Digitalclock from './components/Digitalclock'
import Alarm from './components/alarm';
import Timer from './components/timer';

export const APPLContext = React.createContext({
  
 hr:'',
 min:'',
 ampm:'AM',
 alarmflag:'off',
 Timerhr:'',
 Timermin:'',
 Timerseconds:'0',
 Timerflag:'off',
 Timerinitcountdowntime:'0',
 
  Changehr: ()  => {},
  Changemin: ()  => {},
  ChangeAMPM: () => {},
  Changealarmflag: () => {},
  ChangeTimerhr: ()  => {},
  ChangeTimermin: ()  => {},
  ChangeTimerseconds: () => {},
  ChangeTimerflag: () => {},
  ChangeTimerinitcountdowntime: () => {},
});
//import { getByDisplayValue } from '@testing-library/react';


//main digital clock routine
function App() {
  const [hr, sethr] = useState('0')
  const [min, setmin] = useState('0')
  const [ampm, setampm] = useState('AM')
  const [alarmflag, setalarmflag] = useState('off')
  const [Timerhr, setTimerhr] = useState('0')
  const [Timermin, setTimermin] = useState('0')
  const [Timerseconds, setTimerseconds] = useState('0')
  const [Timerflag, setTimerflag] = useState('off')
  const [Timerinitcountdowntime, setTimerinitcountdowntime] = useState('0')

   return(
     
    <APPLContext.Provider value = {{
      hr,
      min,
      ampm,
      alarmflag,
      Timerhr,
      Timermin,
      Timerseconds,
      Timerflag,
      Timerinitcountdowntime,

      Changehr: hr => sethr(hr),
      Changemin: min => setmin(min),
      ChangeAMPM: ampm => setampm(ampm),
      Changealarmflag: alarmflag => setalarmflag(alarmflag),
      ChangeTimerhr: Timerhr => setTimerhr(Timerhr),
      ChangeTimermin: Timermin => setTimermin(Timermin),
      ChangeTimerseconds: Timerseconds => setTimerseconds(Timerseconds),
      ChangeTimerflag: Timerflag => setTimerflag(Timerflag),
      ChangeTimerinitcountdowntime: Timerinitcountdowntime => setTimerinitcountdowntime(Timerinitcountdowntime),
  
      }}>
          <div className="App">
        <Digitalclock />
        <Alarm />
        <Timer />
        
          </div>
     </APPLContext.Provider>
   )
 
 
 
}

export default App;
