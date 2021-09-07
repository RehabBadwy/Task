import React, { Component, } from "react";

import "./Check.css";
import Center from "../../Component/Center/Center"
import Table from "../../Component/table/Table"
import Side from "../../Component/Side/Side";

import Red from "../../Component/Center/Red"
import TableRed from "../../Component/table/TableRed"
import SideRed from "../../Component/Side/SideRed";

import Yellow from "../Center/Yellow";
import TableYellow from "../table/TableYellow";
import SideYellow from "../Side/SideYellow";
import Page from "../Pag/Page";

class Check extends Component {
  state = {
    query: {},
    move: false,
  };

  checkMove = () => {
    if (this.state.move == false ) {
      return (
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">تتبع شحنتك</h3>
            <span className="loginDesc">
              اكتب رقم الشحنة وتابع شحنتك خطوة بخطوة
            </span>
          </div>
          <div className="loginRight">
            <form className="loginBox">
              <input
                tupe="text"
                placeholder="رقم الشحنه"
                className="loginInput"
                onChange={(e) => this.setState({ query: e.target.value })}
              />

              <input
                onClick={() => this.msgeee()}
                className="loginRegisterButton"
                value="search "
              />
            </form>
          </div>
        </div>
      );
    } else if (this.state.move == true) {
      if (this.state.query === "10") {
        console.log(10);
        return(
          <>
          <Center />
          <Table />
         <Side />
          </>
        )
       
      } else if (this.state.query === "20") {
        console.log(20);
        return(
          <>
          <Red />
          <TableRed />
         <SideRed />
          </>
        )
      } else if (this.state.query === "30") {
        console.log(30);
        return(
          <>
          <Yellow />
          <TableYellow />
         <SideYellow />
          </>
        )
      } else {
        
        console.log(555);
        <Page />
      }
      return(
        <>
        <Center />
          <Table />
         <Side />
        </>
      )
    } 
  };

  msgeee = () => {
    this.setState({ move: true });
    {
      this.checkMove();
    }
  };

  /*submit = () => {
    console.log(this.state.query);
    
  }; */

  render() {
    return (
      <div id="topbar" className="login" dir="rtl">
        {this.checkMove()}
      </div>
    );
  }
}
export default Check;
