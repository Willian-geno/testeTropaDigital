import { ButtonStyles, type ButtonProps } from "./button.styles";

export const CustomButton = ({ color, onClick, children }: ButtonProps) => {
    return (
        <ButtonStyles.ButtonContainer 
            color={color} 
            onClick={onClick}
        >
            {children}
        </ButtonStyles.ButtonContainer>
    );
};
