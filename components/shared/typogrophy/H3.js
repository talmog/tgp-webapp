import styled from 'styled-components';

const H3 = styled.h3`
  color: ${({ theme }) => theme.colors.gray4};
  font-size: 19px;
  line-height: 25px;
  font-weight: 600;
  margin: 0;
  @media only screen and (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 26px;
    line-height: 32px;
  }
`;

export default H3;
