import React from 'react'

import '../App.css'

class NavigationBar extends React.Component {
    render() {
        let backgroundColor = {
            backgroundColor: '#2F2D46'
        }
        const element = (
            <div className="container-fluid fixed-top shadow-sm p-3" style={ backgroundColor }>
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="https://www.google.com">Nav Item #1</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active text-white" href="https://www.gmail.com">Nav Item #2</a>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-danger">Nav Button #1</button>
                    </li>
                    <li className="nav-item">
                        <button className="btn btn-danger ml-2">Nav Button #2</button>
                    </li>
                </ul>
            </div>
        )
        return element
    }
}

export default NavigationBar
