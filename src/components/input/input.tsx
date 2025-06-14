import { InputStyles, type InputProps } from "./input.styles";
import { useState } from "react";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

export const CustomInput = ({erro, label, type, ...props }: InputProps) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <InputStyles.InputContainer>
            {label && (
                <InputStyles.Label>{label}</InputStyles.Label>
            )}
            <InputStyles.InputWrapper>
                <InputStyles.Input 
                    type={type === "password" ? (showPassword ? "text" : "password") : type} 
                    {...props} 
                />
                {type === "password" && (
                    <InputStyles.ToggleButton 
                        type="button" 
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <IoEyeOffOutline/> : <IoEyeOutline />   }
                    </InputStyles.ToggleButton>
                )}
            </InputStyles.InputWrapper>
            <InputStyles.ErrorMessage>
                {erro && (<span className="message">{erro}</span>)}
            </InputStyles.ErrorMessage>
        </InputStyles.InputContainer>
    );
};