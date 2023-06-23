import React, { useEffect, useState } from 'react'
import { mensTshirts } from '../../../constant/Const'
import { useNavigate } from 'react-router-dom';
import '../../cart/Cart';
import { FaBeer } from 'react-icons/fa';
import { BsArrowDownShort, BsArrowUpShort } from "react-icons/bs";
import { isDisabled } from '@testing-library/user-event/dist/utils';





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
    height: 'auto',
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
const imageTitle = {
    color: 'rgb(0,139,139)'
}
const cost = {
    marginLeft: '50px',
    marginTop: '-45px',
    color: 'red'

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
const dropdown = {
    // marginTop:'-20px',
    marginLeft: '70px',
    // width:" 90px",
    // height:'20px',
    // cursor :'pointer'

}
const dropdownbtn = {
    border: 'none',
    backgroundColor: 'white',
    color:'#296E85',
    fontWeight:'bold',

}
const colors = {
    cursor:'pointer',
}
const setcolors = {
    fontWeight:'bold',
}



function Colorfilter() {
    const [isColorAll, setIscolorall] = useState(false);
    const [allSelectItems, setAllselectItems] = useState(false);
    const [isWhite, setIsWhite] = useState(false);
    const [isBlack, setIsBlack] = useState(false);
    const [isGrey, setIsGrey] = useState(false);
    const [isNike, setIsNike] = useState(false);
    const [isPuma, setIsPuma] = useState(false);
    const [isAddidas, setIsAddidas] = useState(false);
    const [search, Setsearch] = useState('');
    const [position, setposition] = useState();
    const navigate = useNavigate();
    const [data, setData] = useState(mensTshirts);//filters for color
    const [isShown, setIsShown] = useState(false); // onclick show the radios for color
    const [selectbrand, setSelectbrand] = useState(mensTshirts);
    const [brand, setBrand] = useState(false); // onclick show radious for brand

    const filterColors = [];
    useEffect(() => {

        mensTshirts.map((curData) => {
            if (isWhite && curData.color === 'white') {
                filterColors.push(curData)
            }
            if (isBlack && curData.color === 'black') {
                filterColors.push(curData)
            }
            if (isGrey && curData.color === 'gray') {
                filterColors.push(curData)
            }
            if (isPuma && curData.brand === 'puma') {
                filterColors.push(curData)
            }
            if (isNike && curData.brand === 'nike') {
                filterColors.push(curData)
            }
            if (isAddidas && curData.brand === 'addidas') {
                filterColors.push(curData)
            }
        })
        if (!isWhite && !isGrey && !isBlack && !isPuma && !isNike && !isAddidas) {
            setData(mensTshirts);
            console.log('from color');

        } else {
            setData(filterColors);
            console.log(filterColors);
        }
        // if(isColorAll === true){
        //     setAllselectItems(true);

        // }
    }, [isWhite, isBlack, isGrey, isPuma, isNike, isAddidas])

    const allproducts = () => {
        setIscolorall(true);
        setAllselectItems(true);
        setData(mensTshirts);
        if (allSelectItems) {
            mensTshirts.map((curData) => {
                if (isWhite && curData.color === 'white') {
                    console.log(curData);
                    filterColors.push(curData)
                }
                if (isBlack && curData.color === 'black') {
                    filterColors.push(curData)
                }
                if (isGrey && curData.color === 'gray') {
                    filterColors.push(curData)
                }
                if (isPuma && curData.color === 'puma') {
                    filterColors.push(curData)
                }
                if (isNike && curData.color === 'nike') {
                    filterColors.push(curData)
                }
                if (isAddidas && curData.color === 'addidas') {
                    filterColors.push(curData)
                }
                setData(filterColors);

            })
            setAllselectItems(false);

            if (!isWhite && !isBlack && !isGrey) {
                setData(mensTshirts);
            }
        }

    }

    // const cartnavigate = useNavigate();
    const isLogedin = (values, index) => {

        if (localStorage.getItem('useName') === null) {
            navigate('/login', {})
        } else {
            navigate('/buy', { state: values });
            setposition(index);

        }

    }
    const color = (whiteColor, br) => {
        const result = mensTshirts.filter((curData) => {
            return curData.color === whiteColor || curData.brand === br;

        });
        // setWhite(result);//white
        console.log(result);
        // const results = mensTshirts.filter((currentData) => {
        //     return currentData.brand === br;
        // });
        // setWhite(results);
        // console.log(results);


    }
    const brandshirt = (userbrand) => {
        const results = mensTshirts.filter((currentData) => {
            return currentData.brand === userbrand;
        });
        setSelectbrand(results);
    }
    const handleClick = event => {
        // 👇️ toggle shown state
        setIsShown(current => !current);

        // 👇️ or simply set it to true
        // setIsShown(true);
    };
    const brandClicked = event => {

        setBrand(current => !current);
    }
    return (
        <div style={fullCard}>
            {/* <input onChange={(e) => { Setsearch(e.target.value) }} /> */}
            <h2 style={heading}>Mens T-shirt Collections...</h2>
            <div class="container">
                <div class="row">
                    <div class="col-2" style={{ backgroundColor: '', }}>
                        <h2 style={{ textAlign: 'center', }}>Filter</h2>
                        <div>
                            <div class="form-check">
                                <input onChange={() => allproducts()} class="form-check-input" style={{ cursor: "pointer" }} type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label class="form-check-label" for="flexRadioDefault1"  style={allSelectItems ? setcolors : null}>
                                    All
                                </label>
                            </div>

                            <button style={dropdownbtn} onClick={handleClick}>colour{!isShown ? <BsArrowDownShort size='25px' style={dropdown} /> : <BsArrowUpShort size='25px' style={dropdown} />} </button>


                            {isShown && (
                                <div>
                                    <hr />


                                    <div class="form-check">
                                        <input onChange={() => setIsWhite(!isWhite)} disabled={allSelectItems}  class="form-check-input" style={{cursor:'pointer'}} type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1" style={isWhite ? setcolors : null  }>
                                            White
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onClick={() => setIsGrey(!isGrey)} disabled={allSelectItems} style={{ cursor: "pointer" }} class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1" style={isGrey ? setcolors : null  }>
                                            gray
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={() => setIsBlack(!isBlack)} disabled={allSelectItems} style={{ cursor: "pointer" }} class="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1" style={isBlack ? setcolors : null  }>
                                            black
                                        </label>
                                    </div>
                                </div>
                            )}

                        </div>
                        <div>

                            <button style={dropdownbtn} onClick={brandClicked}>Brand{!brand ? <BsArrowDownShort size='25px' style={dropdown} /> : <BsArrowUpShort size='25px' style={dropdown} />} </button>


                            {brand && (
                                <div>
                                    <hr />
                                    <div class="form-check">
                                        <input onChange={() => setIsNike(!isNike)} disabled={allSelectItems} class="form-check-input" type="checkbox" style={{ cursor: "pointer" }} name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1" style={isNike ? setcolors : null  }>
                                            Nike
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={() => setIsPuma(!isPuma)} disabled={allSelectItems} class="form-check-input" type="checkbox" style={{ cursor: "pointer" }} name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1" style={isPuma ? setcolors : null  }>
                                            Puma
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input onChange={() => setIsAddidas(!isAddidas)} disabled={allSelectItems} class="form-check-input" type="checkbox" style={{ cursor: "pointer" }} name="flexRadioDefault" id="flexRadioDefault1" />
                                        <label class="form-check-label" for="flexRadioDefault1" style={isAddidas ? setcolors : null  }>
                                            Addidas
                                        </label>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                    <div class="col-10">
                        <div class="row row-cols-1 row-cols-md-3 g-4">
                            {/* {menShirts.filter((val) => {
          if (search == "") {
            return val;
          } else if (val.Title.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        }) */}
                            {
                                data.filter((values) => {
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
                                                <h5 class="card-title" style={imageTitle}>{values.Title} </h5>
                                                <h6>Brand : {values.brand}</h6>
                                                <p class="card-text">{values.description}</p>
                                                <p>Price :</p>
                                                <h2 style={cost}>₹{values.price} </h2>
                                                <button style={btnCard} >add to Card</button>
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
                </div>
            </div>





        </div>
    )
}

export default Colorfilter
