import React from "react";
import { Answer, HeaderWrapper, Title, Marker } from "./AccordionHeader.styled";

export const AccordionHeader = () => {
    return (
        <HeaderWrapper>
            <Title>Question 1</Title>
            <Answer>Answer 1</Answer>
            <Marker />
        </HeaderWrapper>
    );
};
