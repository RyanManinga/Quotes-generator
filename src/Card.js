import React from 'react';
import Quotes from './database';

export function Header() {
    return(
        <>
            <h1>Random Quotes</h1>
        </>
    );
}

function Card() {
    const[before, after] = React.useState();
    const objectKeys =  Object.keys(Quotes);
    const randomNumber = Math.floor(Math.random() * objectKeys.length);
    const val = objectKeys[randomNumber];
    //changing state back and forth
    function randomQuote() { after(prev => !prev); }
    
    const changeState = Quotes[val].quote;
    return(
        <>
            <div className='main-container'>
                <div className='mini-container'>
                    <p>{before ? changeState: changeState}</p>
                </div>
            </div>

            <button onClick={ randomQuote } className='generate-quotes'>Get Quote</button>
        </>
    );
}

export default Card; 