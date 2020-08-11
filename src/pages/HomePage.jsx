import React from 'react';
import Search from '../components/Search';
import Card from '../components/Card';

 
const HomePage = () => {

    return (
        <>
            <Search />
            <div className="row row-cols-1 row-cols-md-3">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
    
}

export default HomePage;