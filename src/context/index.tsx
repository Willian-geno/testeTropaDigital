import type { ReactNode } from "react";
import { AuthProvider } from "./auth";

const Providers = ({ children }: { children: ReactNode }) => {
    return <AuthProvider>{children}</AuthProvider>;
  };
  
export default Providers;