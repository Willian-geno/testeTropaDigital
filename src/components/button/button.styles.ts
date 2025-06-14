import type { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    color?: string;
    onClick?: () => void;
    children: React.ReactNode;
}

const ButtonContainer = styled.button<{ color?: string }>`
    padding: 0.8rem 1.5rem;
    border: none;
    border-radius: 30px;
    font-size: 1rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-color: ${({ color }) => color || '#CC6237'};
    color: white;

    &:hover {
        opacity: 0.9;
        transform: translateY(-1px);
    }

    &:active {
        transform: translateY(0);
    }

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        transform: none;
    }
`;

export const ButtonStyles = {
    ButtonContainer
};
