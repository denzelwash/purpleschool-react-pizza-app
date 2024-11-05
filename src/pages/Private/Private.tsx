import { ReactNode, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getProfile } from "../../store/thunks/auth";
import { AuthStatus } from "../../types/auth";
import Loader from "../../components/Loader/Loader";

interface PrivateProps {
  children: ReactNode;
}

export default function Private({ children }: PrivateProps) {
  const { authStatus } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  if (authStatus === AuthStatus.Unknown) {
    return <Loader />;
  }

  if (authStatus === AuthStatus.NoAuth) {
    return <Navigate to="/auth/login" replace />;
  }

  if (authStatus === AuthStatus.Auth) {
    return children;
  }
}
