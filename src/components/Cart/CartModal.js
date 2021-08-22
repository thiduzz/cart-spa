import React, {useEffect, useState} from 'react';
import Modal from "../UI/Modal";
import CartModalListing from "./CartModalListing";
import CartModalButtons from "./CartModalButtons";
import CartModalCheckout from "./CartModalCheckout";
import useHttp from "../../hooks/use-http";
import Alert from "../UI/Alert";
import {useDispatch, useSelector} from "react-redux";
import {cartActions} from "../../store/cart-slice";

export const STEP_LIST = 'list';
export const STEP_CHECKOUT = 'checkout';
export const STEP_PAYMENT = 'payment';
export const STEP_FINISH = 'ordered'

const CartModal = (props) => {
    const {items, customer, isCustomerValid} = useSelector((state) => state.cart)
    const dispatch = useDispatch();
    const [cartStep, setCartStep] = useState(STEP_LIST);
    const {sendRequest: storeOrder, error, isLoading: storeInProgress} = useHttp()
    useEffect(() => {
        if(items.length > 0){
            setCartStep(STEP_LIST)
        }
    },[items])


    const onCloseModalHandler = () => {
        props.onClose();
        dispatch(cartActions.setCustomer(null))
        setCartStep(STEP_LIST)
    }
    const onNextHandler = () => {
        switch (cartStep){
            case STEP_LIST:
                setCartStep(STEP_CHECKOUT)
                break;
            case STEP_CHECKOUT:
                if(isCustomerValid && !storeInProgress){

                    storeOrder({url: 'orders.json', method: 'POST', data: {
                            ...customer,
                            items: items,
                            orderedAt: new Date()
                        }}).then(function(response){
                        if(response && response.data){
                            dispatch(cartActions.resetCart())
                            setCartStep(STEP_PAYMENT)
                        }
                    });
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
            {cartStep === STEP_CHECKOUT && <CartModalCheckout error={error} submitting={storeInProgress}/>}
            {cartStep === STEP_PAYMENT && <div>Payment - integrate Stripe SDK</div>}
            {cartStep === STEP_FINISH && <div><Alert type="success" badge="Yeih!" message="Order submitted!"/>Finish Step</div>}
            {error && <Alert badge="Woops!" message={error} type="error"/>}
        </Modal>
    );
};

export default CartModal;