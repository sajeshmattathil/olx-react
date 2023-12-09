import React,{useContext} from 'react'
import {AppContext} from '../AppContext'


function Three() {
    const {data} = useContext(AppContext)
    console.log(data)
  return (
    <div>
    <div style={{backgroundColor:'red'}} >{'Three'+ data}</div>
   
 </div>
  )
}

export default Three