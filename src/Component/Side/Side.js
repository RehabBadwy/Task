import React, { Component } from "react";
import vector from "../../images/vector.jpg";
import "./Side.css";
import axios from "axios";

class Side extends Component {
  state = {
    works: [],
  };

  componentDidMount  ()  {
    axios.get("js/data.json").then((res) => {
      this.setState({works:  res.data });
      console.log(this.state.works.city) 
    });
  };


   workItem = () => {
    return (
      <div className="sidep" >
              <p className="text">{this.state.works.city} </p>
            </div>
          );
        
      }

   
  

  render() {
 
    return (
      <div className="side" dir="rtl">
        <h1>عنوان التسليم</h1>
        <div className="sidep">
            {this.workItem()}
          <div className="sideReport">
          <img className="vector" src={vector} />
            <p className="sidethere">هل يوجد مشكله في شحنتك</p>
            <br />
            <button className="myButton">ابلاغ عن مشكلتك</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Side;
