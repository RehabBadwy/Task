import React from "react";

import './Header.css'

function Header () {

  
   
    
        return(
            <div className="top" dir="rtl">
            <div className="topLeft">
           <img src="https://bosta.co/wp-content/uploads/2019/08/Component.svg" />
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topItem">
                    الرئيسيه
                    </li>
                    <li className="topItem">
                   الاسعار
                    </li>
                    <li className="topItem">
                    كلم المبيعات
                    </li>
                    
                    
                   
                </ul>
            </div>


            <div className="topRight left" >
           
                  
               
                 <ul className="topList right">
                <li  className="topItem" >
                     تتبع شحنتك 
                     
                </li>

                <li className="topItem">
                    تسجيل الدخول
                    </li>
                </ul>
            
               <h1 className="eng">ENG</h1>
            </div>
            
        </div>
        )
   
}
export default Header