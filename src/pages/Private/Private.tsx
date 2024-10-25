import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateProps {
  children: ReactNode;
}

export default function Private({ children }: PrivateProps) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}
