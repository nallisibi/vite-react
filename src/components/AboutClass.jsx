import React, {Component} from 'react'

export class AboutClass extends Component {
    constructor(props) {
        super(props)

        this.state={
            name:this.props.name,
            work:this.props.work,
            count:0
        }
    }
    ClickEvent(){
        this.setState({
            name:"About class component",
            count:this.state.count+1
        })
        console.log("Click Event in class")
    }
    onMouseOver(){
        console.log("CLick Event in class")
    }
    inputChange(event){
        console.log(event)
    }

    render() {
        this.state.name="About class component"
        return(
            <div>AboutClass
                <br></br>

                <b>Name:{this.state.name}</b> <br></br>
                <b>Work:{this.state.work}</b> <br></br>
                <b>Count:{this.state.Count}</b> <br></br>
                <b>Username:{this.state.username}</b> <br></br>

                <input onChange={(event)=>this.inputChange(event)}/>
                <button onClick={()=>this.ClickEvent()}
                onMouseOver={()=>this.mouseOverEvent}>
                    Click
                </button>
            </div>
        )
    }
}

export default AboutClass