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
    FieldHeader,
} from "./Form.styled";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
    updateName,
    resetName,
    updateGender,
    resetGender,
    updateBirthdate,
    resetBirthdate,
} from "../../features/form/formSlice";

export enum InputField {
    Name = "name",
    Gender = "gender",
    Birth = "birthdate",
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

    const handleUpdate = (field: InputField) => {
        if (field === InputField.Name) {
            const name = getValues(InputField.Name);
            dispatch(updateName(name));
        } else if (field === InputField.Gender) {
            const gender = getValues(InputField.Gender);
            dispatch(updateGender(gender));
        } else if (field === InputField.Birth) {
            const birthdate = getValues(InputField.Birth);
            dispatch(updateBirthdate(birthdate));
        }
    };

    const handleReset = (field: InputField) => {
        if (field === InputField.Name) {
            setValue(InputField.Name, "");
            dispatch(resetName());
        } else if (field === InputField.Gender) {
            setValue(InputField.Gender, "");
            dispatch(resetGender());
        } else if (field === InputField.Birth) {
            setValue(InputField.Birth, "");
            dispatch(resetBirthdate());
        }
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
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.Name)}
                    >
                        Submit
                    </SubmitButton>
                    <CancelButton onClick={() => handleReset(InputField.Name)}>
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Accordion inputField={InputField.Gender}>
                <FieldHeader>What is your gender?</FieldHeader>
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
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.Gender)}
                    >
                        Submit
                    </SubmitButton>
                    <CancelButton
                        onClick={() => handleReset(InputField.Gender)}
                    >
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
            <Accordion inputField={InputField.Birth}>
                <Label htmlFor="name">When have you been born?</Label>
                <Input
                    type="date"
                    id="birthDate"
                    {...register("birthDate", {
                        required: "Please pick your birthdate",
                    })}
                />
                {errors.birthDate && (
                    <ErrorMessage>
                        {errors.birthDate.message as string}
                    </ErrorMessage>
                )}
                <ButtonWrapper>
                    <SubmitButton
                        type="submit"
                        onClick={() => handleUpdate(InputField.Birth)}
                    >
                        Submit
                    </SubmitButton>
                    <CancelButton onClick={() => handleReset(InputField.Birth)}>
                        Clear
                    </CancelButton>
                </ButtonWrapper>
            </Accordion>
        </FormContainer>
    );
};
