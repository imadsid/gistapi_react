 import React, { useEffect, useState } from 'react'
 import Gist from './Gist'
 import './styles.css'
 import { Octokit } from "@octokit/core";

const GistList = (props) => {
  const [gists, setGists] = useState([]);
//   const octokit = new Octokit({auth: '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'});
const octokit = new Octokit();
  const username = props.username;
  
  useEffect(() => {  
    
    const allGists =  octokit.request(
        `GET /users/{username}/gists`,{username}
    ).then(
        res => {
            setGists(res.data);
        }
    ).catch(err => {
        console.log(err)
    })
      
  }, [{username}])
    return (
    <>
                   {(gists.length) ? (
                    <div>
                            <ul className = "card-cover-ul">
                                {gists.map(gist => (                
                                    <Gist key={gist.id} gistData={gist}/>
                                ))}
                            </ul>
                    </div>
                            ) : (
                                <div className="error-box">
                                    <p className="text-danger">Results not found</p>
                                </div>
                )}

    </>
    );
}

export default GistList