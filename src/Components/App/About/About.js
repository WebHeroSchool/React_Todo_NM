import React, {useEffect, useState} from 'react';
import Contacts from "./Contacts/Contacts";
import Repositories from "./Repositories/Repositories";
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';

const octokit = new Octokit();

const About = () => {

  const InitialState = {
    isLoading: true,
    repoList: [],
    username: 'Natalina27',
    fetchReposSuccess: false,
    error: '',
    page: 0
  };

  const InitialResp = {
    avatarUrl: '',
    name: '',
    bio: '',
    error: ''
  };

  const [state, setState] = useState(InitialState);
  const [resp, setResp] = useState(InitialResp);

  useEffect(() => {

      const user = state.username;

   octokit.repos.listForUser({
          username: user,
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
            ...state,
          error: err,
          isLoading: false,
          fetchReposSuccess: false
        });
      });

   octokit.users.getByUsername({
      username: user
    })
      .then((response) => {
        setResp({
          ...resp,
          avatarURL: response.data.avatar_url,
          name: response.data.name,
          bio: response.data.bio
        });
      })
      .catch(err =>{
        setResp({
            ...resp,
          error: err
        });
      });
    }, []);
    const reposOnPage = 3;
    const displayRepo = () => {
        const startRepo = state.page * reposOnPage;
        return state.repoList.slice(startRepo, (startRepo + reposOnPage));
    }

  return (
      <>
        <div className={styles.about}>
                <Contacts
                    name = {resp.name}
                    avatar = {resp.avatarURL}
                    bio = {resp.bio}
                />
                <Repositories
                    isLoading = {state.isLoading}
                    reposSuccess = {state.fetchReposSuccess}
                    stateError = {state.error}
                    respError = {resp.error}
                    repoList = {displayRepo()}
                />
        </div>
      </>
  );
};

export default About;
