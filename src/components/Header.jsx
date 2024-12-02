import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand >
          <Link to={'/'} style={{textDecoration:'none'}}><h4 className='text-primary'><img src="https://w7.pngwing.com/pngs/202/343/png-transparent-blue-and-black-computer-inventory-management-software-warehouse-management-system-warehouse-miscellaneous-company-text.png" alt="No Image" style={{width:"30px",height:"30px",marginRight:"50px"}} />Product Inventory System</h4></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header