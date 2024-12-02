import React from 'react'
import AddPro from '../components/AddPro'
import AllProduct from '../components/AllProducts'


function Home() {
  return (
    <>
      <div className='container d-flex justify-content-between mt-5'>
        <AddPro/>
      </div>


       <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-12">
            <AllProduct />
          </div>
        </div>
       </div>
    </>
  )
}

export default Home