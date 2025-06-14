import styled from "styled-components";

const SidebarConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;    
    width: 15%;
    height: 100%;
    padding: 10px;
    background-color: #FFFFFF;
    border-right: solid #c4c4c4 2px ;

`;  

const LogoConteiner = styled.div`
    height: 10%;
    width: 80%;
    align-content: center;
    .logoImg{
        width: 100%;
    }
`;

const MenuConteiner = styled.div`

    height: 55%;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;

    .titleMenu{
        width: 100%;
        text-align: start;
        
        color: #A3A3A3;
        font-weight: 600    ;
        width: 90%;
    }   
`;

const DividerSideBar = styled.div`
    margin: 40px 0;
    background-color: #c4c4c4;
    width: 80%;
    height: 2px;
`

const FooterConteiner = styled.div`
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
`;

export const SidebarStyles = {
    SidebarConteiner,
    LogoConteiner,
    MenuConteiner,
    FooterConteiner,
    DividerSideBar,
    
}
