import React,{useState,useEffect} from 'react'
import {beauty ,beauty_heading } from '../../constant/Const'
import './Items.css'
import { useNavigate } from 'react-router-dom'



const heading = {
  color: 'blue',
  textAlign: 'center',
  padding:'20px',
}
const image = {
  width: 'auto',
  height: "20vh",
  ObjectFit: 'contain',
  backgroundSize: 'cover'

}
const card = {
  height: '27em',
  textAlign: 'justify',
  marginBottom :'10px',
}
const btnCard = {
  marginLeft: '10px',
  borderRadius: '2px',
  backgroundColor: '	 #fffa00',
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
const title = {
  color: 'rgb(0,139,139)'
}
const cost = {
  marginLeft: '50px',
  marginTop: '-45px',
  color: 'black'

}
const fullCard = {
  marginLeft: '10px',
  marginRight: '10px'
}
// const logo = {
//   width:'50px',
//   height:'50px',
//   objectFit:'contain',
//   marginLeft:'120px',
//   marginTop:'-76px'
// }




function KitchenItems() {
  const navigate = useNavigate();
  let [items, setItems] = useState(
    JSON.parse(localStorage.getItem("beauty")) || []
  );
// Whenever items change save to localStorage
useEffect(() => {
  localStorage.setItem("beauty", JSON.stringify(items));
}, [items]); //dependency is items
// Add a new item
const addToCart = (values) => {
  let Cart9 = items.some((e) => JSON.stringify(e.id) === JSON.stringify(values.id));
  if (!Cart9) {
    setItems([...items, values]);
    setTimeout(() => {
      alert('items added successfully.');
    }, [1000])
  } else if (Cart9) {
    alert('items Already added successfully.');

  }
}
  return (
    <div style={fullCard}>


      <h3 style={heading}>{beauty_heading} </h3>

      <div class="row row-cols-1 row-cols-md-5 g-4">
        {beauty.filter((values) => {
            if (localStorage.getItem('searchValues') == '') {
              return values;
            } else if (values.Title.toLowerCase().includes(localStorage.getItem('searchValues').toLowerCase())) {
              return values
            }
          }).map((values, index) => (
          <div class="col" key={index} >
            <div class="card " style={card}>
              <img style={image} src={values.img} />
              <div class="card-body">
                <h5 class="card-title" style={title}>{values.Title} </h5>
                <p class="card-text">{values.description}</p>
                <p>Price :</p>
                <h2 style={cost}>₹{values.price.toLocaleString()} </h2>
                <button style={btnCard} className='btncard'onClick={() => addToCart(values)}>add to Card</button>
                <button onClick={() => { navigate('/beautyproduct',{state: values,}) }} style={btnBuy}>buy Now</button>
                
              </div>

            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default KitchenItems
