import React from 'react';
import styles from './About.module.css';
import { CardContent, CircularProgress } from '@material-ui/core';
import { Octokit } from '@octokit/rest';

const octokit = new Octokit();

class About extends React.Component {
    state = {
      isLoading: true,
      repoList: [],
      username: 'Natalina27',
      fetchReposSuccess: false,
      error: ''
    };

    componentDidMount() {
      octokit.repos.listForUser({
        username: this.state.username
      }).then(({ data }) => {
        this.setState({
          repoList: data,
          isLoading: false,
          fetchReposSuccess: true
        });
      })
        .catch(err =>{
          this.setState({
            error: err,
            isLoading: false,
            fetchReposSuccess: false
          });
        });

      octokit.users.getByUsername({
        username: this.state.username
      })
        .then((response) => {
          this.setState({
            avatarURL: response.data.avatar_url,
            name: response.data.name
          });
        });
    }

    render() {
      const {
        isLoading, repoList, avatarURL, name, fetchReposSuccess, error
      } = this.state;
      return (
            <CardContent className={styles.wrap}>
                <h1>{isLoading ? <CircularProgress color="secondary"/> : 'ABOUT' }</h1>
                {!isLoading
                && <div>
                    {!fetchReposSuccess ? 'Something went wrong.... ' + error
                      : <div className={styles.aboutMe}>
                            <div className={styles.myName}>
                                 {name}
                            </div>

                            <div className={styles.myImage}>
                                <img src={avatarURL} alt={name}/>
                            </div>
                            <div className={styles.myRepos}>
                                My repos:
                            </div>
                            <ul>
                                {repoList.map(repo => (
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
    }
}

export default About;
