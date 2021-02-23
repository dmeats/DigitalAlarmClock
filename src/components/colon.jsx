import React from 'react'

const Colon = (props) => {
const {fillcolor,xval,yval,screenwidth} = props

const topcolon = () => {
    let newxvalue =  51.549609 + parseInt(xval)
    let newyvalue =  62.738259 + parseInt(yval)
    let top = "m "+newxvalue+","+newyvalue+" h 2.138156 l 0.03341,2.973374 -2.171565,-0.03341 z"
   
    return top
}


const bottomcolon = () => {
    if (screenwidth > 414){
    let newxvalue =  51.649836 + parseInt(xval)
    let newyvalue =  71.424519 + parseInt(yval)
    let bot = "m "+newxvalue+","+newyvalue+" h 2.138156 l 0.06682,3.374278 -2.138156,-0.03341 z"
     
     return bot
}
else{
    let newxvalue =  57.424609 + parseInt(xval)
    let newyvalue =  62.616047 + parseInt(yval)
    let bot = "m "+newxvalue+","+newyvalue+" h 2.147717 l 0.06712,3.06713 -2.147717,-0.03037 z"
   
     return bot
}

}

    return(
        <svg>
            <g fill={fillcolor}>
            <path d={topcolon()} />
            </g>
             <g fill={fillcolor}>
                <path d={bottomcolon()} />
            </g>
            
            
        </svg>

    )
}


export default Colon