import React from 'react'
import image from "../images/img_4.png";
import "./aboutus.css"
export default function Aboutus() {
    return (
        <section className="container-fluid p-4 about"  >
            <div className="row d-flex justify-content-around align-item-center">
                <div className="col-lg-5 text-white">

                    <h1 className="h2 text-center my-2 ">ABOUT US</h1>
                    <div className="mx-auto rounded" style={{ height: "5px", background: "#e1b7bf", width: "120px" }}>

                    </div>

                    <p className="parag my-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac lorem placerat nisl elementum gravida. Integer ornare lectus odio, sagittis tincidunt sapien cursus ut. Morbi sapien ex, tristique id scelerisque nec, maximus non massa. Cras velit ex, fringilla a nisi in, tristique eleifend leo. Vestibulum id neque a arcu porttitor maximus. Fusce tellus metus, mollis ac ullamcorper ac, laoreet ut risus. Donec in mauris nec libero suscipit fermentum a id massa. Fusce et ligula elementum, dictum dolor ut, porta neque. Donec sed suscipit turpis, in feugiat nisi.

                        Phasellus at elit tellus. Sed diam odio, feugiat et mollis non, varius eu mi. Ut egestas elit ac finibus pharetra. Proin eget tempor felis. Cras porttitor
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src={image} className="w-100 " />
                </div>
            </div>
        </section>
    )
}

