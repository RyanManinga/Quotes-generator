import React from 'react';
import Card, { Header } from './Card';
import { Footer } from './Footer';

class App extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Card />
                <Footer />
            </>
        );
    }
}


export default App;