import styled from 'styled-components';

const Body = styled.span`
    text-transform: uppercase;
    color: ${({ theme }) => theme.creators.colors.lightGray};
    font: normal bold 2rem/2rem normal;
`;

export default Body;
