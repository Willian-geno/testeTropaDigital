import styled from "styled-components";

const LoginContainer = styled.div`
    height: 53vh;
    width: 43VW;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 100px 200px 0 rgba(0, 0, 0, 0.25);
    padding: 7px;
    

    
`;

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
`;

const ImageConteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    width: 55%;
    height: 100%;
    position: relative;
    .bannerBackground {
        background-color:#CC6237;
        width: 85%;
        height: 100%;
        border-radius: 10px;
    }
    .banner{
        position: absolute;
        top: 37%;
        right: 17%; 
        height: 63%;

    }
    @media (max-width: 1440px) {
        .banner{
            position: absolute;
            top: 50%;
            right: 17%; 
            height: 50%;

        }
    }   

    @media (max-width: 1024px) {
        display: none;
    }

`;
const HeaderLogin = styled.div`
    
    height: 100%;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;


    .headerText{
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        padding: 20px 0;
    }

    .logoTropa{
        width: 50%;
        height: auto;
        margin-bottom: 1rem;
    }

    h1{
        color: #CC6237;
        font-size: 30px;
        text-align: start;
        margin: 0;
        width: max-content;
        line-height: 0.5;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    p{
        color: #2A4D8E;
        opacity: 50%;
        font-size:15px;
        width: max-content;
        margin: 0;
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }

    @media (max-width: 1024px) {
        width: 100%;
        align-items: center;


        .headerText{    
            align-items: center;
        }
    }
`;

export const LoginStyles = {
    LoginContainer,
    LoginForm,
    ImageConteiner,
    HeaderLogin
};








/* @media (max-width: 1024px) {
    
}

@media (max-width: 768px) {
    
}

@media (max-width: 480px) {
   
} */