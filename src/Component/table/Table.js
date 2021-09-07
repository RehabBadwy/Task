import React, { Component } from "react";
import './Table.css'

class Table extends Component {
  render() {
    return (
        <div className="widgetLg" dir="rtl">
         <h1 className="details">تفاصيل الشحنه</h1>

        <table>
  <tr className="container">
    <th>الفرغ</th>
    <th>التاريخ</th>
    <th>الوقت</th>
    <th>التفاصيل</th>
  </tr>
  <tr>
    <td>مدينه نصر</td>
    <td>05/04/20</td>
    <td> 12:30pm  </td>
    <td>تم انشاء الشحنه</td>

  </tr>
  <tr>
    <td>مدينه نصر</td>
    <td>05/04/20</td>
    <td>12:30pm</td>
    <td>تم استلام الشحنه من التاجر</td>

  </tr>
  <tr>
    <td>مدينه نصر</td>
    <td>05/04/20</td>
    <td>12:30pm</td>
    <td>الشحنه خرجت للتسليم</td>

  </tr>
  <tr>
    <td>مدينه نصر</td>
    <td>05/04/20</td>
    <td>12:30pm</td>
    <td>تم التسليم </td>

  </tr>
</table>
      </div>
    );
  }
}
export default Table;
