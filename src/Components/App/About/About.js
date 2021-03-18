import React, {useEffect} from 'react';
import Contacts from './Contacts/Contacts';
import Repositories from './Repositories/Repositories';
import styles from './About.module.css';
import {Octokit} from '@octokit/rest';
import {useAbout} from './useAbout';

// todo Во время запроса должен отображать прелоудер.

const octokit = new Octokit();

export const About = () => {
    const {
        name, respError, publicRepos, avatarUrl, bio,isLoading,
        stateError, repoList, username, fetchReposSuccess,per_page,
        page, setPage, state, setState, resp, setResp, date
    } = useAbout();

    useEffect(() => {

        const user = username;

        octokit.repos.listForUser(
            {
            username: user,
            per_page,
            page,
            since: date,
            sort: 'updated',
            }
            )
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
            username: user,
            since: date
        })
            .then(({data}) => {
                console.log('about response.data',
                    data);
                setResp({
                    ...resp,
                    avatarUrl: data.avatar_url,
                    name: data.name,
                    bio: data.bio,
                    publicRepos: data.public_repos,
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

