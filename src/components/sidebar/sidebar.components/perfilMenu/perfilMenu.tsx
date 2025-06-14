import { PerfilMenuStyles } from "./perfilMenu.style"
import imgUser from "../../../../img/user.avif"

interface IperfilMenuProps {
    name:string;
    role:string
}

const PerfilMenu = ({name, role}:IperfilMenuProps) => {

    

    return(
        <PerfilMenuStyles.PerfilMenuConteiner>
            <PerfilMenuStyles.ImgConteiner>
             <img className="imgUser" src={imgUser} />  
            </PerfilMenuStyles.ImgConteiner>
            <PerfilMenuStyles.DiscriptionUser>
                <div className="nameUser">{name}</div>
                <div className="roleUser">{role}</div>
            </PerfilMenuStyles.DiscriptionUser>
        </PerfilMenuStyles.PerfilMenuConteiner>
    )
}

export default PerfilMenu;