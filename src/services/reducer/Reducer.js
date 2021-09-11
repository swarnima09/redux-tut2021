import {ADD_TO_CART} from "../Constant"

const initialState =  {
    //since we will add multiple items so taking array
    cardData : []
}

export default function cardItems(state=[],action){
    // console.log(action,'ac')
    switch(action.type){
     case ADD_TO_CART:
            return [
                ...state,
                {cardData : action.data}
            ]
           
               default:
                return state
        }
}