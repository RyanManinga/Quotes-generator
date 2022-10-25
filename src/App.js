import React from 'react';
import Card, { Header } from './Card';
import { Footer } from './Footer';

class App extends React.Component {
    render() {
        return(
            <>
                <Header 
                header = 'Random Joke Quotes' //props make your components more reusable
                />
                <Card />
                <Footer />
            </>
        );
    }
}


export default App;