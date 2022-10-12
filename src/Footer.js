import React from 'react';
const twitter = require('./images/twitter.png');
const github = require('./images/github.png');
const linkedin = require('./images/linkedin.png')

export function Footer() {
    const date = new Date().getFullYear();
    return(
        <>
            <div className='line'></div>
            <p>Follow me on social media &copy;{date}</p>

            <div className='social-icons'>
                <div>
                    <a href='https://twitter.com/RyanManinga' rel='noreferrer' target="_blank">
                        <img src={twitter} alt='twitter logo' width='45px'></img> </a>
                </div>

                <div>
                    <a href='https://www.linkedin.com/in/ryan-maninga-8073811a4/' rel='noreferrer' target="_blank" >
                        <img src={linkedin} alt='twitter logo' width='45px'></img></a>
                </div>

                <div>
                    <a href='https://github.com/RyanManinga' rel='noreferrer' target="_blank">
                        <img src={github} alt='twitter logo' width='45px'></img></a>
                </div>

            </div>
        </>
    );
}