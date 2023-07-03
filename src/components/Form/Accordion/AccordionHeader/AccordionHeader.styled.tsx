import styled from "styled-components";

export const HeaderWrapper = styled.div<{ isExpanded: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    border-top: 1px solid gray;
    cursor: pointer;
    max-height: ${({ isExpanded }) => (isExpanded ? "0px" : "100px")};
    overflow: hidden;
    transition: max-height 0.3s ease;
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