import React, { useState, useEffect } from 'react';
import Contacts from "./Contacts/Contacts";
import Repos from "./Repos/Repos";
import styles from './About.module.css';
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
    bio: '',
    error: ''
  };

  const [state, setState] = useState(InitialState);
  const [resp, setResp] = useState(InitialResp);

  const user = state.username;

  useEffect(() => {
      octokit.users.getByUsername({
          username: user
      })
          .then((response) => {
              console.log('response', response);

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
        console.log('response', response);

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

   }, [state, user]);

  return (
      <>
        <div className={styles.about}>
                <Contacts
                    name = {resp.name}
                    avatar = {resp.avatarURL}
                    bio = {resp.bio}
                />
                <Repos
                    isLoading = {state.isLoading}
                    reposSuccess = {state.fetchReposSuccess}
                    stateError = {state.error}
                    respError = {resp.error}
                    repoList = {state.repoList}
                />
        </div>
      </>
  );
};

export default About;
