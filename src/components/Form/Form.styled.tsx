import { styled } from "styled-components";

export const FormContainer = styled.div`
    max-width: 80%;
    margin: 0 auto;
    padding: 100px;
`;

export const Label = styled.label`
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 1rem;
    margin-bottom: 2rem;
`;

export const Input = styled.input`
    padding: 5px;
    margin-bottom: 10px;
    max-width: 200px;
    margin-bottom: 2rem;
`;

export const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: 10px 20px;
    margin-right: 10px;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    min-width: 100px;
    max-width: 150px;
    border-radius: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryDarker};
    }
`;

export const CancelButton = styled.button`
    background-color: ${({ theme }) => theme.colors.error};
    padding: 10px 20px;
    margin-right: 10px;
    color: white;
    font-weight: 500;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    min-width: 100px;
    max-width: 150px;
    border-radius: 5px;

    &:hover {
        background-color: ${({ theme }) => theme.colors.errorDarker};
    }
`;

export const ButtonWrapper = styled.div`
    display: flex;
`;

export const ErrorMessage = styled.span`
    color: red;
    margin-bottom: 10px;
`;
