import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import { Body19, Subtitle, Body11 } from 'components/shared/typogrophy';
import Link from 'next/link';
import { OutlinedButton } from '../shared/buttons';

const Wrapper = styled.div`
  margin-bottom: 48px;
`;
const ColTitle = styled(Subtitle)`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;
`;

const ColDescription = styled(Body19)`
  font-weight: bold;
  text-align: center;
  white-space: pre-line;
  margin-bottom: 64px;

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 16px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 23px;
    line-height: 30px;
  }
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 30px auto;
`;

const LinkBody11 = styled(Body11)`
  margin: 10px auto 30px;
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray6};
  font-weight: 400;
  font-style: italic;
`;
const StatsSection = () => (
  <Wrapper>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={4}>
        <ColTitle>99%</ColTitle>
        <ColDescription>
          of Congress members
          <br />
          raise <u>majority</u> of funds
          <br />
          from big-money donors
          <br />
          <ButtonWrapper>
            <Link href="/elections/incumbents" passHref>
              <a>
                <OutlinedButton active>SEE BIG-MONEY RANKINGS</OutlinedButton>
              </a>
            </Link>
          </ButtonWrapper>
        </ColDescription>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ColTitle>only 18%</ColTitle>
        <ColDescription>
          of Americans <br /> approve of Congress <br /> (but nothing changes)
          <a
            href="https://news.gallup.com/poll/316448/congress-approval-drops-trump-steady.aspx"
            target="_blank"
            rel="nofollow"
          >
            <LinkBody11>Source: Gallup</LinkBody11>
          </a>
        </ColDescription>
      </Grid>
      <Grid item xs={12} sm={4}>
        <ColTitle>over 90%</ColTitle>
        <ColDescription>
          of Congress gets <br /> reelected based on <br /> amount of funds
          raised
          <a
            href="https://www.opensecrets.org/elections-overview/winning-vs-spending?cycle=2020"
            target="_blank"
            rel="nofollow"
          >
            <LinkBody11>Source: Open Secrets</LinkBody11>
          </a>
        </ColDescription>
      </Grid>
    </Grid>
  </Wrapper>
);

export default StatsSection;
