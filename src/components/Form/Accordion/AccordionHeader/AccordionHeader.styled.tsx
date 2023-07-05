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
    width: 30%;
    color: ${({ theme }) => theme.colors.primaryText};
`;

export const Answer = styled.p`
    text: gray;
    text-align: left;
    width: 50%;
`;

export const Marker = styled.div<{ hasAnswer: boolean, allAnswered: boolean }>`
    width: 26px;
    height: 26px;
    border-radius: 13px;
    background-color: ${({ hasAnswer, allAnswered, theme }) =>
        allAnswered
            ? theme.colors.primaryDarker
            : hasAnswer && !allAnswered
            ? theme.colors.secondary
            : null};
    margin-right: 1rem;
    border: 1px solid gray;
`;
