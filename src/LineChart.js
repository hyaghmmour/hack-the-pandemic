import React from 'react'
import Plot from 'react-plotly.js'
import './index.css'
import data from './data.json'
import Regions from './Regions'

class LineChart extends React.Component {


    constructor() {
        super();
        this.state = {
            data: data,
            regions: [],
            selected: <div>
                Click to get started
            </div>
        }
        this.changeSelected = this.changeSelected.bind(this)
    }

    changeSelected(reg) {
        //let region = value.target.value
        let found = this.state.data.regions.find(x => x.region === reg)
        
        this.setState({
            selected: <div className="plot">
                <h2>{reg}</h2>
                <br></br>
                <br></br>
                <br></br>
                <Plot className='diagram'
                    data={[
                        {
                            y: found.cases,
                            x: Array.from(Array(found.cases.length).keys()),
                            type: 'line',
                            marker: { color: 'blue' }
                        }
                    ]}
                    layout={{ width: 800, height: 500}}
                />
            </div>
        })
    }

    componentDidMount() {
        let options = this.state.data.regions.map((item) => {
            return item.region
        })
        this.setState({regions: options})
    }

    render() {

        return (
            <div className="object-wrapper">
                {/* <select className="regions" onChange={this.changeSelected}>{this.state.regions}</select> */}
                {this.state.selected}
                <Regions data={this.state.regions} editFunction={this.changeSelected}/>
          </div>
        );
      }
}
export default LineChart