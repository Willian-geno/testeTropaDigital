import { SidebarStyles } from "./sidebar.styles";
import  logoTropa from "../../img/logoTropa.png";
import ItemMenu from "./sidebar.components/itemMenu/itemMenu";

import { RxDashboard } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { RiShutDownLine } from "react-icons/ri";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";
import { FiUsers } from "react-icons/fi";
import PerfilMenu from "./sidebar.components/perfilMenu/perfilMenu";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";
const Sidebar = () => {
    const navegate = useNavigate();
    const location = useLocation();

    const {logout} = useAuth()

    const logoutFunction = () => {
        logout()
        navegate("/login")
    }

    return (
        <SidebarStyles.SidebarConteiner>    
            <SidebarStyles.LogoConteiner>
                <img className="logoImg" src={logoTropa} />
            </SidebarStyles.LogoConteiner>  
            <SidebarStyles.MenuConteiner>
                <div className="titleMenu">MENU</div  > 
                <ItemMenu Icon={RxDashboard} label="Dashboard"/>
                <ItemMenu 
                    Icon={MdOutlineCalendarMonth} 
                    label="Eventos"   
                    onClick={()=> navegate("/event")} 
                    isActive={location.pathname === "/event"}
                />
                <ItemMenu 
                    Icon={PiUsersThree} 
                    label="Equipes"
                    onClick={()=> navegate("/teams")}
                    isActive={location.pathname === "/teams"}
                    
                />
                <ItemMenu 
                    Icon={FiUsers} 
                    label="Inscrições"
                    onClick={()=> navegate("/registrarion")} 
                    isActive={location.pathname === "/registrarion"}
                />
                
            </SidebarStyles.MenuConteiner>

            <SidebarStyles.FooterConteiner>
                <SidebarStyles.DividerSideBar/>
                <PerfilMenu name="Willian Gustavo" role="Administrador"></PerfilMenu>
                <ItemMenu Icon={CiUser} label="Alterar Dados"/>
                <ItemMenu Icon={RiShutDownLine} onClick={()=>logoutFunction()} label="Sair"/>

            </SidebarStyles.FooterConteiner>

        </SidebarStyles.SidebarConteiner>
    )
}

export default Sidebar;     