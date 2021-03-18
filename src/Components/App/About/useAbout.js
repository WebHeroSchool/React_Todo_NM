import {useState} from "react";
export const useAbout = () => {
    const InitialState = {
        isLoading: true,
        repoList: [],
        username: 'Natalina27',
        fetchReposSuccess: false,
        stateError: '',
        per_page: 3,
        date: '2021-01-01',
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
    const {isLoading, stateError, repoList, username, fetchReposSuccess,per_page, date} = state;
    return {
        name, respError, publicRepos, avatarUrl, bio,isLoading, stateError,
        repoList, username, fetchReposSuccess,per_page,  page, setPage,
        state, setState, resp, setResp, date
    };
}
