import { Component } from 'react';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseDetailes : [],
      page : "/"
    }
  }
  componentDidMount() {
    if(! localStorage.getItem('user')) {
      this.setState({
        page : "/signup"
      })
    }
    fetch("http://127.0.0.8:5050/course",{
    })
    .then( res => res.json())
    .then((data) => {
      this.setState({
        courseDetailes : data
      })
    })
    .catch(console.log)
  }
  render() {
    const { courseDetailes,page } = this.state;
    return <div> 
        <Navbar/>
        {
          page === '/' && <h1>Home Page</h1>
        }
      {
        page === "/signup" && <Signup/> 
      }
    </div>
  }
}


export default App;