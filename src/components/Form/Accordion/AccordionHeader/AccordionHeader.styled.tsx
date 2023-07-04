import styled from "styled-components";

export const HeaderWrapper = styled.div<{ isExpanded: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    max-height: ${({ isExpanded }) => (isExpanded ? "0px" : "100px")};
    overflow: hidden;
    transition: max-height 0.3s ease;
`;

export const Title = styled.h4`
    margin-left: 1rem;
    width: 35%
`;

export const Answer = styled.p`
    text: gray;
    text-align: left;
    width: 60%; 
`;

export const Marker = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-color: green;
    margin-right: 1rem;
`;