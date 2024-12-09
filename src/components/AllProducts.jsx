import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { getProductApi, removeProductApi } from '../Services/allAPi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';


function AllProducts({addStatus}) {

  const [product,setProduct]=useState([])
  const [deleteStatus , setDeleteStatus] = useState({})

  const getallproducts = async()=>{
    const result = await getProductApi()
    setProduct(result.data)
  }
  console.log(product);
  

  useEffect(()=>{
    getallproducts()
  },[addStatus , deleteStatus])

  const handleDelete = async (id)=>{
    const result = await removeProductApi(id)
    console.log(result);

    if(result.status>=200 && result.status<300){
      setDeleteStatus(result)
    }
    
  }


  return (
    <>
      <h4 className='mt-5 text-center mb-5'>All Products</h4>

      {product?.length>0?
        <div>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Id</th>
          <th>Product Name</th>
          <th>Product category</th>
          <th>Product price</th>
          <th>stock quantity</th>
          <th>Product Description</th>
          <th>Action</th>
        </tr>
      </thead>
      {product?.map((item)=>(
        <tbody>
        <tr>
          <td>{item?.id}</td>
          <td>{item?.name}</td>
          <td>{item?.category}</td>
          <td>{item?.price}</td>
          <td>{item?.stockDetails}</td>
          <td>{item?.description}</td>
          <td><button onClick={()=>handleDelete(item?.id)} className='bg-danger text-white '><FontAwesomeIcon icon={faTrashCan} /></button></td>
        </tr>
        
      </tbody>
      ))
        }
    </Table>
      </div> 

        :

      <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <img src="https://cdn-icons-png.flaticon.com/512/11010/11010851.png" alt="No image" className='w-100 ' />
          <h5 className='text-center text-danger mt-4'>No Products Added Yet....</h5>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>}


      
    </>
  )
}

export default AllProducts