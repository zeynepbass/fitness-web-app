import React from 'react'
import Card from "../../components/Cards"
const index = ({posts,email}) => {

  return (
    <div className='flex flex-row'>
      
         <Card posts={posts} email={email}/>
    </div>

  )
}

export default index
