import React from 'react'
import './footer.css';
export default function Footer() {
    return (
        <div className="main_footer"  >
            <div className="d-flex justify-content-center">
                <span className="my-3"><input type="text"></input> <button>SUBMIT</button></span>
            </div>

            <div className="na_list d-flex justify-content-center  text-white">
                <i className="bi bi-facebook px-2 "></i>
                <i className="bi bi-twitter px-2"></i>
                <i className="bi bi-linkedin px-2"></i>
                <i className="bi bi-instagram px-2"></i>
                <i className="bi bi-youtube px-2"></i>
            </div>
            <div className="d-flex justify-content-center text-white">
                <span className="my-2"><i class="bi bi-geo-alt"></i> <small>P.O BOX 000100, Nairobi CBD, Nairobi</small></span>
            </div>
            <div className="d-flex justify-content-center text-white">
                <span className="mb-4">&copy;&nbsp;<span>2020-2021 WPEngine,Inc All rights reserved</span></span>
            </div>
        </div>
    )
}
