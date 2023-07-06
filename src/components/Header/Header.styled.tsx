import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.25rem;
    font-weight: 700;
    height: 55px;
    width: 100vw;
    background-color: ${({theme}) => theme.colors.primary};
    color: white;
`;
