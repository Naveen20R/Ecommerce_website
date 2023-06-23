import React from 'react'
import './ProductList.css'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ProductList() {
    return (
        <>
            <div id='productpacage'>
                <Container>
                    <Row>
                        <Col><a href="Mobiles" className='col'>Mobiles </a></Col>
                        <Col><a href="/Mens" >
                            <NavDropdown title="Fashion" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="/fasions" >
                                  All
                                </NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="/mensproduct">Men's T- shirt</NavDropdown.Item>
                                <NavDropdown.Item href="/Mens">Men's Casual Shirt</NavDropdown.Item>
                                <NavDropdown.Item href="/womens">Womens</NavDropdown.Item>
                                <NavDropdown.Item href="kids">Kids</NavDropdown.Item>
                            </NavDropdown>
                        </a>
                        </Col>
                        <Col> <a href="/home-living" >Electronics</a></Col>
                        <Col><a href="/home-living" >Appliances</a></Col>
                        <Col> <a href="/">Travels</a></Col>
                        <Col><a href="NewBeauty" className='col'>Beauty</a></Col>
                        <Col><a href="/two_Wheelers" className='col'>Two Wheelers</a></Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}
export default ProductList
