
import React, { useState } from 'react'
import "../format.css"
import People from "../../data/data";
const Account = () => {

  //username
  const [username, setUsername] = useState("");
  //email
  const [email, setEmail] = useState("");
  //password
  const [password, setPassword] = useState("");
  //cornformed password
  const [confirm, setconfirmPassword] = useState("");

  /*error message handle*/
  const [error, setError] = useState({
    type: "",
    message: "",//type username
  })

  /*success handle*/
  const [success, setSuccess] = useState(
    {
      type: "",
      message: ""
    }
  )



  const handleSubmit = () => {
    // console.log("username:",username);
    // console.log("email",email);
    // console.log("password",password);
    // console.log("password",confirm)
    if (username === "") {
      //  console.log("username required");
      setError(
        {
          ...error,
          type: "text",
          message: "username required"
        }
      )
      return;
    }
    else if (email === "") {
      // console.log("email requred");
      setError(
        {
          ...error,
          type: "email",
          message: "email required"
        });
      return;
    }
    else if (password === "") {
      // console.log("password required")
      setError(
        {
          ...error,
          type: "password",
          message: "password  required"
        });
      return;
    }
    else if (confirm === "") {
      // console.log("confirm password required");
      setError(
        {
          ...error,
          type: "confirm",
          message: "confirm  password required"
        });
      return;
    }
    else if (password !== confirm) {
      //  console.log("password does not match")
      setError(
        {
          ...error,
          type: "confirm",
          message: "unmatch password"
        });
      return;
    }
    else {
      //  console.log("success");
      setError(
        {
          type: "",
          message: ""
        }
      )

    }

    //  handling the database with the success and error function
    var name = true;
    for (const Person in People) {
      if (People[Person].username === username) {
        name = false;
        if (People[Person].email === email) {
          if (People[Person].password === password) {
            //  console.log("already have account")
            setError(
              {
                type: "final",
                message: "Account already exist"
              }
            )
          }
          else {
            //  console.log("incorect email or passord");
          }

        }
      }
    }
    if (name == true) {
      // console.log("new account added")
      setSuccess(
        {
          ...success,
          type: "success",
          message: "new account succefully created"
        }
      )
    }



  }









  return (

    <div className="form col-10 col-sm-10 col-lg-5 col-md-9">
      <h2 className="h2">create account</h2>
      <div className="input username">
        <label>username</label>
        <input type="text" value={username} name="username" onChange={(e) => setUsername(e.target.value)}
          className={error.message !== "" ? error.type === "text" && "error_border" : success.type === "success" && "success_border"}
        />

        {error.message !== "" && error.type === "text" && <>
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

      <div className="input emaile">
        <label>email</label>
        <input type="email" value={email} name="email" onChange={(e) => setEmail(e.target.value)}
          className={error.message !== "" ? error.type === "email" && "error_border" : success.type === "success" && "success_border"} />

        {error.message !== "" && error.type === "email" && <>
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
        <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}
          className={error.message !== "" ? error.type === "password" && "error_border" : success.type === "success" && "success_border"} />

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



      {/*--input password  --*/}
      <div className="input">
        <label>confirm password</label>
        <input type="password" value={confirm} name="confirm" onChange={(e) => setconfirmPassword(e.target.value)}
          className={error.message !== "" ? error.type === "confirm" && "error_border" : success.type === "success" && "success_border"} />

        {error.message !== "" && error.type === "confirm" && <>
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




      {/*--bumit button  --*/}
      <div className="button">
        <button type="submit" onClick={handleSubmit}>submit</button>
      </div>


      {/*-- sign link --*/}
      <div className="sign_link">
        <span type="final" className="final">{error.message}</span>
        <span type="success" className="success">{success.message}</span>
      </div>


    </div>
  )
}
export default Account
