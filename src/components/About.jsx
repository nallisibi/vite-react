import react from 'react'
import {useState} from 'react'

 function About(props) {
    const[name, SetName]=useState("")

    function clickevent(){
        SetName("click in Above function")
        console.log("click event Works..")
    }
    function inputChange(event){
        SetName(event.target.value)
    }

    return (
        <div>About:<br></br>
        <b>Name:{props.name}</b> <br></br>
        <b>Work:{props.work}</b> <br></br>
        <b>username:{name}</b>   <br></br>
        <input onChange={(event)=>inputChange(event)}/>
        <button onClick={()=>clickevent}>click</button>
        </div>
    )
 }

 export default About;