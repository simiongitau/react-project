import React from 'react'
import img1 from '../components/images/img_6.jpg'
import img2 from '../components/images/img_7.png'
import img3 from '../components/images/img_8.jpg'
import img4 from '../components/images/img_9.png'
import img5 from '../components/images/img_10.png'
export default function () {
    return (
        <div className=" p-0 container-fluid m-0">
            <div className="row w-100 m-auto">
                <div className="col-lg-3 col-sm-6 col-12 p-1 ">
                    <img src={img1} className="w-100" />
                </div>
                <div className="col-lg-3 col-sm-6 col-12 p-1 ">
                    <img src={img2} className="w-100" />
                </div>
                <div className="col-lg-3 col-sm-6 col-12 p-1 ">
                    <img src={img3} className="w-100" />
                </div>
                <div className="col-lg-3 col-sm-6 col-12 p-1 ">
                    <img src={img4} className="w-100" />
                </div>
                <div className="col-lg-3 col-sm-6 col-12 p-1 ">
                    <img src={img5} className="w-100" />
                </div>
                <div className="col-lg-3 col-sm-6 col-12 p-1 ">
                    <img src={img4} className="w-100" />
                </div>
                <div className="col-lg-3 col-sm-6 col-12 p-1 ">
                    <img src={img1} className="w-100" />
                </div>
                <div className="col-lg-3 col-sm-6 col-12 p-1 ">
                    <img src={img2} className="w-100" />
                </div>
            </div>

        </div>
    )
}
