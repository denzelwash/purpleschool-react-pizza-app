import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../store/store";

interface PrivateProps {
  children: ReactNode;
}

export default function Private({ children }: PrivateProps) {
  const token = useAppSelector((state) => state.auth.jwt);
  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }
  return children;
}
