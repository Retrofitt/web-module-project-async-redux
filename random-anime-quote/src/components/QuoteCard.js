import React, {useEffect} from "react";
import '../App.css';
import { connect } from 'react-redux';
import { newQuote, fetFailure} from '../actions'


const QuoteCard = (props)=>{

    const {data, isFetching, error} = props
    useEffect(()=>{
        props.newQuote();
    },[]);

    if(error){
        return(<div className='card'>
            <h2>Oh no, you got an error!</h2>
            <p>Error:{error}</p>
        </div>)
    }

    if(isFetching){
        return(<div className='card'>
            <h2>Getting your anime quote!</h2>
        </div>)
    }

    const handleClick = ()=>{
        props.newQuote();
    }
    

    return(<div className='card'>
        <div className='quote-section'>
            <h2>
                <span className='anime-name'> {data.anime} </span>
            </h2>
            <p className='anime-quote'>" {data.quote} "</p>
            <p className='quote-credit'> 
                <span className='anime-character'>- {data.character} </span>
            </p>    
        </div>
        <input
            name='submit'
            type='submit'
            className='btn'
            value='New quote!'
            onClick={handleClick}
        />
        {console.log(props.data.anime)}
    </div>)
}

const mapStateToProps = state =>{
    return{
        data: state.data,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { newQuote, fetFailure })(QuoteCard);