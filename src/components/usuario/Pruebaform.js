import React from 'react'

const Pruebaform = () => {

    async function crearUsuario(event) {
        event.preventDefault()

        const NuevoUsuario = {
            imguser: event.target[0].value,
            firstname: event.target[1].value,
            lastname: event.target[2].value,
            email: event.target[3].value,
            password: event.target[4].value,
            from: "signup"


        }
        console.log(NuevoUsuario)

      /*   await axios.post("https://mytinerary-marianela.herokuapp.com/api/signup", { NuevoUsuario })
            .then(response => {

                if (response.data.success === "falseVAL") {
                    let detailsError = response.data.response.error.details

                    detailsError.map(error =>
                        swal({
                            title: " error",
                            icon: "error",
                            text: error.message,
                            buttons: "ok"
                        }))
                }
                else if (response.data.success === true) { //nuevo usuario creado envia email
                    //console.log(alert(data.response))
                    swal({
                        title: response.data.response,
                        icon: "success",
                        buttons: "ok"
                    })


                } else if (response.data.success === false) {
                    //console.log(alert(data.response)) // usuario ya existe
                    swal({
                        title: response.data.response,
                        icon: "success",
                        buttons: "ok"
                    })

                }

            }) */



    }






    return (
        <main className='register'>

            <div className="title-siginup">

                <h1 className="text-center">Create Account</h1>
                <h4 className="text-center">Please fill in the form to get access to all the features.</h4>

            </div>
            <div className="container contenedor-register">


                <div className="contenedor-signup">
                    <div className="card-register">

                        <div className="card-body">

                        


                            <form onSubmit={crearUsuario} className="mx-auto">

                                <div className="input-group form-group ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text my-2"><i className="fas fa-image"></i></span>
                                    </div>
                                    <input name='imguser' type='text' className="form-control my-2" placeholder="Put image url"></input>

                                </div>


                                <div className="input-group form-group ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text my-2"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input type="text" className="form-control my-2" name="firstname" placeholder="First Name" required></input>

                                </div>


                                <div className="input-group form-group ">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text my-2"><i className="fas fa-user-plus"></i></span>
                                    </div>
                                    <input type="text" className="form-control my-2" name="lastname" placeholder="Last Name" required></input>

                                </div>
                                <div className="input-group form-group ">
                                    <div className="input-group-prepend ">
                                        <span className="input-group-text my-2"><i className="fas fa-envelope"></i></span>
                                    </div>
                                    <input type="mail" className="form-control my-2" name="email" placeholder="Email" required></input>
                                </div>

                                <div className="input-group form-group ">
                                    <div className="input-group-prepend ">
                                        <span className="input-group-text my-2"><i className="fas fa-key"></i></span>
                                    </div>
                                    <input type="password" className="form-control my-2" name="password" placeholder="Password" required></input>
                                </div>



                                <div className="form-group">

                                    <button type="submit" value="" className="btn float-right login_btn my-2">Sign Up</button>
                                </div>
                            </form>

                        </div>





                        {/* <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                You have an account?<LinkRouter to="/signin">Sign In</LinkRouter>
                            </div>

                        </div> */}


                    </div>


           

                </div>


            </div>
        </main>
    )
}

export default Pruebaform