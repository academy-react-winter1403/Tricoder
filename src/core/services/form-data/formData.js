import React from 'react'

const OnSetFormData =  (value) => {
    const formData = new FormData();
    const keys = Object.keys(value);
  
    keys.forEach((key) => {
      const items = value[key];
      formData.append(key, items);
    });
  
    return formData;
    
  };

export default OnSetFormData