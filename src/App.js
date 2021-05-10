import React from 'react';
import cn from 'classnames'
import s from './App.modules.scss'
import st from './style.module.css'
 import "./index.css"
const App = ()=>{
    console.log(process.env.NODE_ENV, "st.text")
    console.log(st.cssmodule,s.appscss, "s text")
    return (
        <>
            <div className = {cn(s.appscss)}>
                Hi All
                
            </div>
            <div className = "indexstyle">
            CSS
            </div>
            <div className = {st.cssmodule}>
            CSS MODULE
            </div>
        </>    
    )
}
export default App;