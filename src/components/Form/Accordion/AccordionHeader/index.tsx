import React, { useEffect, useState } from "react";
import { Answer, HeaderWrapper, Title, Marker } from "./AccordionHeader.styled";
import { useSelector } from "react-redux";
import { InputField } from "../..";

interface AccordionHeaderProps {
    isExpanded: boolean;
    inputField: InputField;
}

export const AccordionHeader = ({
    isExpanded,
    inputField,
}: AccordionHeaderProps) => {
    const { name, gender } = useSelector(({ form }) => form);
    const [headerParameters, setHeaderParameters] = useState({
        title: "",
        answer: "",
    });

    useEffect(() => {
        const headerSetter = () =>
            inputField === InputField.Name
                ? setHeaderParameters({ title: "Name", answer: name })
                : inputField === InputField.Gender
                ? setHeaderParameters({ title: "Gender", answer: gender })
                : "";
        headerSetter();
    }, []);
    return (
        <>
            <HeaderWrapper isExpanded={isExpanded}>
                <Title>{headerParameters.title}</Title>
                <Answer>{headerParameters.answer}</Answer>
                <Marker />
            </HeaderWrapper>
        </>
    );
};
