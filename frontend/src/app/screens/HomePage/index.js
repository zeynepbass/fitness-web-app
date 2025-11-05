import React from 'react'
import Card from "../../components/Cards"
const index = ({posts,email,setCurrent}) => {

  return (
    <div className='flex flex-row'>
      
         <Card posts={posts} email={email} setCurrent={setCurrent}/>
    </div>

  )
}

export default index
