import React from 'react'
import AddPro from '../components/AddPro'
import AllProduct from '../components/AllProducts'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <div className='container d-flex justify-content-between mt-5'>
        <AddPro/>
        <Link to={'/ProductDetails'} style={{textDecoration:'none'}}><h5><span className='d-md-inline d-none text-primary'>Product Details</span> </h5></Link>
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