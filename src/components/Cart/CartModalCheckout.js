import React, {useContext, useEffect} from 'react';
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import useInput from "../../hooks/use-input";

const CartModalCheckout = () => {
    const ctx = useContext(CartContext)
    const hasItemsInCart = ctx.items.length > 0;
    const totalValue = ctx.items.reduce((total, currentItem) => {
        return total + (currentItem.qty * currentItem.price)
    },0).toFixed(2)
    const {value: name, isValid: nameIsValid, inputHasError: nameHasError, onBlurHandler: nameOnBlurHandler, onChangeHandler: nameOnChangeHandler} = useInput((value) => value.trim().length > 0)
    // const {lastName,lastNameIsValid,lastNameHasError,lastNameOnBlurHandler,lastNameOnChangeHandler} = useInput((value) => value.trim().length > 0)
    // const {address,addressIsValid,addressHasError,addressOnBlurHandler,addressOnChangeHandler} = useInput((value) => value.trim().length > 0)
    // const {zipcode,zipcodeIsValid,zipcodeHasError,zipcodeOnBlurHandler,zipcodeOnChangeHandler} = useInput((value) => value.trim().length > 0)
    // const {city,cityIsValid,cityHasError,cityOnBlurHandler,cityOnChangeHandler} = useInput((value) => value.trim().length > 0)
    // const {country,countryIsValid,countryHasError,countryOnBlurHandler,countryOnChangeHandler} = useInput((value) => value.trim().length > 0)
    useEffect(()=>{
        if(nameIsValid){
            ctx.onChange({type: 'CHECKOUT_VALID'})
        }else{
            ctx.onChange({type: 'CHECKOUT_INVALID'})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[nameIsValid])
    return (
        <React.Fragment>
            <div>
                <Input value={name} id="name" label="Name" onBlur={nameOnBlurHandler} onChange={nameOnChangeHandler} hasError={nameHasError} />
            </div>
            {hasItemsInCart &&  <div className="font-fabarie font-bold text-2xl">
                <div className="border-t-2 border-black-100">Total: € {totalValue}</div>
            </div>}
        </React.Fragment>
    );
};

export default CartModalCheckout;