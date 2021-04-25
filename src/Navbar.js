import React from 'react'
import './index.css'


class Navbar extends React.Component {

    render() {
        return <nav className="top-nav">
            <div>
                <a href="#">HTML</a>
                <a href="#">CSS</a>
                <a href="#">JavaScript</a>
                <a href="#">Python</a>
            </div>
        </nav>
    }
}

export default Navbar