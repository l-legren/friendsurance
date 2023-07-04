import React, { useEffect, useState } from "react";
import { Answer, HeaderWrapper, Title, Marker } from "./AccordionHeader.styled";
import { useSelector } from "react-redux";
import { InputField } from "../..";
import { formatArrayToString } from "../../../../tools/formatArrayToString";

interface AccordionHeaderProps {
    isExpanded: boolean;
    inputField: InputField;
}

interface HeaderState {
    title: string;
    answer: string | string[];
}

export const AccordionHeader = ({
    isExpanded,
    inputField,
}: AccordionHeaderProps) => {
    const { name, gender, birthdate, insurances } = useSelector(
        ({ form }) => form
    );
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
                : inputField === InputField.Birth
                ? setHeaderParameters({
                      title: "Birthdate",
                      answer: birthdate,
                  })
                : inputField === InputField.Insurances
                ? setHeaderParameters({
                      title: "Insurances",
                      answer: insurances,
                  })
                : null;
        headerSetter();
    }, [headerParameters]);

    return (
        <>
            <HeaderWrapper isExpanded={isExpanded}>
                <Title>{headerParameters.title}</Title>
                <Answer>
                    {Array.isArray(headerParameters.answer)
                        ? formatArrayToString(headerParameters.answer)
                        : headerParameters.answer}
                </Answer>
                <Marker />
            </HeaderWrapper>
        </>
    );
};
