import React from 'react';
import './Buy.css';


const xmark = {
    position: 'absolute',
    marginLeft: '10em',
    marginTop: '-43px',
    color: 'red',
    cursor: 'pointer',
  }
function ShareIcons() {
    return (
        <>
            <div className='share-options'>
                <p class='title'>share</p>
                <i class="fa-solid fa-xmark fa-xl" style={xmark}></i>
                <div class='social-media'>
                    <button class='social-media-btn'><i class="fa-brands fa-facebook fa-xl" style={{ color: '#26559b', cursor: 'pointer' }} ></i></button>
                    <button class='social-media-btn'><i class="fa-brands fa-square-twitter fa-xl" style={{ color: "#00acee", cursor: 'pointer' }}></i></button>
                    <button class='social-media-btn'><i class="fa-brands fa-whatsapp fa-xl" style={{ color: "#00c23a", cursor: 'pointer' }}></i></button>
                    <button class='social-media-btn'><i class="fa-sharp fa-regular fa-envelope fa-xl" style={{ color: '#0647b7', cursor: 'pointer' }}></i></button>
                    <button class='social-media-btn'><i class="fa-brands fa-linkedin fa-xl" style={{ color: '#0e76a8' }}></i></button>
                    <button  class='social-media-btn'><i class="fa-brands fa-youtube fa-lg" style={{ color: "#c4302b " }}></i></button>
                    <button class='social-media-btn'><i class="fa-brands fa-instagram fa-lg"style={{color:'#f09433'}}></i></button>
                    <button class='social-media-btn'><i class="fa-brands fa-square-snapchat fa-lg" style={{color:'#fbff24'}}></i></button>
                    <button class='social-media-btn'><i class="fa-brands fa-google fa-lg"style={{color:'#004bcc'}}></i></button>
                    <button class='social-media-btn'><i class="fa-brands fa-telegram fa-lg"style={{color:'#229ED9'}}></i></button>
                    <button  class='social-media-btn'><i class="fa-brands fa-tiktok fa-lg"style={{color:'#00f2ea'}}></i></button>

                </div>
            </div>
        </>
    )
}

export default ShareIcons
