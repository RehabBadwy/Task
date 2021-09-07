import React, { Component } from 'react'
import axios from 'axios';
class Page extends Component {

    state = {
        numbers: [],
    }

    componentDidMount  ()  {
       
        axios.get("js/data.json").then((res) => {
          this.setState({numbers:  res.data });
          console.log(this.state.numbers.message) 
        });
      };

      
    render () {
        
    return (  
        <div className="error">
            <h1 className="textError">404</h1>
            <p> 
          {this.state.numbers.message}
            </p>
        </div>
    )
    }
}

export default Page
