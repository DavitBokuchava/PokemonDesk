import React from 'react';
import s from './App.css'
import st from './style.module.css'
 import "./index.css"
const App = ()=>{
    console.log(process.env.NODE_ENV, "st.text")
    console.log(s.appcss, "s text")
    return (
        <>
            <div className = {st.texttwo}>
                Hi All
                
            </div>
            <div className = "indexcss">
            CSS
            </div>
            <div className = {s.appcss}>
            CSS MODULE
            </div>
        </>    
    )
}
export default App;