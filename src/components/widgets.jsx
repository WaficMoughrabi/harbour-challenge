import React from 'react'

function Widget(props){
    return (
        <div style={{margin:props.margin,width:props.width,padding:props.padding ? props.padding : "20px 40px"   ,border:"1px solid #dadada",borderRadius:"0.25rem",backgroundColor:"white"}}>
            {props.children}
        </div>
    )
}
export default Widget;