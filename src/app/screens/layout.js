import React from 'react'
import Header from "./header"
import Footer from "./footer"
const layout = ({children}) => {
  return (
    <>
   <Header/>
      {children}
      <Footer/>
    </>

  )
}

export default layout
