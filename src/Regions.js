import React from 'react'
import './index.css'

class Regions extends React.Component{
    constructor(props) {
        super()
        this.state = {
            data: props.data,
            funct: props.editFunction
        }
    }

    render() {
        console.log()
        let buttonComponents = this.state.data.map(item => {
            return <button className="region-button" onClick={() => this.state.funct(item)}>{item }</button>
        })
        return (
            <div className="region-wrapper">
                {buttonComponents}
            </div>
        )
    }
}

export default Regions