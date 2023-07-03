import { styled } from "styled-components";

export const AccordionWrapper = styled.section``;

export const AccordionContent = styled.div<{ isExpanded: boolean }>`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: ${({ isExpanded }) => (isExpanded ? "1000px" : "0px")};
    transition: max-height 0.5s ease;
`;
