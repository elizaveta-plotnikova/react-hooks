import React from 'react';
import { useContext } from 'react';
import { GitHubContext } from '../context/github/gitHubContext';
import { useEffect } from 'react';

const ProfilePage = ({match}) => {
    const github = useContext(GitHubContext);
    const name = match.params.name;
    

    useEffect(() => {
        github.getUser(name);
        // github.getRepos(id);
    }, []);
    
   
    const owner = github.user.owner;
    console.log('owner', owner);

    return (
        <div className="card mb-3">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src="..." className="card-img" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <button type="button" className="btn btn-success mr-2">Success</button>
                        <button type="button" className="btn btn-danger mr-2">Danger</button>
                        <button type="button" className="btn btn-info mr-2">Info</button>
                        <button type="button" className="btn btn-dark mr-2">Dark</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;