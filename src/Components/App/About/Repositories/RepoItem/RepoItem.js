import React from 'react';

const RepoItem = ({value, homepage, repoUrl, description, forks, language, stargazers, update}) => {
  return (
      <div>
        <div>
            <a href={repoUrl} target='_blank' >{value}</a>
            {homepage}
            <div>{description}</div>
            <div>
                <div>
                    <div>{language}</div>
                </div>
                <div>
                    <div>{stargazers}</div>
                </div>
            </div>
            <div>
                <div>{forks}</div>
            </div>
            <div>
                <div>{update}</div>
            </div>
        </div>
      </div>
  );
};

export default RepoItem;
