import styled from "styled-components";

interface ItemMenuContainerProps {
    isActive?: boolean;
}

const ItemMenuConteiner = styled.button<ItemMenuContainerProps>`
    display: flex;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    background: ${props => props.isActive ? '#CC6237' : 'none'};
    color: ${props => props.isActive ? '#fff' : 'none'};
    border: none;
    cursor: pointer;
    width: 100%;
    height: 45px;
    margin: 5px 0;
    &:hover {
        color: #FFF;
        background-color:${props => !props.isActive && 'rgb(209, 130, 98)' }; 
    }

`;

const Icon = styled.div`
    width: 20%;     
    font-size: 25px;   
    display: flex;
    justify-content: center;
    align-items: center;    

`
const Label = styled.div`
    font-size: 18px;
    font-weight: 600;
    display: flex;
    align-items: center;
` 

export const ItemMenuStyles = {
    ItemMenuConteiner,
    Label,
    Icon
}