import React, {useContext, useEffect, useState} from 'react';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartModalListing from "./CartModalListing";
import CartModalButtons from "./CartModalButtons";
import CartModalCheckout from "./CartModalCheckout";

export const STEP_LIST = 'list';
export const STEP_CHECKOUT = 'checkout';
export const STEP_PAYMENT = 'payment';
export const STEP_FINISH = 'ordered'

const CartModal = (props) => {
    const {items, onChange: dispatchChangeToCart, isCustomerValid} = useContext(CartContext)
    const [cartStep, setCartStep] = useState(STEP_LIST);
    useEffect(() => {
        if(items.length > 0){
            setCartStep(STEP_LIST)
        }
    },[items])


    const onCloseModalHandler = () => {
        props.onClose();
        dispatchChangeToCart({type: 'RESET_CUSTOMER'})
        setCartStep(STEP_LIST)
    }
    const onNextHandler = () => {
        switch (cartStep){
            case STEP_LIST:
                setCartStep(STEP_CHECKOUT)
                break;
            case STEP_CHECKOUT:
                if(isCustomerValid){
                    setCartStep(STEP_PAYMENT)
                }
                break;
            case STEP_PAYMENT:
                setCartStep(STEP_FINISH)
                break;
            default:
                break;
        }
    }

    return (
        <Modal onClose={onCloseModalHandler} buttons={
            <CartModalButtons onClose={onCloseModalHandler} step={cartStep} onNext={onNextHandler}/>
        }>
            {cartStep === STEP_LIST && <CartModalListing/>}
            {cartStep === STEP_CHECKOUT && <CartModalCheckout/>}
            {cartStep === STEP_PAYMENT && <div>Payment Step</div>}
            {cartStep === STEP_FINISH && <div>Finish Step</div>}
        </Modal>
    );
};

export default CartModal;