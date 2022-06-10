import React, {useEffect} from "react";
import "./Modal.css"
import close from "../Modal/close.svg";

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
            <div style={{
                textAlign: 'right',
                width: '100%',
                fontWeight: 'bold',
                fontSize: '24px'
            }}>
                <img style={{cursor: 'pointer', margin: '10px'}} src={close} onClick={() => onHide()} />
            </div>
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