import React, { useState, useEffect } from 'react';
import styles from './About.module.css';
import { CardContent, CircularProgress } from '@material-ui/core';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

const About = () => {
  const InitialState = {
    isLoading: true,
    repoList: [],
    username: 'Natalina27',
    fetchReposSuccess: false,
    error: ''
  };
  const InitialResp = {
    avatarUrl: '',
    name: '',
    error: ''
  };

  const [state, setState] = useState(InitialState);
  const [resp, setResp] = useState(InitialResp);

  useEffect(() => {
    octokit.repos.listForUser({
      username: state.username,
      per_page: 10,
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
              <div className={styles.about}>
                <h1>{state.isLoading ? <CircularProgress color="secondary"/> : 'ABOUT' }</h1>
                <div className={styles.myName}>
                  {resp.name}
                </div>
                <div className={styles.myImage}>
                  <img src={resp.avatarURL} alt={resp.name}/>
                </div>
              </div>
              <main className={styles.reps}>
                {!state.isLoading
                && <div>
                  {!state.fetchReposSuccess ? 'Something went wrong.... ' + state.error + resp.error
                      : <div className={styles.aboutMe}>
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
              </main>
            </CardContent>
  );
};

export default About;
