import React from 'react'
const SignIn = () => {
        return (
            <div className="d-flex align-items-center gradient-custom-3 p-5" id="loginDiv" >
            <div className="container p-5 ">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                        <div className="card" style={{ borderRadius: "15px" }}>
                            <div className="card-body p-5">
                                <h3 className="text-uppercase text-center mb-5">Login/Sign up</h3>
                                <form id="loginForm">
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form3cg">Email:</label>
                                        <input
                                            type="email"
                                            id="txtEmail"
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form4cg">Password:</label>
                                        <input
                                            type="password"
                                            id="txtPassword"
                                            className="form-control form-control-lg"
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button
                                            id="btnSignup"
                                            type="button"
                                            className="btn btn-primary btn-block btn-lg text-light"
                                        >
                                            Sign up
                                        </button>
                                        <button
                                            type="button"
                                            id="btnLogin"
                                            className="mx-2 btn btn-primary btn-block btn-lg text-light"
                                        >
                                            Login
                                        </button>
                                    </div>
                                    <div id="divLoginError">
                                        <label
                                            id="lblLoginErrorMessage"
                                            htmlFor="divLoginError"
                                        ></label>
                                        <label id="lblAuthState" htmlFor="divLoginError"></label>
                                    </div>
                                </form>
                                <hr />
                                <div className="col-md-6 mx-auto ">
                                    <br />
                                    <button className="google loginbtn">Login with Google</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SignIn