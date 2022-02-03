import React, { useState, useEffect } from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { ScreenSize } from '../Function';
export default function Navbar() {
    const justify_content = "collapse navbar-collapse  d-flex justify-content-lg-end justify-content-sm-around justify-content-between"
    const format = " border-bottom border-warning border-3";
    const [showDiv, setShowDiv] = useState(false)
    const [currentLink, setCurrentLink] = useState("home");
    const [carryChange, setCarryChange] = useState(
        {
            type: "home",
            message: `nav-link ${format}`
        }
    )
    const screenSize = ScreenSize();
    // console.log(screenSize);
    const handleEventNavbar = () => {
        if (showDiv === true) {
            setShowDiv(false)
        }
        else {
            setShowDiv(true)
        }
    }
    useEffect(
        () => {
            let cleanUp = true;
            if (screenSize <= 992) {
                // console.log("screen size less than 992")
                setShowDiv(false);
            }
            else {
                // console.log("screen is greater than 992 ")
                setShowDiv(true);
            }

            return () => cleanUp = false;
        }, [screenSize]
    )

    useEffect(() => {
        setCarryChange(
            {
                ...carryChange,
                type: currentLink
            }
        )

    }, [currentLink]
    );

    // zzDX
    const handleChanges = (link) => {
        // passing function as an argument 
        setCurrentLink(link)
        console.log(link)

    }


    return (
        // 

        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <div className="container-fluid">
                <div className="navbar_logo">
                    <Link className="navbar-brand " >cree<span>power</span>
                        <i className="fa fa-bolt"></i> </Link>
                    <div>

                    </div>
                </div>
                <button onClick={handleEventNavbar} className="navbar-toggler" type="Link" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>


                {showDiv === true &&
                    <div className={justify_content} id="navbarNav"  >
                        <ul className="navbar-nav col-lg-auto col-sm-4">
                            <li className="nav-item mx-1">
                                <Link to="/" className={carryChange.type === "home" ? ` ${carryChange.message} text-warning ` : "nav-link"} aria-current="page" onClick={() => {
                                    //  handleChanges("home");
                                    setCurrentLink("home");
                                }
                                }>Home</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link to="/about" className={carryChange.type === "about" ? ` ${carryChange.message} text-warning ` : "nav-link"} onClick={() => {
                                    // handleChanges("about");
                                    setCurrentLink("about");
                                }} >about</Link>
                            </li>

                            <li className="nav-item mx-1">
                                <Link to="project" as="/Project" className={carryChange.type === "project" ? ` ${carryChange.message} text-warning ` : "nav-link"} onClick={() => {
                                    // handleChanges("project");
                                    setCurrentLink("project")
                                }} >project</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link to="contacts" className={carryChange.type === "contact" ? ` ${carryChange.message} text-warning ` : "nav-link"} onClick={() => {
                                    // handleChanges("project");
                                    setCurrentLink("contact")
                                }} >Contact</Link>
                            </li>

                        </ul>
                        <div className="mx-3 col-md-4 d-md-block d-sm-flex flex-column">
                            <Link to="login" className="btn btn-primary text-uppercase mx-2">sign-in</Link>
                            <Link to="account" className="btn btn-outline-warning text-uppercase mx-2">sign-up</Link>
                        </div>
                    </div>
                }
            </div>
        </nav>


    )
}
