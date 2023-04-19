import { Component } from 'react';
import './style.css'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return <div className='navbar'>
            <h1 className='brand'><span>JS</span>riders</h1>
            <ul>
                <li>
                    <a href="">Home</a>
                </li>
                <li> <a href="">Course</a>
                </li>
                <li>
                    <a href="">About</a>

                </li>
                <li> <a href="">Signup</a></li>
            </ul>
        </div>
    }
}

export default Navbar;