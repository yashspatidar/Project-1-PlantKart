export const AddressReducer = (state,action)=>{
    switch(action.type){
        case "addName":{
            return {...state, name: action.payload}
        }
        case "addStreet":{
            return {...state, street: action.payload}
        }
        case "addCity":{
            return {...state, city: action.payload}
        }
        case "addState":{
            return {...state, state: action.payload}
        }
        case "addCountry":{
            return {...state, country: action.payload}
        }
        case "addZipCode":{
            return {...state, zipCode: action.payload}
        }
        case "addMobile":{
            return {...state, mobile: action.payload}
        }
        
        
        default:{ 
            return state;
        }
    }
}