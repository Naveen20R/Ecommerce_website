import React from 'react'
import { twoWheelerHeading,Two_Wheelers } from '../../../../constant/Const'
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
  height: '25em',
  textAlign: 'justify'
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
  color: 'green'

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




function TwoWheelers() {
  const navigate = useNavigate();
  

  return (
    <div style={fullCard}>


      <h3 style={heading}>{twoWheelerHeading} </h3>

      <div class="row row-cols-1 row-cols-md-5 g-4">
        {Two_Wheelers.filter((values) => {
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
                <h2 style={cost}>{values.price} </h2>
                <button style={btnCard}>add to Card</button>
                <button onClick={() => { navigate('/beautyproduct',{state: values,}) }}style={btnBuy} >buy Now</button>
              </div>

            </div>
          </div>
        ))}
      </div>


    </div>
  )
}

export default TwoWheelers
