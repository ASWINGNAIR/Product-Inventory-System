import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function AddPro() {
  const [show, setShow] = useState(false);

  const[proDetails,setProDetails] = useState({
    name:"",
    category:"",
    price:"",
    stockDetails:"",
    description:""
  })
 console.log(proDetails);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 

 



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
                    <input type="text"  placeholder='Product Name' className='form-control' />
                </div>
                <div className="mb-3">
                    <input type="text"  placeholder='Product Category' className='form-control' />
                </div>
                <div className="mb-3">
                    <input type="text"  placeholder='Product Price' className='form-control' />
                </div>
                <div className="mb-3">
                    <input type="text"  placeholder='Stock Quantity' className='form-control' />
                </div>
                <div className="mb-3">
                    <input type="text"  placeholder='Product Description' className='form-control' />
                </div>
            </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
   )        
}

export default AddPro