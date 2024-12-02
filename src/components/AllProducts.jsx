import React from 'react'
import Table from 'react-bootstrap/Table';

function AllProducts() {
  return (
    <>
      <h4 className='mt-5'>All Products</h4>

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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Good</td>
          <td>It is nice product</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Good</td>
          <td>It is nice product</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry the Bird</td>
          <td>Thornton</td>
          <td>@twitter</td>
          <td>Good</td>
          <td>It is nice product</td>
        </tr>
      </tbody>
    </Table>
      </div> 

      
    </>
  )
}

export default AllProducts