import React from 'react'

const DigitalCharacter = (props) => {
const {num,fillcolor,xval,yval} = props

const A = () => {
    let newxvalue =  40.390016 + parseInt(xval)
    let newyvalue =  59.459979 + parseInt(yval)
    let a = "m "+newxvalue+","+newyvalue+" -0.950854,0.510244 1.622048,1.275609 4.698347,0.08505 2.013579,-1.658292 -0.61526,-0.212602 z"
   return a
}
const B = () => {
    let newxvalue =  47.813989 + parseInt(xval)
    let newyvalue =  60.339657 + parseInt(yval)
    let b = "m "+newxvalue+","+newyvalue+" -1.370166,1.181174 -0.566963,6.047621 1.181174,0.992188 0.803201,-0.803201 0.566963,-6.614584 z"
    return b
}
const C = () => {
    let newxvalue =  47.466455 + parseInt(xval)
    let newyvalue =  69.76097 + parseInt(yval)
    let c = "m "+newxvalue+","+newyvalue+" -0.451068,6.991137 -0.451066,0.714423 -1.443415,-1.581937 0.405962,-5.460231 1.533627,-1.224725 z"
    
    return c
}
const D = () => {
    let newxvalue =  44.668521 + parseInt(xval)
    let newyvalue =  76.539365 + parseInt(yval)
    let d = "m "+newxvalue+","+newyvalue+" -5.339724,0.08355 -1.816609,1.253299 0.660585,0.375989 6.99119,-0.04178 0.935826,-0.501318 z"
    
    return d
}
const E = () => {
    let newxvalue =  38.411829 + parseInt(xval)
    let newyvalue =  69.066138 + parseInt(yval)
    let e = "m "+newxvalue+","+newyvalue+" -0.708704,1.023006 -0.614212,6.291487 0.377976,0.920707 1.417412,-1.227607 0.472469,-5.984587 z"
    return e
}
const F = () => {
    let newxvalue =  39.167781 + parseInt(xval)
    let newyvalue =  60.386904 + parseInt(yval)
    let f = "m "+newxvalue+","+newyvalue+" -0.708705,0.850445 -0.566962,6.52009 0.708705,0.708705 1.133927,-0.708705 0.519719,-6.236608 z"
    
    return f
}
const G = () => {
    let newxvalue =  39.106562 + parseInt(xval)
    let newyvalue =  68.844501 + parseInt(yval)
    let g = "m "+newxvalue+","+newyvalue+" 1.508511,-0.890366 4.916625,0.04687 0.949803,0.749783 -1.508511,1.077814 h -4.693141 z"
    

    return g
}
const H = () => {
    let newxvalue =  42.673227 + parseInt(xval)
    let newyvalue =  61.924095 + parseInt(yval)
    let h = "m "+newxvalue+","+newyvalue+" h 1.06937 l -0.260117,4.555812 -0.404626,0.683372 -0.491331,-0.813539 z"
     

    return h
}

if(num==='0'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            <g fill={fillcolor}>
                <path d={D()}/>
            </g>
            <g fill={fillcolor}>
                <path d={E()}/>
            </g>
            <g fill={fillcolor}>
                <path d={F()}/>
            </g>
           
        </svg>

    )
}

if(num==='1'){
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={B()}/>

             </g>
             <g fill={fillcolor}>
                <path d={C()}/>
            </g>
        </svg>

    )
}
if(num==='2'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
            <g fill={fillcolor}>
                <path d={E()}/>
            </g>
            <g fill={fillcolor}>
                <path d={D()}/>
            </g>
        </svg>

    )
}
if(num==='3'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            <g fill={fillcolor}>
                <path d={D()}/>
            </g>
        </svg>

    )
}
if(num==='4'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={F()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            
        </svg>

    )
}
if(num==='5'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={F()}/>
            </g>
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            <g fill={fillcolor}>
                <path d={D()}/>
            </g>
            
        </svg>

    )
}
if(num==='6'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={F()}/>
            </g>
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            <g fill={fillcolor}>
                <path d={D()}/>
            </g>
            <g fill={fillcolor}>
                <path d={E()}/>
            </g>
            
        </svg>

    )
}
if(num==='7'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
           
            
            
        </svg>

    )
}
if(num==='8'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            <g fill={fillcolor}>
                <path d={D()}/>
            </g>
            <g fill={fillcolor}>
                <path d={E()}/>
            </g>
            <g fill={fillcolor}>
                <path d={F()}/>
            </g>
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
        </svg>

    )
}
if(num==='9'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            <g fill={fillcolor}>
                <path d={D()}/>
            </g>
            <g fill={fillcolor}>
                <path d={F()}/>
            </g>
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
        </svg>

    )
}

if(num==='M'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            <g fill={fillcolor}>
                <path d={H()}/>
            </g>
            <g fill={fillcolor}>
                <path d={F()}/>
            </g>
            <g fill={fillcolor}>
                <path d={E()}/>
            </g>
        </svg>

    )
}

if(num==='A'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            
            <g fill={fillcolor}>
                <path d={C()}/>
            </g>
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
            <g fill={fillcolor}>
                <path d={F()}/>
            </g>
            <g fill={fillcolor}>
                <path d={E()}/>
            </g>
        </svg>

    )
}

if(num==='P'){
     
    
    return(
        <svg>
            <g fill={fillcolor}>
            <path d={A()}/>
            </g>
             <g fill={fillcolor}>
                <path d={B()}/>
            </g>
            
           
            <g fill={fillcolor}>
                <path d={G()}/>
            </g>
            <g fill={fillcolor}>
                <path d={F()}/>
            </g>
            <g fill={fillcolor}>
                <path d={E()}/>
            </g>
        </svg>

    )
}

}
export default DigitalCharacter