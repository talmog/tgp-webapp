import styled from 'styled-components';

const BodyWrapper = styled.div`
  max-width: 40rem;
  width: 100%;
  padding: 3rem;
  background-color: #fff;
  border-radius: 0.5rem;
  border: none;
  text-align: center;
  outline: none;
  box-shadow: 2px 8px 18px rgba(0, 0, 0, 0.15);
  position: relative;
  @media only screen and (max-width: ${({ theme }) =>
      theme.creators.breakpoints.creatorsMobile}) {
    padding: 3rem 2rem;
  }
`;

export default BodyWrapper;
