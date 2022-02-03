import React, { useState } from 'react'
import "../format.css";
import people from "../../data/data";
import { Link } from "react-router-dom";

const Login = () => {
    const [usernameField, setUsernameField] = useState("")
    const [paswordField, setPasswordField] = useState("");

    /*error handle*/
    const [error, setError] = useState({
        type: "",
        message: "",//type username
    })

    /*an success handle*/
    const [success, setSuccess] = useState({
        type: ""
    })





    const handlOnsubmit = () => {
        if (usernameField === "") {
            setError({
                ...error,
                type: "username",
                message: "username required"

            })
            return;
        }

        else if (paswordField === "") {
            setError(
                {
                    ...error,
                    type: "password",
                    message: "field required"

                }
            )
            return;
        }
        else {
            setError(
                {
                    ...error,
                    type: "",
                    message: ""
                }
            )
        }






        var name = false;
        for (const person in people) {
            if (people[person].username === usernameField) {
                name = true;
                if (people[person].username === usernameField && people[person].password === paswordField) {
                    setSuccess({
                        type: "success"
                    })



                    console.log("success");
                } else { console.log("incorrect password") }

            }
        }
        if (name == false) {
            setError({
                type: "tuk",
                message: "user does not exist!"
            })

            console.log("user does not exit")
        }
    }



    return (
        <div className="col-10 col-sm-10 col-lg-5 col-md-9">
            <h2 className="h2">logn in</h2>
            {/*-- input button*/}
            <div className="input username">
                <label>username/email</label>

                <input type="email" value={usernameField} onChange={(e) => {
                    setUsernameField(e.target.value);

                }} className={error.message !== "" ? error.type === "username" && "error_border" : success.type === "success" && "success_border"} />


                {error.message !== "" && error.type === "username" && <>
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span>{error.message}</span>
                </>
                }
                {
                    success.type === "success" && <>
                        <i className="success_color fa fa-check-circle-o" aria-hidden="true"></i>
                    </>
                }

            </div>

            {/*--input password  --*/}
            <div className="input">
                <label>password</label>
                <input type="password" value={paswordField} onChange={(e) => {
                    setPasswordField(e.target.value)

                }} className={error.message !== "" ? error.type === "password" && "error_border" : success.type === "success" && "success_border"} />


                {error.message !== "" && error.type === "password" && <>
                    <i className="error_color fa fa-exclamation-circle" aria-hidden="true"></i>
                    <span>{error.message}</span>
                </>
                }


                {
                    success.type === "success" && <>
                        <i className="success_color fa fa-check-circle-o" aria-hidden="true"></i>
                    </>
                }






            </div>

            {/*-- checkbox --*/}
            <div className="checkbox mx-5 px-3">
                <input type="checkbox" />
                <span>Remember me</span>
            </div>
            {(error.message !== "" && error.type === "tuk") && <>
                <span className="input error_text">
                    {error.message}
                </span>
            </>}

            {/*--bumit button  --*/}
            <div className="button">
                <button type="submit" onClick={handlOnsubmit}>login</button>
            </div>

            {/*-- sign link --*/}
            <div className="sign_link mx-5 px-3">
                <span>have no account? </span>
                <Link to="Account">click here to signup</Link>

            </div>
        </div>
    )
}
export default Login



