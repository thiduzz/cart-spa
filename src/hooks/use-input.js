import {useState} from 'react';

const useInput = (validateData) => {
    const [value, setValue] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [isTouched, setIsTouched] = useState(false)
    let inputHasError = !isValid && isTouched;

    const resetValue = () => {
        setValue('')
        setIsTouched(false)
    }
    const onBlurHandler = () => {
        setIsValid(validateData(value))
        setIsTouched(true)
    }

    const onChangeHandler = event => {
        setValue(event.target.value)
        setIsValid(validateData(event.target.value))
        setIsTouched(true)
    }

    return {value, inputHasError, isValid, onBlurHandler, onChangeHandler, resetValue};
};

export default useInput;