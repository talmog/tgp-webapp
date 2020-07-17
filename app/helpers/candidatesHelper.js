import { toPrecision } from './numberHelper';
export const getVotesNeededState = (
  chamberName,
  district,
  state,
  user = null,
) => {
  let votesNeededState;
  if (chamberName === 'presidential') {
    votesNeededState = user?.shortState;
  } else if (chamberName === 'senate') {
    votesNeededState = state || '';
  } else {
    votesNeededState = `${state}-${district}`;
  }
  return votesNeededState;
};

export const convertURI = url => {
  let converted;
  try {
    converted = url ? decodeURI(url) : null;
  } catch (e) {
    converted = url;
    // console.log(e);
  }
  return converted;
};

export const getComparedIncumbent = (totalRaised, incumbent) => {
  const raised = incumbent.raised || incumbent.combinedRaised;
  let bigFundsPerc = (raised - incumbent.smallContributions) / raised;
  bigFundsPerc = toPrecision(bigFundsPerc);
  const comparedIncumbent = {
    name: incumbent.name,
    raised,
    bigFundsPerc,
    isFakeIncumbent: incumbent.isFakeIncumbent,
  };
  comparedIncumbent.xTimes = (raised / totalRaised).toFixed(2);
  comparedIncumbent.relativePerc = ((totalRaised * 100) / raised).toFixed(2);

  comparedIncumbent.xTimes = toPrecision(raised / totalRaised);
  comparedIncumbent.relativePerc = toPrecision((totalRaised * 100) / raised);
  comparedIncumbent.bigMoneyFunds = raised * bigFundsPerc;
  return comparedIncumbent;
};

export const getFakeIncumbentOrIncumbentLabel = isFakeIncumbent =>
  isFakeIncumbent ? 'top funded candidate' : 'incumbent';

export const getCombinedReportDate = (
  { reportDate, outsideReportDate },
  incumbent,
) =>
  reportDate ||
  outsideReportDate ||
  (incumbent && incumbent.reportDate) ||
  '02/12/2020';

export const getOpenSecretLink = (chamber, candidate) => {
  const { openSecretsId, uuid, isIncumbent } = candidate;
  let openSecretLink = 'https://www.opensecrets.org/';
  if (chamber === 'presidential') {
    openSecretLink += `2020-presidential-race/candidate?id=${openSecretsId}`;
  } else if (isIncumbent) {
    openSecretLink += `members-of-congress/summary?cycle=2020&type=C&cid=${openSecretsId}`;
  } else if (uuid) {
    const stateDistrict = uuid.split('_')[1];
    openSecretLink += `races/candidates?cycle=2020&id=${stateDistrict}&spec=N`;
  }
  return openSecretLink;
}