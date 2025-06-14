import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "../../components/sidebar/sidebar";
import { DeshboardStyles } from "./dashboard.styles";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
    const navegate = useNavigate();
    const {verifyLogin} = useAuth();

    if (verifyLogin() !== "true"){      
        navegate("/loin");
    }

    return (
        <DeshboardStyles.DashboardConteiner>
            <Sidebar/>
            <DeshboardStyles.Contentdashboard>
                <Outlet/>
            </DeshboardStyles.Contentdashboard>
        </DeshboardStyles.DashboardConteiner>
    )
}

export default Dashboard;   