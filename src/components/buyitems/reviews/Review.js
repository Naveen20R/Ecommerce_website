import React, { useState, useEffect } from 'react';
import './Reviews.css';

function Review() {
  const [camera, setCamera] = useState(0);
  const [battery, setbattery] = useState(0);
  const [display, setDisplay] = useState(0);
  const [design, setDesign] = useState(0);

  useEffect(() => {
    if (camera >= 60 && battery >= 80 && display >= 90 && design >= 70) {
      console.log('hui');
    } else if (camera < 60) {
      setTimeout(() => {
        setCamera(camera + 1);
        setbattery(battery + 1);
        setDisplay(display + 1);
        setDesign(design + 1);
      }, 100);
    }else if (battery < 80) {
      setTimeout(() => {
        setbattery(battery + 1);
        setDisplay(display + 1);
      }, 100);
    }else {
      console.log('hi');
    }

  }, [camera, battery, display, design,]);



  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3" id='skill'>
            <div className='outer'>
              <div className='inner'>
                <div id='number'>
                  {camera + '%'}
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="yellow">
                  <stop offset="0%" stop-color="#ffd700" />
                  <stop offset="40%" stop-color="#ffd700" />
                </linearGradient>
              </defs>
              <circle id='circle1' cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <h6 id='heading'>Camera</h6>

          </div>
          <div className='col-md-2 col-lg-2 col-xl-3 mx-auto mt-3' id='skill'>
            <div className='outer'>
              <div className='inner'>
                <div id='number'>
                  {battery + '%'}
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="green">
                  <stop offset="0%" stop-color="#32cd32" />
                  <stop offset="100%" stop-color="#32cd32" />
                </linearGradient>
              </defs>
              <circle id='circle2' cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <h6 id='heading'>Battery</h6>
          </div>
          <div className='col-md-2 col-lg-2 col-xl-3 mx-auto mt-3' id='skill'>
            <div className='outer'>
              <div className='inner'>
                <div id='number'>
                  {display + '%'}
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="lightblue">
                  <stop offset="0%" stop-color="#87cefa" />
                  <stop offset="100%" stop-color="#87cefa" />
                </linearGradient>
              </defs>
              <circle id='circle3' cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <h6 id='heading'>Display</h6>
          </div>
          <div className='col-md-2 col-lg-2 col-xl-3 mx-auto mt-3' id='skill'>
            <div className='outer'>
              <div className='inner'>
                <div id='number'>
                  {design + '%'}
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
              <defs>
                <linearGradient id="orange">
                  <stop offset="0%" stop-color="#ff8c00" />
                  <stop offset="100%" stop-color="#ff8c00" />
                </linearGradient>
              </defs>
              <circle id='circle4' cx="80" cy="80" r="70" stroke-linecap="round" />
            </svg>
            <h6 id='heading'>Design</h6>
          </div>
        </div>
      </div>

    </>
  )
}

export default Review
