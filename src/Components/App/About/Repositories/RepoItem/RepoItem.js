import React from 'react';
import Stargazers from '../../../../../images/star.png';
import Forks from '../../../../../images/fork.png';
import styles from '../../Repositories/RepoItem/RepoItem.module.css';

const RepoItem = ({value, homepage, repoUrl, description, forks, language, stargazers, update}) => {
  return (
      <div className={styles.wrap}>
            <div className={styles.title}>
            <a href={repoUrl} target='_blank' >{value}</a>
            {homepage}
            <div className={styles.description}>{description}</div>
            <div className={styles.info}>
                <div className={styles.param}>

                </div>
                {language}
            </div>
                <div className={styles.param}>
                    <img src={Stargazers} alt='stargazers' className = {styles.icon} />
                    <div>{stargazers}</div>
                </div>
            </div>
            <div className={styles.param}>
                <img src={Forks} alt='forks' className = {styles.icon} />
                <div>{forks}</div>
            </div>
            <div>
                <div>Updated on {update}</div>
            </div>
      </div>
  );
};

export default RepoItem;
