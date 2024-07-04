import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setTheme } from '../redux/features/ThemeeSlice'

const ThemeComponent = () => {
const [color , setColor ] = useState("")
console.log(color)
   const dispacth =  useDispatch()

   const themeColor = ()=> {
    dispacth(setTheme(color))
    
    setColor("")
   }
    return (
        <div>
           <h3>ThemeComponent</h3> 
           <input type='text' placeholder='renk gir !' onChange={(e)=> setColor(e.target.value)}/>
           <button onClick={themeColor}>Renk Ekle</button>
        </div>
    )
}

export default ThemeComponent
