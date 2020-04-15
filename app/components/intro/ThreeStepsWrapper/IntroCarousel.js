import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BlueButton } from 'components/shared/buttons';
import slide1 from 'images/slide1.jpg';
import slide2 from 'images/slide2.jpg';
import slide3 from 'images/slide3.jpg';

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  margin-left: 10%;
  position: relative;

  .slick-prev:before,
  .slick-next:before {
    color: #000 !important;
  }
  .slick-next.slick-disabled:before {
    opacity: 1;
  }
`;

const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer: cursor;
  padding: 24px;

  &:focus {
    outline: none !important;
  }
`;

const SliderInnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  pointer: cursor;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 24px 0;

  &:focus {
    outline: none !important;
  }
`;

const SliderImg = styled.div`
  width: 100%;
  height: 50vh;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  &:focus {
    outline: none !important;
  }
`;

const SlideTitle = styled.div`
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.25px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 20px;
    line-height: 24px;
  }
`;

const Circled = styled.div`
  display: inline-block;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: solid 2px ${({ theme }) => theme.colors.gray4};
  font-size: 12px;
  line-height: 17px;
  text-align: center;
  margin-right: 8px;
`;

const ButtonWrapper = styled.div`
  margin: 16px auto 24px;
  text-align: center;
`;

const DotsOverlay = styled.span`
  position: absolute;
  bottom: -25px;
  display: block;
  width: 100%;
  height: 20px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  z-index: 100;
`;

const IntroCarousel = ({ showButton = true, handleNextStep = () => {} }) => {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
  };

  const next = () => {
    sliderRef.current.slickNext();
  };

  return (
    <Wrapper>
      <Slider {...settings} ref={sliderRef}>
        <SliderWrapper onClick={next}>
          <SliderInnerWrapper>
            <SlideTitle>
              <Circled>1</Circled>
              <span>SHOW GOOD CANDIDATES</span>
            </SlideTitle>
            <SliderImg
              style={{
                backgroundImage: `url(${slide1})`,
              }}
            />
          </SliderInnerWrapper>
        </SliderWrapper>
        <SliderWrapper onClick={next}>
          <SliderInnerWrapper style={{ backgroundColor: '#f8fbfb' }}>
            <SlideTitle>
              <Circled>2</Circled>
              <span>PRE-COUNT NEEDED VOTES</span>
            </SlideTitle>
            <SliderImg
              style={{
                backgroundImage: `url(${slide2})`,
              }}
            />
          </SliderInnerWrapper>
        </SliderWrapper>

        <SliderWrapper onClick={handleNextStep}>
          <SliderInnerWrapper style={{ backgroundColor: '#F3FAFC' }}>
            <SlideTitle>
              <Circled>3</Circled>
              <span>VOTE OR WRITE IN, FTW!</span>
            </SlideTitle>
            <SliderImg
              style={{
                backgroundImage: `url(${slide3})`,
              }}
            />
            {showButton && (
              <ButtonWrapper>
                <BlueButton onClick={handleNextStep} fullWidth>
                  SEE YOUR ELECTIONS
                </BlueButton>
              </ButtonWrapper>
            )}
          </SliderInnerWrapper>
        </SliderWrapper>
      </Slider>
      <DotsOverlay />
    </Wrapper>
  );
};

IntroCarousel.propTypes = {
  showButton: PropTypes.bool,
  handleNextStep: PropTypes.func,
};

export default IntroCarousel;
