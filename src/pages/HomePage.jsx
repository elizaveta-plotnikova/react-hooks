import React from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
 
const HomePage = () => {

    return (
        <>
            <Search />
            <div className="row">
                <div className="col-sm-4">
                    <Card />
                </div>
            </div>
        </>
    )
    
}

export default HomePage;