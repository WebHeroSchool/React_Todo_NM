import React from 'react';
import styles from './Repositories.module.css';
import RepoItem from "./RepoItem/RepoItem";

const Repositories = ({ repoList }) => {
    console.log('repoList', repoList);
    const repList = repoList.map(repo => <li key={repo.id}>
                <RepoItem
                    value = {repo.name}
                    homepage = {repo.homepage}
                    repoUrl = {repo.html_url}
                    description = {repo.description}
                    language = {repo.language}
                    stargazers = {repo.stargazers_count}
                    forks = {repo.forks_count}
                    update = {repo.updated_at}
                />

            </li>);
  return (
      <div className={styles.repos}>
       <h2>Repositories</h2>
        <ul className={styles.list}>
            {repList}
        </ul>
        </div>
  );
};

export default Repositories;
