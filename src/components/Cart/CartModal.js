import React from 'react';
import Modal from "../UI/Modal";

const CartModal = (props) => {
    return (
        <Modal onClose={props.onClose}>
            Cart Modal
        </Modal>
    );
};

export default CartModal;