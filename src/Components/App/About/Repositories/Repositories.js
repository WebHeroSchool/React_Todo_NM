import React from 'react';
import styles from './Repositories.module.css';
import RepoItem from "./RepoItem/RepoItem";

const Repositories = ({ repoList }) => {
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
      <div className={styles.wrap}>
       <h2 className={styles.title}>
           My repositories on <a href='//github.com/'  target='_blank' rel='noopener noreferrer' className = {styles.link}>github.com</a>
       </h2>
          <div className={styles.content}>
              <ul className={styles.list}>
                  {repList}
              </ul>
          </div>

        </div>
  );
};

export default Repositories;
