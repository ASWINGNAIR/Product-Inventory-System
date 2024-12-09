import React, { useState } from 'react'
import AddPro from '../components/AddPro'
import AllProduct from '../components/AllProducts'


function Home() {

  const [addStatus , setAddStatus] = useState({})

  return (
    <>
      <div className='container d-flex justify-content-between mt-5'>
        <AddPro setAddStatus={setAddStatus} />
      </div>


       <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-12">
            <AllProduct addStatus={addStatus} />
          </div>
        </div>
       </div>
    </>
  )
}

export default Home