import axios from "axios"

export const FETCHING = 'FETCHING'
export const FET_SUCCESS = 'FET_SUCCESS'
export const FET_FAIL = 'FET_FAIL'



export const newQuote=()=>dispatch =>{
    dispatch(fetching());

    axios.get('https://animechan.vercel.app/api/random')
        .then(res=>{
            dispatch(fetSuccessful(res.data))
        })
        .catch(err=>{
            console.error(err)
        })

}



export const fetching = ()=> ({type:FETCHING})

export const fetSuccessful = (data)=>{
    return({type:FET_SUCCESS, payload:data})
}

export const fetFailure = (error)=>{
    return({type:FET_FAIL, payload:error})
}