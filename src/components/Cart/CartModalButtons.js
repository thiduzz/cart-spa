import React from 'react';
import {STEP_LIST, STEP_CHECKOUT, STEP_PAYMENT, STEP_FINISH} from "./CartModal"
import {useSelector} from "react-redux";

const CartModalButtons = ({onClose: onCloseHandler, onNext: onNextHandler, step}) => {
    const {items, isCustomerValid} = useSelector((state) => state.cart)
    const hasItemsInCart = items.length > 0;
    const disabledBtn = !isCustomerValid
    return (
        <React.Fragment>
            { step === STEP_LIST && <div className="flex flex-row justify-between w-full">
                <button onClick={onCloseHandler} className="text-2xl">Close</button>
                {hasItemsInCart && <button onClick={onNextHandler}  className="bg-red-400 text-white-100 px-6 py-3 rounded-2xl text-2xl">Checkout</button>}
            </div> }
            { step === STEP_CHECKOUT && <div className="flex flex-row justify-between w-full">
                <button onClick={onCloseHandler} className="text-2xl">Cancel</button>
                {hasItemsInCart && <button onClick={onNextHandler} disabled={disabledBtn} className="bg-red-400 text-white-100 px-6 py-3 rounded-2xl text-2xl">Order</button>}
            </div> }
            { step === STEP_PAYMENT && <div className="flex flex-row justify-between w-full">
                <button onClick={onCloseHandler} className="text-2xl">Cancel</button>
                {hasItemsInCart && <button onClick={onNextHandler}  className="bg-red-400 text-white-100 px-6 py-3 rounded-2xl text-2xl">Pay</button>}
            </div> }
            { step === STEP_FINISH && <div className="flex flex-row justify-between w-full">
                <button onClick={onCloseHandler} className="text-2xl">Finish</button>
            </div> }

        </React.Fragment>
    );
};

export default CartModalButtons;