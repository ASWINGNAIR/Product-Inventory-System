import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addProductApi } from '../Services/allAPi';


function AddPro({setAddStatus}) {
  const [show, setShow] = useState(false);

  const[proDetails,setProDetails] = useState({
    name:"",
    category:"",
    price:"",
    stockDetails:"",
    description:""
  })
 console.log(proDetails);

 const handleClose = () => {setShow(false);
  handleCancel()
 }
 const handleShow = () => setShow(true);
 

 
 const handleCancel = () => [
  setProDetails({
    name:"",
    category:"",
    price:"",
    stockDetails:"",
    description:""
  })
 ]



 const handleAdd = async() => {
  const {name,category,price,stockDetails,description}=proDetails

  if(!name || !category || !price || !stockDetails || !description){
    alert('Please enter the form completely')
  }
  else{
    const result = await addProductApi({name,category,price,stockDetails,description})
    console.log(result);
    if(result.status>=200 && result.status<300){
      alert('product added successfully')
      handleClose()
      setAddStatus(result)
    }
    else{
      alert('something went wrong')
      handleCancel()
    }
  }
}
 



  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add Products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload Your Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Please fill the following details</p>
            <form className='border border-secondsry p-3 rounded'>
                <div className="mb-3">
                    <input type="text"  placeholder='Product Name' className='form-control' value={proDetails.name} onChange={(e)=>setProDetails({...proDetails,name:e.target.value})} />
                </div>
                <div className="mb-3">
                    <input type="text"  placeholder='Product Category' className='form-control' value={proDetails.category} onChange={(e)=>setProDetails({...proDetails,category:e.target.value})} />
                </div>
                <div className="mb-3">
                    <input type="text"  placeholder='Product Price' className='form-control' value={proDetails.price} onChange={(e)=>setProDetails({...proDetails,price:e.target.value})} />
                </div>
                <div className="mb-3">
                    <input type="text"  placeholder='Stock Quantity' className='form-control' value={proDetails.stockDetails} onChange={(e)=>setProDetails({...proDetails,stockDetails:e.target.value})} />
                </div>
                <div className="mb-3">
                    <input type="text"  placeholder='Product Description' className='form-control' value={proDetails.description} onChange={(e)=>setProDetails({...proDetails,description:e.target.value})} />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleAdd} >
            upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
   )        
}

export default AddPro