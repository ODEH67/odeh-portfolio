import { useState, useEffect } from 'react';


const useFormLocalStorage = (initialData, storageKey) => {
const [formData, setFormData] = useState(() => {
    const storedData = localStorage.getItem(storageKey);
    return storedData ? JSON.parse(storedData) : initialData;
});

useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(formData));
}, [formData, storageKey]);

return [formData, setFormData];
};

export default useFormLocalStorage;
