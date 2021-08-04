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
                <div className="mt-5 flex flex-row justify-end">
                    <button onClick={onCloseHandler}>Okay</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;