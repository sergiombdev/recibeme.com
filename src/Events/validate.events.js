/* eslint-disable no-useless-escape */
export const isEmpty = (val) => /^([#@£$-/:-?{-~!"^_`\[\]a-zA-Z0-9]){6,25}$/g.exec(val);

export const isCellPhone = (val) => /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g.exec(val );

export const validatePassword = (val) => /(?=.*[A-Z])(?=.*[0-9])[#@£$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{6,25}/g.exec(val);

export const isEmail = (val) => /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/g.exec(val);