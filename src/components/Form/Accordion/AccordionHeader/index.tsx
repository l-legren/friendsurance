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
    const { name, gender, birthdate, insurances, employment, number } =
        useSelector(({ form }) => form);
    const [headerParameters, setHeaderParameters] = useState<HeaderState>({
        title: "",
        answer: "",
    });

    useEffect(() => {
        const headerSetter = () =>
            inputField === InputField.Name
                ? setHeaderParameters({ title: "Name", answer: name.answer })
                : inputField === InputField.Gender
                ? setHeaderParameters({
                      title: "Gender",
                      answer: gender.answer,
                  })
                : inputField === InputField.Birth
                ? setHeaderParameters({
                      title: "Birthdate",
                      answer: birthdate.answer,
                  })
                : inputField === InputField.Insurances
                ? setHeaderParameters({
                      title: "Insurances",
                      answer: insurances.answer,
                  })
                : inputField === InputField.Employment
                ? setHeaderParameters({
                      title: "Employment",
                      answer: employment.answer,
                  })
                : inputField === InputField.PhoneNumber
                ? setHeaderParameters({
                      title: "Phone Number",
                      answer: number.answer,
                  })
                : null;

        headerSetter();
    }, []);

    return (
        <HeaderWrapper isExpanded={isExpanded}>
            <Title>{headerParameters.title}</Title>
            <Answer>
                {Array.isArray(headerParameters.answer)
                    ? formatArrayToString(headerParameters.answer)
                    : headerParameters.answer}
            </Answer>
            <Marker />
        </HeaderWrapper>
    );
};
