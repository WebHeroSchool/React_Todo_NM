import React, {useEffect, useState} from 'react';
import Contacts from "./Contacts/Contacts";
import Repositories from "./Repositories/Repositories";
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';

// todo Во время запроса должен отображать прелоудер.

const octokit = new Octokit();

export const About = () => {

    const InitialState = {
        isLoading: true,
        repoList: [],
        username: 'Natalina27',
        fetchReposSuccess: false,
        stateError: '',
        per_page: 3
    };

    const InitialResp = {
        publicRepos: 0,
        avatarUrl: '',
        name: '',
        bio: '',
        respError: ''
    };

    const [state, setState] = useState(InitialState);
    const [resp, setResp] = useState(InitialResp);
    const [page, setPage] = useState(1);
    const {name, respError, publicRepos, avatarUrl, bio} = resp;
    const {isLoading, stateError, repoList, username, fetchReposSuccess,per_page} = state;

    useEffect(() => {

        const user = username;

        octokit.repos.listForUser({
            username: user,
            per_page,
            page,
            since: '2020-01-01'
        })
            .then(({data}) => {
                console.log("about data from octokit.repos.listForUser ", data);
                setState({
                    ...state,
                    repoList: data,
                    isLoading: false,
                    fetchReposSuccess: true
                });
            })
            .catch(err => {
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
                console.log('about response.data',
                    response.data);
                setResp({
                    ...resp,
                    avatarUrl: response.data.avatar_url,
                    name: response.data.name,
                    bio: response.data.bio,
                    publicRepos: response.data.public_repos,
                });
            })
            .catch(err => {
                setResp({
                    ...resp,
                    error: err
                });
            });
    }, [page]);



    return (
        <>
            <div className={styles.about}>
                <Contacts
                    name={name}
                    avatar={avatarUrl}
                    bio={bio}
                />
                <Repositories
                    isLoading={isLoading}
                    reposSuccess={fetchReposSuccess}
                    stateError={stateError}
                    respError={respError}
                    repoList={repoList}
                    page={page}
                    setPage={setPage}
                    per_page={per_page}
                    publicRepos={publicRepos}
                />
            </div>
        </>
    );
};

