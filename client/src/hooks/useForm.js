// write your custom hook here to control your checkout form
import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
        if (window.localStorage.getItem(key)) {
            return JSON.parse(window.localStorage.getItem(key))
        }
        window.localStorage.setItem(key, JSON.stringify(initialValue))
        return initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value))
    };

    return [storedValue, setValue];
};

export const useForm = (key, initialValue) => {
    const [values, setValues] = useLocalStorage(key, initialValue);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const clearForm = e => {
        e.preventDefault();
        setValues(initialValue);
    };

    return [values, handleChanges, clearForm];
}