import React, {useEffect} from "react";
import "./Modal.css"

const Modal = ({show, onHide}) => {

    useEffect(() => {
        if (show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [show])
    return show && <>
        <div className="modal-mask"/>
        <div className="modal-content">
            <h3 onClick={() => onHide()} style={{textAlign: 'right', paddingRight: '20px'}}>X</h3>
            <div className="modal-content-pdd">
                <h2 style={{textAlign: 'center', lineHeight: '35px', marginTop: 0}}>Subscribe to newsletter</h2>
                <form role="grid"
                      action="https://sperax.us19.list-manage.com/subscribe/post?u=5b6783fe1337881c06a14dd4d&amp;id=15b8a3b990"
                      method="post" target="_blank" className="next-medium f_r_b">
                    <div className="dialogContainer">
                        <input id="EMAIL" placeholder="enter email" name="EMAIL"/>
                        <button className="darkBtn" type="submit">Subscribe</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}
export default Modal;