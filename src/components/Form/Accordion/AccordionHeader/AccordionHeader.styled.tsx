import styled from "styled-components";

export const HeaderWrapper = styled.div<{ isExpanded: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid gray;
    cursor: pointer;
    max-height: ${({ isExpanded }) => (isExpanded ? "0px" : "100px")};
    overflow: hidden;
    transition: max-height 0.3s ease;
`;

export const Title = styled.h4`
    margin-left: 1rem;
`;

export const Answer = styled.p`
    text: gray;
`;

export const Marker = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: green;
    margin-right: 1rem;
`;