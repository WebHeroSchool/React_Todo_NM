import React from 'react';
import Stargazers from '../../../../../images/star.png';
import Forks from '../../../../../images/fork.png';
import styles from '../../Repositories/RepoItem/RepoItem.module.css';
import classnames from "classnames";

const RepoItem = ({value, homepage, repoUrl, description, forks, language, stargazers, update}) => {
  return (
      <div className={styles.wrap}>
            <div className={styles.title}>
            <a href={repoUrl} target='_blank'  className={
                classnames({
                    [styles.link]: true,
                    [styles.repo]: true,
                })}>{value}</a>
            {homepage&& <a href={homepage} target='_blank' rel='noopener noreferrer' className = {styles.link}> </a>}
            </div>
            <div className={styles.description}>{description}</div>
            <div className={styles.info}>
                <div className={styles.param}>
                    <div className = {classnames({
                            [styles.circle]: true,
                            [styles.html]: language === 'HTML',
                            [styles.css]: language === 'CSS',
                            [styles.js]: language === 'JavaScript',
                        })}>
                </div>
                    {language}
                    <div className={styles.param}>
                    <img src={Stargazers} alt='stargazers' className = {styles.icon} />
                    <div>{stargazers}</div>
                </div>
            </div>
            <div className={styles.param}>
                <img src={Forks} alt='forks' className = {styles.icon} />
                <div>{forks}</div>
            </div>
                <div>Updated on {update}</div>
            </div>
      </div>
  );
};

export default RepoItem;
