import React from 'react';
import './Modal.scss'

const Modal = (props) => {
    const overlayClasses = "overlay " + (props.classOverlay ? props.classOverlay : '')
    const backdropClasses = "backdrop " + (props.classBackdrop ? props.classBackdrop : '')
    const modalClasses = "modal " + (props.className ? props.className : '')
    const onCloseHandler = () => { props.onClose() };
    return (
        <div className={ overlayClasses } >
            <div className={backdropClasses} onClick={onCloseHandler}/>
            <div className={ modalClasses }>
                <div>
                    {props.children}
                </div>
                <div id="modal-btn-container" className="mt-5 flex flex-row justify-end">
                    {props.buttons === undefined && <button onClick={onCloseHandler}>Okay</button>}
                    {props.buttons !== undefined && props.buttons}
                </div>
            </div>
        </div>
    );
};

export default Modal;