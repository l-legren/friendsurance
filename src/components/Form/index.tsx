import React from "react";
import { Accordion } from "./Accordion";
import {
    FormContainer,
    Label,
    Input,
    ErrorMessage,
    SubmitButton,
    CancelButton,
    ButtonWrapper,
    RadioWrapper,
    RadioInput,
    RadioLabel,
} from "./Form.styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
    updateName,
    resetName,
    updateGender,
    resetGender,
} from "../../features/form/formSlice";

export enum InputField {
    Name = "name",
    Gender = "gender",
    Birth = "birth",
    Insurances = "insurances",
    Employment = "employment",
    PhoneNumber = "phoneNumber",
}

export const FriendsuranceForm = () => {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors },
    } = useForm();
    const dispatch = useDispatch();

    const handleSubmitName = () => {
        const name = getValues("name");
        dispatch(updateName(name));
    };
    const handleResetName = () => {
        setValue("name", "");
        dispatch(resetName());
    };

    const handleSubmitGender = () => {
        const gender = getValues("gender");
        dispatch(updateGender(gender));
    };
    const handleResetGender = () => {
        setValue("gender", "");
        dispatch(resetGender());
    };

    return (
        <FormContainer>
            <Accordion inputField={InputField.Name}>
                <Label htmlFor="name">What is your name?</Label>
                <Input
                    type="text"
                    id="name"
                    {...register("name", {
                        required: true,
                        minLength: {
                            value: 3,
                            message: "Name should be longer than 3 characters",
                        },
                        maxLength: {
                            value: 25,
                            message:
                                "Name should be shorter than 25 characters",
                        },
                    })}
                />
                {errors.name && (
                    <ErrorMessage>{errors.name.message as string}</ErrorMessage>
                )}
                <ButtonWrapper>
                    <SubmitButton type="submit" onClick={handleSubmitName}>
                        Submit
                    </SubmitButton>
                    <CancelButton onClick={handleResetName}>Clear</CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Accordion inputField={InputField.Gender}>
                {/* <Label htmlFor="gender">What is your gender?</Label> */}
                <RadioWrapper>
                    <RadioInput
                        type="radio"
                        id="gender"
                        value="FEMALE"
                        {...register("gender", {
                            required: "Please select one value",
                        })}
                    />
                    <RadioLabel htmlFor="MALE">Female</RadioLabel>
                </RadioWrapper>
                <RadioWrapper>
                    <RadioInput
                        type="radio"
                        id="gender"
                        value="MALE"
                        {...register("gender", {
                            required: "Please select one value",
                        })}
                    />
                    <RadioLabel htmlFor="MALE">Male</RadioLabel>
                </RadioWrapper>
                {errors.gender && (
                    <ErrorMessage>
                        {errors.gender.message as string}
                    </ErrorMessage>
                )}
                <ButtonWrapper>
                    <SubmitButton type="submit" onClick={handleSubmitGender}>
                        Submit
                    </SubmitButton>
                    <CancelButton onClick={handleResetGender}>
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
        </FormContainer>
    );
};
