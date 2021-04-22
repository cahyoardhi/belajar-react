import React from 'react'

class TimerBaru extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            time:100,
            clock: new Date()
        }
    }
    
    componentDidMount(){
        if(this.props.start !== undefined){
            this.setState({time: this.props.start})
        }

        this.timerID = setInterval(() => this.setState({time: this.state.time - 1}), 1000)

        this.clockID = setInterval(() => this.setState({clock: new Date()}), 1000)

    }

    componentWillUnmount(){
        clearInterval(this.timerID)
        clearInterval(this.clockID)
    }

    render(){
        return(
            <>
            {this.state.time > 0 && (
            
            <div>
            <h1 style={{float: "left"}}>
                sekarang jam: {this.state.clock.toLocaleTimeString()}
            </h1>            

            <h1 style={{float: "right"}}>
                hitung mundur: {this.state.time}
            </h1>            
            </div>
            )
            }

            {this.state.time <= 0 && 
            
            <div>
                <h1 style={{textAlign: "center"}}>TIMER SELESAI!</h1>       
            </div>
            }
            </>
        )
    }
}

export default TimerBaru