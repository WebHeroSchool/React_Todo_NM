import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import { CardContent, CircularProgress } from '@material-ui/core';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const About = () => {
  const Initialstate = {
    isLoading: true,
    repoList: [],
    username: 'Natalina27',
    fetchReposSuccess: false,
    error: ''
  };
  const Initialresp = {
    avatarUrl: '',
    name: '',
    error: ''
  };


  const [state, setState] = useState(Initialstate);
  const [resp, setResp] = useState(Initialresp);

  useEffect(() => {
    octokit.repos.listForUser({
      username: state.username,
      per_page: 100,
      since: '2020-01-01'
    })
      .then(({ data }) => {
        setState({
          ...state,
          repoList: data,
          isLoading: false,
          fetchReposSuccess: true
        });
      })
      .catch(err =>{
        setState({
          error: err,
          isLoading: false,
          fetchReposSuccess: false
        });
      });

    octokit.users.getByUsername({
      username: state.username
    })
      .then((response) => {
        setResp({
          ...state,
          avatarURL: response.data.avatar_url,
          name: response.data.name
        });
      })
      .catch(err =>{
        setResp({
          error: err
        });
      });
  }, [state]);
  return (
            <CardContent className={styles.wrap}>
                <h1>{state.isLoading ? <CircularProgress color="secondary"/> : 'ABOUT' }</h1>
                {!state.isLoading
                && <div>
                    {!state.fetchReposSuccess ? 'Something went wrong.... ' + state.error + resp.error
                      : <div className={styles.aboutMe}>
                            <div className={styles.myName}>
                                 {resp.name}
                            </div>

                            <div className={styles.myImage}>
                                <img src={resp.avatarURL} alt={resp.name}/>
                            </div>
                            <div className={styles.myRepos}>
                                My repos:
                            </div>
                            <ul>
                                {state.repoList.map(repo => (
                                    <li key={repo.id}>
                                    <a href={repo.html_url}
                                       target="blank"
                                       >
                                        {repo.name}
                                    </a>

                                </li>))}
                            </ul>
                        </div>
                    }
                </div>
                }
            </CardContent>
  );
};

export default About;
