/**
 *
 * AdminEditCandidate
 *
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

import MobileHeader from 'components/shared/navigation/MobileHeader';
import Nav from 'containers/shared/Nav';
import LoadingAnimation from 'components/shared/LoadingAnimation';
import { Body13, Body11, H1, H2, H3 } from 'components/shared/typogrophy';
import { candidateRoute, partyResolver } from 'helpers/electionsHelper';
import { BlueButton } from 'components/shared/buttons';
import RtfEditor from './RtfEditor';

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  padding-top: 36px;
  max-width: ${({ theme }) => theme.breakpoints.contentMax};
  margin: 0 auto;
`;

const StyledH1 = styled(H1)`
  margin: 1.5rem auto;
  text-align: center;
`;

const SaveButtonWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto 2rem;
`;

const AttrName = styled(Body11)`
  background-color: ${({ theme }) => theme.colors.grayC};
  font-weight: 600;
  padding: 0.5rem;
`;

const AttrValue = styled(Body11)`
  background-color: ${({ theme }) => theme.colors.grayC};
  padding: 0.5rem;
`;

const Input = styled(TextField)`
  && {
    .MuiInputBase-input {
      ont-size: 11px;
      line-height: 15px;
      letter-spacing: 0.5px;
      @media only screen and (min-width: ${({ theme }) =>
          theme.breakpoints.md}) {
        font-size: 14px;
        line-height: 18px;
      }
    }
  }
`;

function AdminEditCandidate({ candidate, saveCandidateCallback }) {
  window.onbeforeunload = () => {
    if (showSave) {
      return 'Are you sure you want to leave?';
    }
  };

  const [editableValues, setEditableValues] = useState(false);
  const [initialData, setInitialData] = useState(false);
  const [campaignWebsite, setCampaignWebsite] = useState('');
  const [info, setInfo] = useState('');
  const [campaignEdited, setCampaignEdited] = useState(false);
  const [infoEdited, setInfoEdited] = useState(false);
  const [editedCampaign, setEditedCampaign] = useState('');
  const [editedInfo, setEditedInfo] = useState('');

  const {
    openSecretsId,
    name,
    blocName,
    facebook,
    twitter,
    website,
    order,
    chamber,
    source,
    state,
    district,
    party,
    isAligned,
    isApproved,
    isBigMoney,
    isGood,
    smallContributions,
    combinedRaised,
    raised,
    outsideReportDate,
    campaignReportDate,
  } = candidate;

  useEffect(() => {
    if (candidate) {
      const initData = {
        openSecretsId: openSecretsId,
        blocName: blocName,
        source: source,
        facebook: facebook,
        twitter: twitter,
        website: website,
        order: order,
      };
      setInitialData(initData);
      setEditableValues(initData);
      if (candidate.campaignWebsite) {
        if (candidate.campaignWebsite.charAt(0) === '%') {
          setCampaignWebsite(decodeURIComponent(candidate.campaignWebsite));
        } else {
          setCampaignWebsite('<p>' + candidate.campaignWebsite+ '</p>');
        }
      }
      if (candidate.info) {
        if (candidate.info.charAt(0) === '%') {
          setInfo(decodeURIComponent(candidate.info));
        } else {
          setInfo('<p>' + candidate.info + '</p>');
        }
      }
    }
  }, [candidate]);

  let candData = [];
  if (candidate) {
    candData = [
      { name: 'Name', value: name },
      {
        name: 'Open Secrets ID',
        value: openSecretsId,
        editable: true,
        key: 'openSecretsId',
      },
      {
        name: 'Bloc Name',
        value: blocName,
        editable: true,
        key: 'blocName',
      },
      {
        name: 'source (Ballotpedia)',
        value: source,
        editable: true,
        key: 'source',
      },
      {
        name: 'Facebook',
        value: facebook,
        editable: true,
        key: 'facebook',
      },
      {
        name: 'Twitter',
        value: twitter,
        editable: true,
        key: 'twitter',
      },
      {
        name: 'Website',
        value: website,
        editable: true,
        key: 'website',
      },
      { name: 'Order', value: order, editable: true, key: 'order' },
      { name: 'Chamber', value: chamber },
      { name: 'State', value: state },
      { name: 'District', value: district },
      { name: 'party', value: partyResolver(party) },
      { name: 'Is Aligned', value: isAligned ? 'Yes' : 'No' },
      { name: 'Is Approved', value: isApproved ? 'Yes' : 'No' },
      { name: 'Is Big Money', value: isBigMoney ? 'Yes' : 'No' },
      { name: 'Is Good', value: isGood ? 'Yes' : 'No' },
      { name: 'Small Contributions', value: smallContributions },
      {
        name: 'Raised',
        value: combinedRaised ? combinedRaised : raised,
      },
      { name: 'Outside Report Date', value: outsideReportDate },
      { name: 'Campaign Report Date', value: campaignReportDate },
    ];
  }

  const onChangeField = (event, key) => {
    setEditableValues({
      ...editableValues,
      [key]: event.target.value,
    });
  };

  const showSave =
    infoEdited ||
    campaignEdited ||
    JSON.stringify(initialData) !== JSON.stringify(editableValues);

  const editInfo = value => {
    setEditedInfo(value);
    setInfoEdited(true);
  };

  const editCampaignWebsite = value => {
    setEditedCampaign(value);
    setCampaignEdited(true);
  };

  const saveCandidate = () => {
    const data = {};
    if (infoEdited) {
      data.info = editedInfo.toString('html');
    }
    if (campaignEdited) {
      data.campaignWebsite = editedCampaign.toString('html');
    }

    addIfEdited('openSecretsId', data);
    addIfEdited('blocName', data);
    addIfEdited('source', data);
    addIfEdited('facebook', data);
    addIfEdited('twitter', data);
    addIfEdited('website', data);
    addIfEdited('order', data);

    saveCandidateCallback(data, candidate);
  };

  const addIfEdited = (key, data) => {
    if (initialData[key] !== editableValues[key]) {
      data[key] = editableValues[key];
    }
  };

  return (
    <div style={{ backgroundColor: '#FFF' }}>
      <Nav />
      <MobileHeader />
      {candidate ? (
        <Wrapper>
          <StyledH1>Edit Candidate</StyledH1>
          <H2 className="text-center">
            <a href={candidateRoute(candidate)} target="_blank">
              {name}
            </a>
          </H2>
          <br />
          <br />
          {showSave && (
            <SaveButtonWrapper onClick={saveCandidate}>
              <BlueButton fullWidth>SAVE</BlueButton>
            </SaveButtonWrapper>
          )}
          <Grid container spacing={3}>
            {candData.map(data => (
              <React.Fragment key={data.name}>
                <Grid item xs={6}>
                  <AttrName>{data.name}:</AttrName>
                </Grid>
                <Grid item xs={6}>
                  {data.editable ? (
                    <Input
                      value={
                        editableValues[data.key] ? editableValues[data.key] : ''
                      }
                      label={data.name}
                      fullWidth
                      variant="outlined"
                      onChange={e => onChangeField(e, data.key)}
                    />
                  ) : (
                    <AttrValue>{data.value ? data.value : 'N/A'}</AttrValue>
                  )}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <br />
          <br />

          <H3>Info:</H3>
          <br />
          <RtfEditor initialText={info} onChangeCallback={editInfo} />
          <br />
          <br />

          <H3>Campaign Website:</H3>
          <br />
          <RtfEditor
            initialText={campaignWebsite}
            onChangeCallback={editCampaignWebsite}
          />
        </Wrapper>
      ) : (
        <LoadingAnimation />
      )}
    </div>
  );
}

AdminEditCandidate.propTypes = {
  candidate: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default AdminEditCandidate;
