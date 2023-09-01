import React, {Component} from 'react';

export class LifeCycleComponent extends Component {
    constructor(props) {
        super(props);

        this.state={
            name:""
        };
    }

    static getDerivedStateFromProps(props,state){
        console.log("state is updated with props");
        return {
            name: props.name
        };
    }

    shouldComponentUpdate() {
        console.log("Complete shoud update");
        return true;
    }

    componentDidMount() {
        console.log("complete mount");
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("previous state and props");
        console.log(prevProps,prevState);
    }

    componentDidUpdate(){
        console.log("component did update");
    }

    ClickEvent=()=>{
        console.log("click event");
        this.setState({
            name:"Update Lifecycle"
        });
    }

    render() {
        console.log("render is updated");
        return (
            <>
            <div>{this.state.name}</div>
            <button onClick={this.ClickEvent}>update</button>
            </>
        );
    }
}

export default LifeCycleComponent;