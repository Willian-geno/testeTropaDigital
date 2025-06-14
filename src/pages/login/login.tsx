import { useState } from "react";
import { LoginStyles } from './login.styles';
import { CustomInput } from "../../components/input/input";
import { CustomButton } from "../../components/button/button";
import  logoTropa from "../../img/logoTropa.png";
import  imgLogin from "../../img/imageLogin.png";
import { useAuth } from "../../context/auth";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Navigate, useNavigate } from "react-router-dom";

const schema = yup.object().shape({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha é obrigatória"),
});

const Login = () => {
    const { login } = useAuth();
    const navegate = useNavigate()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = async      (data: { email: string; password: string }) => {
        console.log(data)
        const retorno = await login( data.email, data.password);

        if (retorno){
            navegate("/event    ")
        } 
        
    };

    return (
        <LoginStyles.LoginContainer>
            <LoginStyles.HeaderLogin>
                <img src={logoTropa} className="logoTropa"/>
                <div className="headerText">
                    <h1>Bem-vindo de volta</h1>
                    <p>Entre com sua conta para acessar o painel</p>
                </div>
                <LoginStyles.LoginForm as="form" onSubmit={handleSubmit(onSubmit)}>
                    <CustomInput 
                        label="E-mail" 
                        type="email" 
                        placeholder="seunome@seuservdor.com" 
                        erro={errors.email && errors.email.message}

                        {...register("email")}
                    />
                    <CustomInput 
                        label="Senha" 
                        type="password" 
                        placeholder="Digite aqui" 
                        erro={errors.password && errors.password.message}
                        {...register("password")}
                    />
                    <CustomButton type="submit">Entrar</CustomButton>
                </LoginStyles.LoginForm>
            </LoginStyles.HeaderLogin>
            <LoginStyles.ImageConteiner>
                <div className="bannerBackground"/>
                <img className="banner" src={imgLogin} alt="Imagem de Login" />
            </LoginStyles.ImageConteiner>
        </LoginStyles.LoginContainer>
    )
}

export default Login;   