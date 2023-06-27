
export const addItem=(details)=>{
    return {
        type:"ADDITEM",
        payload:details
    }
}
export const delItem=(details)=>{
    return {
        type:"DELITEM",
        payload:details
    }
}