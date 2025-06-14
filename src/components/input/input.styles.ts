import type { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    placeholder: string;
    erro?: string;
}

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    color: #CC6237;
    text-align: start;
    font-weight: 500;
`;

const Input = styled.input`
    padding: 0.8rem;
    background-color: #F6F6F6;
    border-radius: 20px;
    font-size: 12px;
    width: 100%;
    color: #657593;
    
    &:focus {
        outline: none;
        border-color: #007bff;
    }
`;

const InputWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
`;

const ToggleButton = styled.button`
    position: absolute;
    right: 10px;
    background: none;
    border: none;
    color: #CC6237;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 4px 8px;   
    
    &:hover {
        opacity: 50%;
    }
`;

const ErrorMessage = styled.div`
    height: 1.5rem;

    .message{
        font-size: 10px;
        color: red;
        vertical-align: text-top;

    }
`

export const InputStyles = {
    InputContainer,
    Label,
    Input,
    InputWrapper,
    ToggleButton,
    ErrorMessage
};