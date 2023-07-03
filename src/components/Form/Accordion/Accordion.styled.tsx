import { styled } from "styled-components";
import { FaAngleUp } from "react-icons/fa";

export const AccordionWrapper = styled.section``;

export const AccordionContent = styled.div<{ isExpanded: boolean }>`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    max-height: ${({ isExpanded }) => (isExpanded ? "1000px" : "0px")};
    transition: max-height 0.5s ease;
`;

export const ClickableHeader = styled.div``;

export const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const AngleUp = styled(FaAngleUp)`
    font-size: 2.25rem;
    cursor: pointer;
    margin-top: 2rem;
`;

