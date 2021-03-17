import React, {useEffect, useState} from 'react';
import Contacts from "./Contacts/Contacts";
import Repositories from "./Repositories/Repositories";
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';

// todo Во время запроса должен отображать прелоудер.
//todo pagination

const octokit = new Octokit();

const About = () => {

  const InitialState = {
    isLoading: true,
    repoList: [],
    username: 'Natalina27',
    fetchReposSuccess: false,
    error: '',
  };

  const InitialResp = {
    publicRepos: 0,
    avatarUrl: '',
    name: '',
    bio: '',
    error: ''
  };

  const [state, setState] = useState(InitialState);
  const [resp, setResp] = useState(InitialResp);
  const [page, setPage] = useState(1);

  useEffect(() => {
      const user = state.username;
      octokit.users.getByUsername({
          username: user
      })
          .then((response) => {
              console.log(response.data);
              setResp({
                  ...resp,
                  avatarURL: response.data.avatar_url,
                  name: response.data.name,
                  bio: response.data.bio,
                  publicRepos: response.data.public_repos,
              });
          })
          .catch(err =>{
              setResp({
                  ...resp,
                  error: err
              });
          });
      console.log(page);
  }, []);

  useEffect(() => {

      const user = state.username;

   octokit.repos.listForUser({
          username: user,
          per_page: 3,
          page,
          since: '2020-01-01'
    })
      .then(({ data }) => {
          console.log("data", data);
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
    }, [page]);

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
                    repoList = {state.repoList}
                    page = {page}
                    setPage = {setPage}
                    publicRepos = { resp.publicRepos }
                />
        </div>
      </>
  );
};

export default About;
