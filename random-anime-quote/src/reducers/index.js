import {FETCHING, FET_SUCCESS, FET_FAIL, } from '../actions'

const initialState  ={
    data: {
        quote:'',
        character:'',
        anime:''    
    },
    isFetching: false,
    error:'' 
}

export const reducer = ( state = initialState, action)=>{
    switch(action.type){

        case(FETCHING):
            return({
                ...state,
                data:{},
                isFetching:true,
                error:''
            });
        case(FET_SUCCESS):
            return({
                ...state,
                data:action.payload,
                isFetching:false,
                error:''
            });
        case(FET_FAIL):
            return({
                ...state,
                data:{},
                isFetching:false,
                error:action.payload
            });
        default:
            return state;
        
    }
};

