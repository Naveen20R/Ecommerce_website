import React from 'react'
import './FooterStyles.css';

function Footer() {
    return (
        <footer className='bg-dark text-white pt-5 pb-4'>
            <div className='container text-center text-md-left' style={{ cursor: 'context-menu' }}>
                <div className='row text-center text-md-left'>
                    <div className='col-md-3 col-lg-3 col-xl-1 mx-auto mt-3' >
                        <h5 className='text-upperCase mb-4 font-weight-bold-text-warning'>About Us</h5>

                        <p >
                            <a href='#' id='div'  >Aim</a>
                        </p>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Vision</a>
                        </p>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Testimonials</a>
                        </p>




                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-upperCase mb-4 font-weight-bold-text-warning'>Services</h5>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Writing</a>
                        </p>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Internship</a>
                        </p>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Coding</a>
                        </p>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Teaching</a>
                        </p>
                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-upperCase mb-4 font-weight-bold-text-warning'>Contact Us</h5>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Uttar Pradesh</a>
                        </p>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Ahemdabad</a>
                        </p>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Indore</a>
                        </p>
                        <p>
                            <a href='#' id='div' className='textw text-decoration-none  '>Mumbai</a>
                        </p>
                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <h5 className='text-upperCase mb-4 font-weight-bold-text-warning'>Social Media</h5>
                        <p>
                            <a href='https://www.facebook.com/' id='div' className='textw text-decoration-none  '><i class="fa-brands fa-facebook fa-2xl" style={{ color: '#26559b' }} ></i></a>
                        </p>
                        <p>
                            <a href='https://www.linkedin.com/feed/' id='div' className='textw text-decoration-none  '><i class="fa-brands fa-linkedin fa-2xl" style={{ color: '#0e76a8' }}></i></a>
                        </p>
                        <p>
                            <a href='https://twitter.com/i/flow/login' id='div' className='textw text-decoration-none  '><i class="fa-brands fa-square-twitter fa-2xl" style={{ color: "#00acee" }}></i></a>
                        </p>
                        <p>
                            <a href='https://www.youtube.com/' id='div' className='textw text-decoration-none  '><i class="fa-brands fa-youtube fa-2xl" style={{ color: "#c4302b " }}></i></a>
                        </p>
                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-4 mx-auto mt-3' id="address">
                        <h5>Address</h5>
                        <p>Flipkart Internet Private Limited,
                            Buildings Alyssa, Begonia &
                            Clove Embassy Tech Village,
                            Outer Ring Road, Devarabeesanahalli Village,
                            Bengaluru, 560103,
                            Karnataka, India<br />
                            CIN : U51109KA2012PTC066107<br />
                            Telephone: 044-45614700</p>
                    </div>
                </div>
            </div><hr />
            <div className='row text-center text-md-left' id='footerContent'>
                <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3' >
                    <p>
                        <a src="" ><i class="fa-solid fa-bag-shopping" style={{ color: "#ffee33 " }}></i>Become a Seller</a>
                    </p>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3' >
                    <a src="" ><i class="fa-solid fa-star" style={{ color: "#ffee33 " }}></i>Advertise</a>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3' >
                    <a src="" ><i class="fa-solid fa-gift" style={{ color: "#ffee33 " }}></i>Gift Cards</a>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3' >
                    <a src="" ><i class=" fa-solid fa-question" style={{ color: "#ffee33 " }}></i>Help Center</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
