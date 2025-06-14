import styled from "styled-components";

const PerfilMenuConteiner = styled.div`
    display: flex;
    align-items: center;
    width: 90%;
`;


const ImgConteiner = styled.div`
    width: 25%;
    height:90%;
    border-radius: 28px;
    border: solid #CC6237 3px;
    
    
    .imgUser{
        width: 100%;
        height: 100%;
        border-radius: 25px;
        background-color: red;
        border: solid #fff 3px;
        object-fit: cover;
        object-position: center;
    }
`

const DiscriptionUser = styled.div`

    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    padding: 0 10px;
    .nameUser{
        font-size: 20px;
        font-weight: 600;
        color: black;
    }
    .roleUser{
        color:#c4c4c4
    }
`

export const PerfilMenuStyles = {
    PerfilMenuConteiner,
    DiscriptionUser,
    ImgConteiner
}