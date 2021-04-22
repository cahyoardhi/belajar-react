import React from 'react'

class Timer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time: 0
        }
    }

    componentDidMount(){
        if(this.props.start !== undefined){
            this.setState({time: this.props.start})
        }

        this.timerID = setInterval(()=>this.tick(), 1000)
    }

    tick(){
        this.setState({time: this.state.time + 1})
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    render(){
        return(
            <>
            {this.state.time <= 5 && 
            <h1 style={{textAlign: "center"}}>
                {this.state.time}
            </h1>
            }

            {this.state.time > 5 &&
            <h1 style={{textAlign: "center"}}>TIMER SELESAI!</h1>
            }
            </>
        )
    }
}

export default Timer