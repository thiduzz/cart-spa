import React, {useContext, useEffect} from 'react';
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";
import useInput from "../../hooks/use-input";
import Select from "../UI/Select";
import Countries from './Countries.js'

const validateRequired = (value) => value.trim().length > 0;
const validateMinLength = (value, minLength) => value.trim().length >= minLength;
const validateRegex = (value,regex) => regex.test(value.trim());

const CartModalCheckout = () => {
    const ctx = useContext(CartContext)
    const hasItemsInCart = ctx.items.length > 0;
    const totalValue = ctx.items.reduce((total, currentItem) => {
        return total + (currentItem.qty * currentItem.price)
    }, 0).toFixed(2)
    const {
        value: name,
        isValid: nameIsValid,
        inputHasError: nameHasError,
        onBlurHandler: nameOnBlurHandler,
        onChangeHandler: nameOnChangeHandler
    } = useInput((value) => validateRequired(value) && validateMinLength(value, 3))
    const {
        value: lastName,
        isValid: lastNameIsValid,
        inputHasError: lastNameHasError,
        onBlurHandler: lastNameOnBlurHandler,
        onChangeHandler: lastNameOnChangeHandler
    } = useInput((value) => validateRequired(value) && validateMinLength(value, 3))
    const {
        value: address,
        isValid: addressIsValid,
        inputHasError: addressHasError,
        onBlurHandler: addressOnBlurHandler,
        onChangeHandler: addressOnChangeHandler
    } = useInput((value) => validateRequired(value) && validateMinLength(value, 3))
    const {
        value: zipcode,
        isValid: zipcodeIsValid,
        inputHasError: zipcodeHasError,
        onBlurHandler: zipcodeOnBlurHandler,
        onChangeHandler: zipcodeOnChangeHandler
    } = useInput((value) => validateRequired(value) && validateMinLength(value, 3))
    const {
        value: city,
        isValid: cityIsValid,
        inputHasError: cityHasError,
        onBlurHandler: cityOnBlurHandler,
        onChangeHandler: cityOnChangeHandler
    } = useInput((value) => validateRequired(value) && validateMinLength(value, 3))
    const {
        value: country,
        isValid: countryIsValid,
        inputHasError: countryHasError,
        onBlurHandler: countryOnBlurHandler,
        onChangeHandler: countryOnChangeHandler
    } = useInput((value) => validateRequired(value) && validateMinLength(value, 3))

    useEffect(() => {
        if (nameIsValid && lastNameIsValid && addressIsValid && zipcodeIsValid && cityIsValid && countryIsValid) {
            ctx.onChange({type: 'CHECKOUT_VALID'})
        } else {
            ctx.onChange({type: 'CHECKOUT_INVALID'})
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [nameIsValid, lastNameIsValid, addressIsValid, zipcodeIsValid, cityIsValid, countryIsValid])
    return (
        <React.Fragment>
            <div>
                <Input value={name} id="name" label="Name" onBlur={nameOnBlurHandler} onChange={nameOnChangeHandler}
                       hasError={nameHasError} error="Name is required"/>
                <Input value={lastName} id="last_name" label="Last name" onBlur={lastNameOnBlurHandler}
                       onChange={lastNameOnChangeHandler} hasError={lastNameHasError} error="Last name is required"/>
                <Input value={address} id="address" label="Address (Street and house number)"
                       onBlur={addressOnBlurHandler} onChange={addressOnChangeHandler} hasError={addressHasError}
                       error="Address is invalid"/>
                <Input value={zipcode} id="zipcode" label="Zipcode" onBlur={zipcodeOnBlurHandler}
                       onChange={zipcodeOnChangeHandler} hasError={zipcodeHasError} error="Zipcode format is invalid"/>
                <Input value={city} id="city" label="City" onBlur={cityOnBlurHandler} onChange={cityOnChangeHandler}
                       hasError={cityHasError} error="City is required"/>
                <Select value={country} id="country" label="Country" onBlur={countryOnBlurHandler} options={Countries}
                       onChange={countryOnChangeHandler} hasError={countryHasError} error="Country is required"/>

            </div>
            {hasItemsInCart && <div className="font-fabarie font-bold text-2xl">
                <div className="border-t-2 border-black-100">Total: € {totalValue}</div>
            </div>}
        </React.Fragment>
    );
};

export default CartModalCheckout;