import React from 'react'
import { useSelector } from 'react-redux'

const ProfileComponent = () => {

 const selector =  useSelector((state)=>state.loginReducer.value)
 
 const renk =  useSelector((state)=>state.themeReducer.value)
 console.log(renk , " profil komponemti")


 console.log("içinde ne var",selector)
 
  return (
    <div style={{color:renk}}>
      <h1>ProfileComponent</h1>
      <p>Name: {selector.name}</p>
      <p>SurName: {selector.surname}</p>
    </div>
  )
}

export default ProfileComponent
