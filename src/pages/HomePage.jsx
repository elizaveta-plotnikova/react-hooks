import React, { useContext } from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import { GitHubContext } from '../context/github/gitHubContext';

 
const HomePage = () => {
    const users = useContext(GitHubContext);
    console.log('users home', users.users);

    return (
        <>
            <Search />
            <div className="row row-cols-1 row-cols-md-3">
                {
                    users.users.map(user => {
                        return <Card user={user} key={user.id} />
                    })
                }
            </div>
        </>
    )
    
}

export default HomePage;