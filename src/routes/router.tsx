import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Login from "../pages/login/login";
import Dashboard from "../pages/dashboard/dashboard";
import Events from "../pages/dashboard/components/events/events";
import Registration from "../pages/dashboard/components/registrations/registrations";
import Teams from "../pages/dashboard/components/teams/teams";


export default function Router() {
    return (    
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Dashboard />}>
                    <Route path="event" element={<Events />} />                    
                    <Route path="registrarion" element={<Registration />} />                    
                    <Route path="teams" element={<Teams />} />                    
                </Route>
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    )
}