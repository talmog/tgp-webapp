import types from './constants';

const loadAllCandidatesAction = (onlyNoData = false, withPresidential=false, withoutTwitter=false) => ({
  type: types.LOAD_ALL_CANDIDATES,
  onlyNoData,
  withPresidential,
  withoutTwitter
});

const loadAllCandidatesActionSuccess = candidates => ({
  type: types.LOAD_ALL_CANDIDATES_SUCCESS,
  candidates,
});

const loadAllCandidatesActionError = error => ({
  type: types.LOAD_ALL_CANDIDATES_ERROR,
  error,
});

export default {
  loadAllCandidatesAction,
  loadAllCandidatesActionSuccess,
  loadAllCandidatesActionError,
};
