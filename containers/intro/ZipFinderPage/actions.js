import types from './constants';

const loadZipAction = (zip, redirect = false) => ({
  type: types.LOAD_ZIP,
  zip,
  redirect,
});

const loadZipActionSuccess = zipWithDistricts => ({
  type: types.LOAD_ZIP_SUCCESS,
  zipWithDistricts,
});

const loadZipActionError = error => ({
  type: types.LOAD_ZIP_ERROR,
  error,
});

const loadAllPresidentialAction = () => ({
  type: types.LOAD_ALL_PRESIDENTIAL,
});

const loadAllPresidentialActionSuccess = presidential => ({
  type: types.LOAD_ALL_PRESIDENTIAL_SUCCESS,
  presidential,
});

const loadAllPresidentialActionError = error => ({
  type: types.LOAD_ALL_PRESIDENTIAL_ERROR,
  error,
});

const loadHouseCandidatesAction = (state, districtNum) => ({
  type: types.LOAD_HOUSE_CANDIDATES,
  state,
  districtNum,
});

const loadHouseCandidatesActionSuccess = houseCandidates => ({
  type: types.LOAD_HOUSE_CANDIDATES_SUCCESS,
  houseCandidates,
});

const loadHouseCandidatesActionError = error => ({
  type: types.LOAD_HOUSE_CANDIDATES_ERROR,
  error,
});

const loadSenateCandidatesAction = state => ({
  type: types.LOAD_SENATE_CANDIDATES,
  state,
});

const loadSenateCandidatesActionSuccess = senateCandidates => ({
  type: types.LOAD_SENATE_CANDIDATES_SUCCESS,
  senateCandidates,
});

const geolocationToDistrictAction = coords => ({
  type: types.GEOLOCATION_TO_DISTRICT,
  coords,
});

const geolocationToDistrictActionSuccess = geoLocation => ({
  type: types.GEOLOCATION_TO_DISTRICT_SUCCESS,
  geoLocation,
});

const geolocationToDistrictActionError = error => ({
  type: types.GEOLOCATION_TO_DISTRICT_ERROR,
  error,
});

const userCountsActionSuccess = userCounts => ({
  type: types.USERS_COUNTS_SUCCESS,
  userCounts,
});

const loadBlocCandidateAction = bloc => ({
  type: types.LOAD_BLOC_CANDIDATE,
  bloc,
});

const loadBlocCandidateActionSuccess = blocCandidate => ({
  type: types.LOAD_BLOC_CANDIDATE_SUCCESS,
  blocCandidate,
});

const clearBlocCandidateAction = () => ({
  type: types.CLEAR_BLOC_CANDIDATE,
});

const setJoinCandidateAction = joinCandidate => ({
  type: types.SET_JOIN_CANDIDATE,
  joinCandidate,
});

const clearJoinCandidateAction = () => ({
  type: types.CLEAR_JOIN_CANDIDATE,
});

const setGrowCandidateAction = growCandidate => ({
  type: types.SET_GROW_CANDIDATE,
  growCandidate,
});

const clearGrowCandidateAction = () => ({
  type: types.CLEAR_GROW_CANDIDATE,
});

export default {
  loadZipAction,
  loadZipActionSuccess,
  loadZipActionError,
  loadAllPresidentialAction,
  loadAllPresidentialActionSuccess,
  loadAllPresidentialActionError,
  loadHouseCandidatesAction,
  loadHouseCandidatesActionSuccess,
  loadHouseCandidatesActionError,
  geolocationToDistrictAction,
  geolocationToDistrictActionSuccess,
  geolocationToDistrictActionError,
  loadSenateCandidatesAction,
  loadSenateCandidatesActionSuccess,
  userCountsActionSuccess,
  loadBlocCandidateAction,
  loadBlocCandidateActionSuccess,
  clearBlocCandidateAction,
  setJoinCandidateAction,
  clearJoinCandidateAction,
  setGrowCandidateAction,
  clearGrowCandidateAction,
};
