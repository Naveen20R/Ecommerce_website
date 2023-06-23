import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';




const heading = {
  color: 'blue',
  textAlign: 'center',
  padding: "20px",
}
const image = {
  width: 'auto',
  height: "20vh",
  ObjectFit: 'contain',
  backgroundSize: 'cover'

}
const card = {
  height: '25em',
  textAlign: 'justify',
  marginLeft: "20px",
}
const btnDelete = {
  marginLeft: '10px',
  borderRadius: '2px',
  backgroundColor: '#E21717',
  border: 'none',
  textAlign: 'center'
}
const btnBuy = {

  backgroundColor: 'rgb(255,165,0)',
  borderRadius: '2px',
  border: 'none',
  marginLeft: '10px',
  textAlign: 'center'
}
const imageTitle = {
  color: 'rgb(0,139,139)'
}
const cost = {
  marginLeft: '50px',
  marginTop: '-45px',
  color: 'green'

}
const fullCard = {
  marginLeft: '10px',
  marginRight: '10px',
}
const EmptyCart = {
  marginLeft: '12em',
  marginTop: '150px',
  color: 'blue',
}
const EmptyBox ={
  width:'250px',
  height:'200px',
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop:'20px',
}


function Cart() {
  const navigate = useNavigate();
  const [position, setposition] = useState();
  const [reload, setReload] = useState(false)
  let [mens, setMens] = useState(
    JSON.parse(localStorage.getItem("mens")) || []
  );
  let [kids, setKids] = useState(
    JSON.parse(localStorage.getItem("kids")) || []
  );
  let [beauty, setBeauty] = useState(
    JSON.parse(localStorage.getItem("beauty")) || []
  );
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("items")) || []
  );
  let [mobile, setMobile] = useState(
    JSON.parse(localStorage.getItem("mobile")) || []
  );
  let [women, setWomen] = useState(
    JSON.parse(localStorage.getItem("women")) || []
  );


  const DeleteMens = (values) => {
    let temp = mens.filter(item => item.id != values.id);
    localStorage.setItem('mens', JSON.stringify(temp));
    window.location.reload(true);
  }
  const DeleteWomen = (values) => {
    let temp = women.filter(item => item.id != values.id);
    localStorage.setItem('women', JSON.stringify(temp));
    window.location.reload(true);
  }
  const DeleteMobile = (values) => {
    let temp = mobile.filter(item => item.id != values.id);
    localStorage.setItem('mobile', JSON.stringify(temp));
    window.location.reload(true);
  }
  const DeleteKids = (values) => {
    let temp = kids.filter(item => item.id != values.id);
    localStorage.setItem('kids', JSON.stringify(temp));
    window.location.reload(true);
  }
  const DeleteBeauty = (values) => {
    let temp = beauty.filter(item => item.id != values.id);
    localStorage.setItem('beauty', JSON.stringify(temp));
    window.location.reload(true);
  }
  const DeleteItems = (values) => {
    let temp = items.filter(item => item.id != values.id);
    localStorage.setItem('items', JSON.stringify(temp));
    window.location.reload(true);
  }
  //Identify If user is Logged in Or not.
  const isLogedin = (values, index) => {

    if (localStorage.getItem('useName') === null) {
      navigate('/login', {})
    } else {
      navigate('/buy', { state: values });
      setposition(index);
    }
  }

  return (
    <div>

      {
        mens.length === 0 && kids.length === 0 && beauty.length === 0 && items.length === 0 && mobile.length === 0 && women.length === 0 ?
          <div>
            <h1 style={EmptyCart}>No Cart Items Added..</h1>
            <img style={EmptyBox} src='https://cdn-icons-png.flaticon.com/512/80/80565.png' />
          </div>
          : <h3 style={heading}> CART ITEMS </h3>}
      <div class="row row-cols-1 row-cols-md-5 g-4">
        {
          mens.map((values, index) => (
            <div class="col" key={index} >
              <div class="card " style={card}>
                <img style={image} src={values.img} />
                <div class="card-body">
                  <h5 class="card-title" style={imageTitle}>{values.Title} </h5>
                  <p class="card-text">{values.description}</p>
                  <p>Price : </p>
                  <h2 style={cost}>₹{values.price} </h2>

                  {/* <button style={btnDelete}  ></button> */}
                  <i class="fa-solid fa-trash fa-xl" onClick={() => DeleteMens(values)} style={{ color: "#db0000", cursor: 'pointer' }}></i>
                  {/* <Link to={{
                  pathname: "buy",
                  state: values
                }} ><button onClick={() => { Buy(values) }} style={btnBuy} >buy Now</button> </Link> */}
                  <button onClick={() => { isLogedin(values, index) }} style={btnBuy} >buy Now</button>

                </div>

              </div>
            </div>

          ))}
          {
          kids.map((values, index) => (
            <div class="col" key={index} >
              <div class="card " style={card}>
                <img style={image} src={values.img} />
                <div class="card-body">
                  <h5 class="card-title" style={imageTitle}>{values.Title} </h5>
                  <p class="card-text">{values.description}</p>
                  <p>Price : </p>
                  <h2 style={cost}>₹{values.price} </h2>

                  {/* <button style={btnDelete}  ></button> */}
                  <i class="fa-solid fa-trash fa-xl" onClick={() => DeleteKids(values)} style={{ color: "#db0000", cursor: 'pointer' }}></i>
                  {/* <Link to={{
                  pathname: "buy",
                  state: values
                }} ><button onClick={() => { Buy(values) }} style={btnBuy} >buy Now</button> </Link> */}
                  <button onClick={() => { isLogedin(values, index) }} style={btnBuy} >buy Now</button>

                </div>

              </div>
            </div>

          ))}
          {
          beauty.map((values, index) => (
            <div class="col" key={index} >
              <div class="card " style={card}>
                <img style={image} src={values.img} />
                <div class="card-body">
                  <h5 class="card-title" style={imageTitle}>{values.Title} </h5>
                  <p class="card-text">{values.description}</p>
                  <p>Price : </p>
                  <h2 style={cost}>₹{values.price} </h2>

                  {/* <button style={btnDelete}  ></button> */}
                  <i class="fa-solid fa-trash fa-xl" onClick={() => DeleteBeauty(values)} style={{ color: "#db0000", cursor: 'pointer' }}></i>
                  {/* <Link to={{
                  pathname: "buy",
                  state: values
                }} ><button onClick={() => { Buy(values) }} style={btnBuy} >buy Now</button> </Link> */}
                  <button onClick={() => { isLogedin(values, index) }} style={btnBuy} >buy Now</button>

                </div>

              </div>
            </div>

          ))}
          {
            
          items.map((values, index) => (
            <div class="col" key={index} >
              <div class="card " style={card}>
                <img style={image} src={values.img} />
                <div class="card-body">
                  <h5 class="card-title" style={imageTitle}>{values.Title} </h5>
                  <p class="card-text">{values.description}</p>
                  <p>Price : </p>
                  <h2 style={cost}>₹{values.price} </h2>

                  {/* <button style={btnDelete}  ></button> */}
                  <i class="fa-solid fa-trash fa-xl" onClick={() => DeleteItems(values)} style={{ color: "#db0000", cursor: 'pointer' }}></i>
                  {/* <Link to={{
                  pathname: "buy",
                  state: values
                }} ><button onClick={() => { Buy(values) }} style={btnBuy} >buy Now</button> </Link> */}
                  <button onClick={() => { isLogedin(values, index) }} style={btnBuy} >buy Now</button>

                </div>

              </div>
            </div>

          ))}
          {
          mobile.map((values, index) => (
            <div class="col" key={index} >
              <div class="card " style={card}>
                <img style={image} src={values.img} />
                <div class="card-body">
                  <h5 class="card-title" style={imageTitle}>{values.Title} </h5>
                  <p class="card-text">{values.description}</p>
                  <p>Price : </p>
                  <h2 style={cost}>₹{values.price} </h2>

                  {/* <button style={btnDelete}  ></button> */}
                  <i class="fa-solid fa-trash fa-xl" onClick={() => DeleteMobile(values)} style={{ color: "#db0000", cursor: 'pointer' }}></i>
                  {/* <Link to={{
                  pathname: "buy",
                  state: values
                }} ><button onClick={() => { Buy(values) }} style={btnBuy} >buy Now</button> </Link> */}
                  <button onClick={() => { isLogedin(values, index) }} style={btnBuy} >buy Now</button>

                </div>

              </div>
            </div>

          ))}
          {
          women.map((values, index) => (
            <div class="col" key={index} >
              <div class="card " style={card}>
                <img style={image} src={values.img} />
                <div class="card-body">
                  <h5 class="card-title" style={imageTitle}>{values.Title} </h5>
                  <p class="card-text">{values.description}</p>
                  <p>Price : </p>
                  <h2 style={cost}>₹{values.price} </h2>

                  {/* <button style={btnDelete}  ></button> */}
                  <i class="fa-solid fa-trash fa-xl" onClick={() => DeleteWomen(values)} style={{ color: "#db0000", cursor: 'pointer' }}></i>
                  {/* <Link to={{
                  pathname: "buy",
                  state: values
                }} ><button onClick={() => { Buy(values) }} style={btnBuy} >buy Now</button> </Link> */}
                  <button onClick={() => { isLogedin(values, index) }} style={btnBuy} >buy Now</button>

                </div>

              </div>
            </div>

          ))}


      </div>

    </div>



  )
}


export default Cart
