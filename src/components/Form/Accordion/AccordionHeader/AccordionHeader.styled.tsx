import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px;
    border-top: 1px solid gray;
    cursor: pointer;
`;

export const Title = styled.h4``;

export const Answer = styled.p`
    text: gray;
`;

export const Marker = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: green;
`;
