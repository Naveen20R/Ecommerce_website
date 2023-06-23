import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
// import ProductList from '../items/ProductList';


const content = {
marginLeft:'19em',
}
function Header(props) {
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  // const [isShown, setIsShown] = useState(true);
  // const logo={
  //   width:'50px',
  //   heigth:'30px',
  //   position:'absolute',
  //   margineTop:"-30px",
  //   // mixBlendMode: "hard-light",
  // }
  const getName = localStorage.getItem('useName')
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  }
  // if (!isShown) {
  //   setIsShown (true);
  // }
  return (
    <>
      
        <Navbar collapseOnSelect expand="lg" bg="dark" id='header' className=' fixed-top' variant="dark" style={{ position: 'sticky' }}>
          <Container>
            <Navbar.Brand href="/logo"> LOGO  </Navbar.Brand>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav style={content}>
                {<Form className="d-flex" style={{ marginLeft: "370px" }}>
                  <Form.Control      
                    type="search"
                    placeholder="Search..."
                    className="me-2"
                    aria-label="Search"
                    style={{width:"14em",height:'30px',marginTop:'4px'}}
                    onChange={event => props.item(event.target.value)}                    
                  />
                </Form>}
                {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
                <Nav.Link href="/">Home</Nav.Link>
                {!getName ?
                  <Nav.Link href="/login">
                    Login
                  </Nav.Link> :
                  <NavDropdown title={getName ? "Hello," + localStorage.getItem("useName") : null} id="collasible-nav-dropdown">
                    {!getName ?
                      null :
                      <NavDropdown.Item onClick={handleClick} href="/">
                        LogOut
                      </NavDropdown.Item>}
                  </NavDropdown>}
                  <Nav.Link href="/cart" style={{color:'wite'}}><i class="fa-solid fa-cart-plus"></i></Nav.Link> 

              </Nav>

            </Navbar.Collapse>

          </Container>

        </Navbar>
      
        {/* <Nav.Link><ProductList /></Nav.Link> */}
      



    </>
  );
}

export default Header;


// import React from 'react'
// import './Style.css'
// import { useState } from 'react';
// import NavDropdown from 'react-bootstrap/NavDropdown';


// function Header() {
//     const [isHovering, setIsHovering] = useState(false);
//     const [dropdown, setDropdown] = useState(false);
//     const getName = localStorage.getItem('useName')

//     const handleMouseOver = () => {
//         setIsHovering(true);
//     };

//     const handleMouseOut = () => {
//         setIsHovering(false);
//     };

//     const handleClick = () => {
//         localStorage.clear();
//         window.location.reload();
//     }
//     const dropDown = () => {
//         setDropdown(true);
//     }
//     const profileName = () => {
//         { localStorage.getItem('useName') }
//     }
//     return (
//         <>

//             <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary" id='Navber-color'>
//                 <div class="container-fluid" >
//                     <a id='logo' class="navbar-brand" href="#">Navbar scroll</a>
//                     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//                         <span class="navbar-toggler-icon"></span>
//                     </button>
//                     <div class="collapse navbar-collapse" id="navbarScroll">
//                         <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" id='listItems' >

//                             <li class="nav-item text-white">
//                                 <a class="nav-link active" href="/mens">MEN</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" href="/womes">WOMEN</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="/kids">KIDS</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="/home-living">HOME & LIVING</a>
//                             </li>
//                             <li class="nav-item">
//                                 <a class="nav-link active" aria-current="page" href="/beauty">BEAUTY</a>
//                             </li>
//                             <li><a>
//                                 <form class="d-flex" role="search" id="searchBar" >
//                                     <input class="form-control me-2" id='search' type="search" placeholder="Search for products,brands and more" aria-label="Search" />
//                                     <button class="btn btn-outline-success" type="submit">Search</button>
//                                 </form>
//                             </a>


//                             </li>
//                             {!getName ?
//                                 <li class="nav-item">
//                                     <a class="nav-link active" aria-current="page" href="/login">Login</a>
//                                 </li> :

//                                 <li class="nav-item">
//                                     <a class="nav-link active" aria-current="page" href="" onMouseOver={handleMouseOver}
//                                         onMouseOut={handleMouseOut} onClick={handleClick}>LogOut</a>
//                                 </li>}
//                             <li class="nav-item dropdown">
//                                 <NavDropdown title={localStorage.getItem('useName')}  id="collasible-nav-dropdown">
//                                     naveen
//                                     <NavDropdown.Item onClick={handleClick}>LogOut</NavDropdown.Item>

//                                 </NavDropdown>
//                                 </li>


//                                 {isHovering && (
//                                     <li class="nav-item">
//                                         <a class="nav-link active" aria-current="page" href=""> {localStorage.getItem('useName')}</a>
//                                     </li>)}

{/* <li class="nav-item"  >
                                <a class="nav-link active" id='profileIcon' aria-current="page" href="#"><i class="bi bi-person-circle" >Login</i></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active" id='cartIcon' aria-current="page" href="#"><i class="bi bi-cart" id='cartIcon'></i></a>
                            </li> */}

//                         </ul>

//                     </div>
//                 </div>

//             </nav>


//         </>
//     )
// }

// export default Header
