import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Body, Body12 } from 'components/shared/typogrophy/index';
import OutlinedButton from 'components/shared/buttons/OutlinedButton';

const Wrapper = styled.div`
  margin-top: 36px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledBody12 = styled(Body12)`
  margin-top: 8px;
`;

const Photo = styled.img`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  flex-basis: 55px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    height: 100px;
    width: 100px;
    flex-basis: 100px;
  }
`;

const ButtonWrapper = styled.div`
  margin-top: 16px;
`;

const EventSnippet = ({ event, isPastEvent = false }) => {
  const {
    id,
    title,
    displayDate,
    description,
    presenter,
    presenterTitle,
    avatarPhoto,
    location,
  } = event;
  let isLocationLink;
  let locationLink;
  if (location) {
    isLocationLink =
      location.indexOf('http') === 0 || location.indexOf('ama') === 0;
    locationLink =
      location.indexOf('ama') === 0 ? `http://${location}` : location;
  }

  return (
    <Wrapper key={id} data-cy="event">
      <Row>
        <div style={{ marginRight: '16px' }}>
          <Body className="bold600" data-cy="event-title">
            <a href={locationLink} target="_blank">
              {title}
            </a>
          </Body>
          {displayDate && (
            <StyledBody12 data-cy="event-date">{displayDate}</StyledBody12>
          )}
          {description && (
            <StyledBody12 data-cy="event-description">
              {description}
            </StyledBody12>
          )}
          {location && (
            <StyledBody12 data-cy="event-location">
              <strong data-cy="event-location-label">Location: </strong>
              {isLocationLink ? (
                <a
                  href={locationLink}
                  target="_blank"
                  data-cy="event-location-link"
                >
                  {location}
                </a>
              ) : (
                <>{location}</>
              )}
            </StyledBody12>
          )}
          {presenter && (
            <StyledBody12 data-cy="event-presenter">
              <span
                className="bold500 spacing05"
                data-cy="event-presenter-name"
              >
                {presenter}
              </span>{' '}
              {presenterTitle}
            </StyledBody12>
          )}
        </div>
        <Photo src={avatarPhoto} />
      </Row>
      {!isPastEvent && (
        <a href={locationLink} target="_blank" data-cy="event-interested">
          <ButtonWrapper>
            <OutlinedButton fullWidth active>
              ADD TO CALENDAR...
            </OutlinedButton>
          </ButtonWrapper>
        </a>
      )}
    </Wrapper>
  );
};

EventSnippet.propTypes = {
  event: PropTypes.object,
  isPastEvent: PropTypes.bool,
};

export default EventSnippet;
