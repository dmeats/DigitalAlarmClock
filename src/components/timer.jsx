import React,{useState,useRef,useEffect} from 'react';

import Sound from './Sound.js'
import alarmsound from './../Sounds/alarmsound.mp3'

import './../App.css'

const Timer = (props) => {
   // const closebuttonstyle = useRef('staticclosebtn');
   // const countdowntime = useRef('');
   // const timersec = useRef('');
    const timermin = useRef(0);
    const timerhr = useRef(0);
    const doonceflag = useRef(true)
    const [startstopflag, setstartstopflag] = useState(true);
    const [count, setcount] = useState()
    const [mincountdown, setmincountdown] = useState()
    const [hrcountdown, sethrcountdown] = useState()
    const [seccountdown, setseccountdown] = useState()
    const [soundonoff, setsoundonoff] = useState(false)
    const isPlaying = useRef(false);
    //const audioRef1 = useRef(new Audio(alarmsound));
    const [audioRef1] = useState(new Audio(alarmsound));

    let  [,setState]=useState();

    const openTimer = ()  => {
        
        setState({});
        document.getElementById("Timerboxcontainer").style.width= "340px";
        document.getElementById("Timerboxcontainer").style.height= "360px";
        
      }
      
    const  closeTimer = () => {
        
        setState({});
        document.getElementById("Timerboxcontainer").style.width = "0px";
        document.getElementById("Timerboxcontainer").style.height= "0px";
      }

    const IncreaseThrbutton = () =>{
        
        
        if (hrcountdown <=11 ){
       
        sethrcountdown(hrcountdown=>hrcountdown+1) 
       
        
        }else{
            sethrcountdown(0)
        }
        
    }

    
    const decreaseThrbutton = () =>{
        
        if (hrcountdown > 0 ){
            sethrcountdown(hrcountdown=>hrcountdown-1)
         
        
        }else{
            sethrcountdown(12)
        }
    }

    const IncreaseTminbutton = () =>{
        
        
        if (mincountdown <=58 ){
            setmincountdown(mincountdown=>mincountdown+1)
        
        } else{
            setmincountdown(0)
        }
        
    }

    const decreaseTminbutton = () =>{
        
       
        if (mincountdown > 0 ){
            setmincountdown(mincountdown=>mincountdown-1)
       
        
        }else{
            setmincountdown(59)
        }
    }

    const start = () =>{  
        setstartstopflag(true)
        setsoundonoff(false)
        setmincountdown(mincountdown)
        let x=0
        x=seccountdown+(mincountdown*60)+(hrcountdown*60*60)

        console.log(x)
        console.log('start min = '+mincountdown)
        setcount(x)
        
        
    }

    const stop = () =>{  
          
        
        setstartstopflag(false)
        let x=0
        x=seccountdown+(mincountdown*60)+(hrcountdown*60*60)

        console.log( 'count seccount=:' + x)
        setcount(x)
        setsoundonoff(false)
        isPlaying.current = false
    audioRef1.pause()
    document.getElementById('beep').muted = true
    document.getElementById('beep').pause();
    }
    
    const Reset = () =>{  
          
        
        setstartstopflag(false)
        setmincountdown(mincountdown => mincountdown = 0)
        sethrcountdown(hrcountdown => hrcountdown = 0)
        setseccountdown(seccountdown => seccountdown = 0)
        let x=0
        x=seccountdown+(mincountdown*60)+(hrcountdown*60*60)

       console.log( 'reset count=:' + x)
        setcount(x)
        setsoundonoff(false)
        isPlaying.current = false
    audioRef1.pause()
    document.getElementById('beep').muted = true
    document.getElementById('beep').pause();  
    }

    const playalarmsound = () =>{
        
        
        if(isPlaying.current === true ){
            if(!audioRef1.isPlaying)
            {
                
                //audioRef1.play()
                document.getElementById('beep').muted = false
                document.getElementById('beep').play();
            }
          
        }
        else{
            isPlaying.current = false
            audioRef1.pause()
            console.log('in here soundonoff = ' + soundonoff)
        }
    }
  
    //main loop for counting down the timer
    useEffect(
        ()=>{
           
            let intervaltimerId
            

           // init all varaibles to 0
           if(doonceflag.current){
            const x = 0
            
             const sc = x%60
             const totalmin = Math.floor(x/60)
             timerhr.current = Math.floor(x/3600)
            setcount(x)
            setseccountdown(sc)
            setmincountdown(timermin.current)
            sethrcountdown(timerhr.current)
            doonceflag.current=false
           }
           
            if (count > 0 && startstopflag){
                intervaltimerId=setInterval(() => {
                    
                    
                   const x = count - 1
                  // console.log('inside interval =' +x)
                   const sc = x%60
                   const totalmin = Math.floor(x/60)
                   timerhr.current = Math.floor(x/3600) 

                   //formats min box based on total mins on edge cases example 1:01 .. 1:00
                   if(totalmin > 0 ){
                       console.log('totalmins inside interval and greater then 0 = '+totalmin)
                       if (totalmin > 60){
                       const divmin = (totalmin % 60)
                       //console.log(divmin)
                       console.log('totalmins inside interval and greater then 60 = '+totalmin)
                       timermin.current = divmin
                       
                            }else{
                               
                                if ((totalmin % 60)===0){
                                    timermin.current = 0
                                    console.log('totalmins inside interval and less then 60 {}P{P}P= '+(totalmin % 60))
                                    //timermin.current = totalmin
                                }else{
                                    console.log('totalmins inside interval and less then 60 = '+totalmin)
                                   
                                timermin.current = totalmin//(totalmin % 60)
                                timerhr.current = 0
                               
                            }

                            }
                   }
                   
                   if (x <= 59 ){
                    timermin.current = 0
                    
                }
                if (x===0){
                    console.log(isPlaying.current)
                    setsoundonoff(true)
                    isPlaying.current = true
                    console.log(isPlaying.current)
                    playalarmsound()
                }

               
             
                   if(x >= 0){
                   setcount(x)
                   setseccountdown(sc)
                   setmincountdown(timermin.current)
                   sethrcountdown(timerhr.current)
                   }
                }, 1000);  
            } 
            return ()=>clearInterval(intervaltimerId)
           
        },[count,mincountdown,hrcountdown,seccountdown,startstopflag,soundonoff])

        useEffect(() => {
            window.addEventListener('touchstart', () => {
              document.getElementById('beep').muted = true
              document.getElementById('beep').play()
            })
          }) 
    

        //play alarm for timer
      //  useEffect(() => {
      //      const interval2 = setInterval(() => {
       //         if (soundonoff){
      //              playalarmsound() 
       //         }
       //     }, 1000);
       //     return () => clearInterval(interval2);
       //   }, [soundonoff]);  
     //    
    
      
    return(
        <div >
            <audio id="beep" src={alarmsound} />
             <div id='Timerboxcontainer'  className='Timerboxdetail' >
                <div className='Closebutton'onClick={() => closeTimer()}>
                    X
                </div>
                <div>
                    <div className='incrementhrbutton' value={hrcountdown} onClick={() => IncreaseThrbutton()} >+</div>
                    <div className='hour'>h {hrcountdown}</div>
                    <div className='decrementhrbutton' onClick={() => decreaseThrbutton()}>-</div>
                   
                    <div className='incrementminbutton' value={mincountdown} onClick={() => IncreaseTminbutton()}>+</div>
                    <div className='min'>m {mincountdown}</div>
                    <div className='decrementminbutton' onClick={() => decreaseTminbutton()}>-</div>
                    
                    <div className='timerseconds'>s {seccountdown}</div>
                    <div className='starttimerbutton' value={mincountdown} onClick={() => start()}>Start</div>
                    <div className='stoptimerbutton' onClick={() => stop()}>Stop</div>
                    <div className='resettimerbutton' onClick={() => Reset()}>Reset</div>
                   
                </div>
            </div>
            <div className='Timerbutton' onClick={() => openTimer()}  ></div>

       
        </div>
        
    )
}


export default Timer