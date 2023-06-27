const cartItem = [];
const addItems=(state=cartItem,action)=>{
    switch(action.type){
        case "ADDITEM": return [
            ...state,
            action.payload
        ]
        break;
        case "DELITEM":
            return state =state.filter(x=>x.id !==action.payload.id)

        break;
        default: return state
        break;
    }
}
export default addItems;