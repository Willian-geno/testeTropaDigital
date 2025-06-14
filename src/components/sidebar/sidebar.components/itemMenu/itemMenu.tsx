import type { IconType } from "react-icons";
import { ItemMenuStyles } from "./itemMenu.Style";
import type { ButtonHTMLAttributes } from "react";

interface IconMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    Icon: IconType;
    label: string;
    isActive?: boolean;
} 

const ItemMenu = ({ Icon, label, isActive, ...rest}: IconMenuProps) => {
    return (
        <ItemMenuStyles.ItemMenuConteiner isActive={isActive} {...rest}>
            <ItemMenuStyles.Icon>
                <Icon />
            </ItemMenuStyles.Icon>
            <ItemMenuStyles.Label>
                {label}
            </ItemMenuStyles.Label>
        </ItemMenuStyles.ItemMenuConteiner>
    )
}

export default ItemMenu;