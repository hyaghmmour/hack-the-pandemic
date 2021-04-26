import React from 'react'
import './index.css'

class Regions extends React.Component{
    constructor(props) {
        super()
        console.log(props)
        this.state = {
            data: props.data,
            components: [], 
            funct: props.editFunction
        }
        //this.renderButtons = this.renderButtons.bind(this)
    }

    componentDidMount() {
        let buttonComponents = this.state.data.map(item => {
            return <button className="region-button" onClick={() => this.state.funct(item)} key={item}>{item}</button>
        })
        console.log(buttonComponents)
        this.setState({components: buttonComponents})
    }

    render() {
        //this.renderButtons()
        console.log()
        return (
            <div className="region-wrapper">
                {this.state.components}
            </div>
        )
    }
}

export default Regions