/*
 *
 * AdminPage actions
 *
 */

import types from './constants';

function loadCandidates(chamber) {
  return {
    type: types.LOAD_CANDIDATES,
    chamber,
  };
}

function loadCandidatesSuccess(candidates) {
  return {
    type: types.LOAD_CANDIDATES_SUCCESS,
    candidates,
  };
}

function loadCandidatesError(error) {
  return {
    type: types.LOAD_CANDIDATES_ERROR,
    error,
  };
}

function updateCandidate(id, updatedFields, chamber, isIncumbent) {
  return {
    type: types.UPDATE_CANDIDATE,
    id,
    updatedFields,
    chamber,
    isIncumbent,
  };
}

function updateCandidateSuccess(candidate) {
  return {
    type: types.UPDATE_CANDIDATE_SUCCESS,
    candidate,
  };
}

export default {
  loadCandidates,
  loadCandidatesSuccess,
  loadCandidatesError,

  updateCandidate,
  updateCandidateSuccess,
};
