import { styled } from "styled-components";

export const FormContainer = styled.div`
    max-width: 70%;
    margin: 0 auto;
    padding: 100px;
`;

export const Label = styled.label`
    font-weight: 300;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.primaryText};
`;

export const FieldHeader = styled.header`
    font-weight: 300;
    font-size: 1.25rem;
    margin-bottom: 2rem;
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.primaryText};
`;

export const Input = styled.input`
    padding: 5px;
    margin-bottom: 10px;
    max-width: 200px;
    height: 30px;
    font-size: 1rem;
`;

export const RadioCheckboxInput = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 8px;
    cursor: pointer;
`;

export const InputWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const RadioCheckboxLabel = styled.label`
    margin: 0.5rem;
    font-weight: 300;
    font-size: 1rem;
`;

export const StyledSelect = styled.select`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
`;

export const StyledOption = styled.option`
  padding: 10px;
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
    background-color: white;
    color: ${({ theme }) => theme.colors.error};
    padding: 10px 10px;
    font-weight: 500;
    font-size: 1rem;
    border: none;
    cursor: pointer;
    min-width: 100px;
    max-width: 150px;

    &:hover {
        text-decoration: underline;
    }
`;

export const ResetWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const ResetButton = styled.button`
    background-color: ${({ theme }) => theme.colors.error};
    padding: 10px 20px;
    margin: 50px;
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
    margin-bottom: 2rem;
    margin-top: 2rem;
`;

export const ErrorMessage = styled.span`
    color: red;
    margin-bottom: 10px;
`;

export const Divider = styled.div`
    height: 1px;
    width: 100%;
    background-color: gray;
`;