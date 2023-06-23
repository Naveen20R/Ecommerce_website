import React from 'react'
import { useRef } from 'react'
import Home from '../items/Home'
// import Checkboxicon from '../icons/Checkboxicon'



function Login() {
    const userName = useRef()
    const userPassword = useRef()

    const getName = localStorage.getItem('useName')
    const getPassword = localStorage.getItem('userPassword')
    const handleSubmit = () => {
        if (userName.current.value && userPassword.current.value) {
            localStorage.setItem("useName", userName.current.value)
            localStorage.setItem("userPassword", userPassword.current.value)
        }

    }


    return (
        <>
            {getName && getPassword ? <Home /> :
                <form onSubmit={handleSubmit}>
                    <section class="vh-100" style={{ backgroundColor: 'white' }} >
                        <div class="container py-5 h-100" style={{ marginTop: '-40px' }}>
                            <div class="row d-flex justify-content-center align-items-center h-100">
                                <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                                    <div class="card shadow-2-strong" style={{ borderRadius: '1rem' }}>
                                        <div class="card-body p-5 text-center">
                                            <h3 class="mb-5">Sign in</h3>
                                            <div class="form-outline mb-4">
                                                <input type="text" id="typeEmailX-2" class="form-control form-control-lg" ref={userName} />
                                                <label class="form-label" for="typeEmailX-2">UserName</label>
                                            </div>
                                            <div class="form-outline mb-4">
                                                <input type="password" id="typePasswordX-2" class="form-control form-control-lg" ref={userPassword} />
                                                <label class="form-label" for="typePasswordX-2">Password</label>
                                            </div>
                                            {/* <!-- Checkbox --> */}
                                            <div class="form-check d-flex justify-content-start mb-4">
                                                <input class="form-check-input" type="checkbox" style={{
                                                    width: '20px',
                                                    height: '22px',
                                                }} value="" id="form1Example3" ></input>
                                                {/* <div><Checkboxicon /></div> */}
                                                <label class="form-check-label" for="form1Example3">  Remember password </label>
                                            </div>
                                            <button class="btn btn-primary btn-lg btn-block">Login</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </form>

            }
        </>
    )
}

export default Login
