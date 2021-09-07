import React, { Component } from "react";
import './Red.css'
import axios from "axios";

class Red extends Component {

  state = {
    works: [],
  };

  componentDidMount  ()  {
    axios.get("js/data.json").then((res) => {
      this.setState({works:  res.data });
      console.log(this.state.works.name1) 
    });
  };


   workItem = () => {
      
          return (
            <tr>
              <td className="list"> {this.state.works.name1} </td>
            </tr>
          );
     
      }
  


  render() {
    return (
      <div className="center" dir="rtl">
      <table className="centertable">
        <tr className="centercontainer">
          <th className="list light">رقم الشحنه 6636234</th>
          <th className="list light">اخر التحديث</th>
          <th className="list light">اسم التاجر</th>
          <th className="list light">موعد التسليم حلال</th>
        </tr>
        <tr>
          <td className="list yellow">لم يتم تسليم الشحنه</td>
          <td className="list"> الاربعاءat 5:30pm 06/04/2020</td>
            {this.workItem()} 
          <td className="list">5 يناير </td>
        </tr>

        
      </table>

      <div className="containerLine">
        <div className="line">
          
          <div className="circle">
          <i class="fas fa-check-circle"></i>
             </div>
          <div className="circle1"> 
          <i class="fas fa-check-circle second"></i>
          </div>
          <div className="circle2"> 
          <i class="fas fa-truck third" ></i>
          </div>
          <div className="circle3"> 
          <i class="fas fa-sim-card four"></i>    
                  </div>
        </div>

        <table className="centerlist">
        <tr className="centercontainer">
          <th className="listitem">تم انشاء الشحنه</th>
          <th className="listitem">تم استلام الشحنه من التاجر</th>
          <th className="listitem">الشحنه خرجت للتسليم</th>
          <th className="listitem done">تم التسليم</th>
        </tr>
        </table>
      </div>
     
    </div>
  );
  }
}
export default Red;