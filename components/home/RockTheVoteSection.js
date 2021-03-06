import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Quote, Body14 } from 'components/shared/typogrophy';

const RockTheVoteSectionWrapper = styled.div`
  padding-top: 2rem;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-top: 0;
  }
`;

const LeftCol = styled(Grid)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 3rem 0 7rem;
  }
`;

const RightCol = styled(Grid)`
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding-left: 2rem;
  }
`;

const SectionTitle = styled(Quote)`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Author = styled(Body14)`
  margin-bottom: 0.5rem;
  text-align: center;
  &.name {
    font-weight: bold;
  }
`;
const RockTheVoteSection = () => (
  <RockTheVoteSectionWrapper>
    <Grid container>
      <LeftCol item xs={12} md={6}>
        <SectionTitle>
          “The Good Party is like Rock The Vote on steroids!”
        </SectionTitle>
        <Author className="name">Jeff Ayeroff</Author>
        <Author>Founder of Rock The Vote</Author>
      </LeftCol>
      <RightCol item xs={12} md={6}>
        <LazyLoadImage
          src="http://assets.thegoodparty.org/jeff.png"
          alt="jeff-ayeroff"
          width="100%"
          height="100%"
        />
      </RightCol>
    </Grid>
  </RockTheVoteSectionWrapper>
);

export default RockTheVoteSection;
