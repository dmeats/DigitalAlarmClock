import React from 'react'

const Day = (props) => {
const {dayval,fillcolor,screenwidth} = props



    const monrect = () =>{
        if(screenwidth > 414){
        const val = <rect x="0" y="31" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.6' />
         return val
        }
        else{
            const val = <rect x="9.5" y="5" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.6' />
         return val
        }
    }
    const monrectselected = () =>{
        if(screenwidth > 414){
        const val = <rect x="0" y="31" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.6'/>
        return val
        }
        else{
            const val = <rect x="9.5" y="5" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.6' />
         return val 
        }
    }
    const montext = () =>{
        if(screenwidth > 414){
        const val = <text x="1.5" y="37.5" font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor} >Mon</text>
        return val
        }
        else{
            const val = <text x="11.5" y="12" font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor} >Mon</text>
         return val
        }
    }
    const montextselected = () =>{
        if(screenwidth > 414){
        const val = <text x="1.5" y="37.5" font-family="Arial" font-weight="bold" font-size='5' fill='white'>Mon</text>
        return val
        }
        else{
            const val = <text x="11.5" y="12" font-family="Arial" font-weight="bold" font-size='5' fill='white'>Mon</text>
            return val
        }
    }
    const tuerect = () =>{
        if(screenwidth > 414){
        const val = <rect x="17" y="31" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val = <rect x="9.5" y="19" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
            return val
        }
    }
    const tuetext = () =>{
        if(screenwidth > 414){
        const val = <text x="20" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Tue</text>
        return val
        }
        else{
            const val = <text x="11.5" y="25" font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Tue</text>
        return val
        }
    }
    const tuerectselected = () =>{
        if(screenwidth > 414){
        const val = <rect x="17" y="31" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val = <rect x="9.5" y="19" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
            return val
        }
    }
    const tuetextselected = () =>{
        if(screenwidth > 414){
        const val = <text x="20" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill='white'>Tue</text>
        return val
        }
        else{
            const val = <text x="11.5" y="25"font-family="Arial" font-weight="bold" font-size='5' fill='white'>Tue</text>
        return val
        }
    }
    const wedrect = () =>{
        if(screenwidth > 414){
        const val = <rect x="34" y="31" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val = <rect x="9.5" y="33" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
            return val
        }
    }
    const wedrectselected = () =>{
        if(screenwidth > 414){
        const val =  <rect x="34" y="31" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val =  <rect x="9.5" y="33" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
            return val
        }
    }

    const wedtext = () =>{
        if(screenwidth > 414){
        const val = <text x="36.2" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Wed</text>
        return val
        }
        else{
            const val = <text x="11.5" y="39" font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Wed</text>
            return val
        }
    }
    const wedtextselected = () =>{
        if(screenwidth > 414){
        const val = <text x="36.2" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill='white'>Wed</text>
        return val
        }
        else{
            const val = <text x="11.5" y="39" font-family="Arial" font-weight="bold" font-size='5' fill='white'>Wed</text>
        return val
        }
    }
    const thurect = () =>{
        if(screenwidth > 414){
        const val = <rect x="52" y="31" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val = <rect x="9.5" y="47" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val 
        }
    }
    const thurectselected = () =>{
        if(screenwidth > 414){
        const val = <rect x="52" y="31" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val = <rect x="9.5" y="47" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
            return val 
        }
    }
    const thutext = () =>{
        if(screenwidth > 414){
        const val = <text x="54.5" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Thu</text>
        return val
        }
        {
            const val = <text x="11.5" y="54" font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Thu</text>
        return val
        }
    }
    const thutextselected = () =>{
        if(screenwidth > 414){
        const val = <text x="54.5" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill='white'>Thu</text>
        return val
        }
        else{
            const val = <text x="11.5" y="54" font-family="Arial" font-weight="bold" font-size='5' fill='white'>Thu</text>
            return val
        }
    }
    const frirect = () =>{
        if(screenwidth > 414){
        const val =  <rect x="70" y="31" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val =  <rect x="9.5" y="61" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
            return val
        }
    }
    const frirectselected = () =>{
        if(screenwidth > 414){
        const val =  <rect x="70" y="31" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val =  <rect x="9.5" y="61" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
    }
    const fritext = () =>{
        if(screenwidth > 414){
        const val =  <text x="73.5" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Fri</text>
        return val
        }
        else{
            const val =  <text x="12.5" y="68" font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Fri</text>
        return val
        }
    }
    const fritextselected = () =>{
        if(screenwidth > 414){
        const val =  <text x="73.5" y="37.5" font-family="Arial" font-weight="bold" font-size='5' fill='white'>Fri</text>
        return val
        }
        else{
            const val =  <text x="12.5" y="68" font-family="Arial" font-weight="bold" font-size='5' fill='white'>Fri</text>
        return val
        }
    }
    const satrect = () =>{
        if(screenwidth > 414){
        const val =  <rect x="88" y="31" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.5' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val =  <rect x="9.5" y="75" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.5' stroke='blue' opacity='0.5'/>
            return val
        }
    }
    const satrectselected = () =>{
        if(screenwidth > 414){
        const val =  <rect x="88" y="31" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.5' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val =  <rect x="9.5" y="75" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.5' stroke='blue' opacity='0.5'/>
        return val
        }
    }
    const sattext = () =>{
        if(screenwidth > 414){
        const val =  <text x="91" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Sat</text>
        return val
        }
        else{
            const val =  <text x="12.5" y="81"font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Sat</text>
            return val
        }
    }
    const sattextselected = () =>{
        if(screenwidth > 414){
        const val =  <text x="91" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill='white'>Sat</text>
        return val
        }
        else{
            const val =  <text x="12.5" y="81"font-family="Arial" font-weight="bold" font-size='5' fill='white'>Sat</text>
            return val
        }
    }
    const sunrect = () =>{
        if(screenwidth > 414){
        const val =  <rect x="106" y="31" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val =  <rect x="9.5" y="89" rx="2" ry="2" width="14" height="10" fill='rgb(20, 20, 22)'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
    }
    const sunrectselected = () =>{
        if(screenwidth > 414){
        const val =  <rect x="106" y="31" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
        return val
        }
        else{
            const val =  <rect x="9.5" y="89" rx="2" ry="2" width="14" height="10" fill='blue'  stroke-width='.8' stroke='blue' opacity='0.5'/>
            return val
        }
    }
    const suntext = () =>{
        if(screenwidth > 414){
        const val =  <text x="108" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Sun</text>
        return val
        }
        else{
            const val =  <text x="12.5" y="96"font-family="Arial" font-weight="bold" font-size='5' fill={fillcolor}>Sun</text>
            return val
        }
    }
    const suntextselected = () =>{
        if(screenwidth > 414){
        const val =  <text x="108" y="37.5"font-family="Arial" font-weight="bold" font-size='5' fill='white'>Sun</text>
        return val
    }
    else{
        const val =  <text x="12.5" y="96"font-family="Arial" font-weight="bold" font-size='5' fill='white'>Sun</text>
        return val
    }
    }

if(dayval==='0'){
    return(
        <svg>
             {monrect()}
             {montext()}
             {tuerect()}
             {tuetext()}
            
             {wedrect()}
             {wedtext()}
             {thurect()}
             {thutext()}
             {frirect()}
             {fritext()}
             {satrect()}
             {sattext()}
             {sunrectselected()}
             {suntextselected()}
        </svg>

    )
}

if(dayval==='1'){
    return(
        <svg>
             {monrectselected()}
             {montextselected()}
             {tuerect()}
             {tuetext()}
            
             {wedrect()}
             {wedtext()}
             {thurect()}
             {thutext()}
             {frirect()}
             {fritext()}
             {satrect()}
             {sattext()}
             {sunrect()}
             {suntext()}
              
              
        </svg>

    )
}

if(dayval==='2'){
    return(
        <svg>
             {monrect()}
             {montext()}
             {tuerectselected()}
             {tuetextselected()}
            
             {wedrect()}
             {wedtext()}
             {thurect()}
             {thutext()}
             {frirect()}
             {fritext()}
             {satrect()}
             {sattext()}
             {sunrect()}
             {suntext()}
        </svg>

    )
}

if(dayval==='3'){
    return(
        <svg>
             {monrect()}
             {montext()}
             {tuerect()}
             {tuetext()}
            
             {wedrectselected()}
             {wedtextselected()}
             {thurect()}
             {thutext()}
             {frirect()}
             {fritext()}
             {satrect()}
             {sattext()}
             {sunrect()}
             {suntext()}
        </svg>

    )
}

if(dayval==='4'){
    return(
        <svg>
             {monrect()}
             {montext()}
             {tuerect()}
             {tuetext()}
            
             {wedrect()}
             {wedtext()}
             {thurectselected()}
             {thutextselected()}
             {frirect()}
             {fritext()}
             {satrect()}
             {sattext()}
             {sunrect()}
             {suntext()}
        </svg>

    )
}

if(dayval==='5'){
    return(
        <svg>
             {monrect()}
             {montext()}
             {tuerect()}
             {tuetext()}
            
             {wedrect()}
             {wedtext()}
             {thurect()}
             {thutext()}
             {frirectselected()}
             {fritextselected()}
             {satrect()}
             {sattext()}
             {sunrect()}
             {suntext()}
        </svg>

    )
}

if(dayval==='6'){
    return(
        <svg>
             {monrect()}
             {montext()}
             {tuerect()}
             {tuetext()}
            
             {wedrect()}
             {wedtext()}
             {thurect()}
             {thutext()}
             {frirect()}
             {fritext()}
             {satrectselected()}
             {sattextselected()}
             {sunrect()}
             {suntext()}
        </svg>

    )
}

}


export default Day