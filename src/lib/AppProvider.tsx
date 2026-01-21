import type { User } from "@/types";
import apiRequest from "@/utils/api";
import { createContext, useCallback, useEffect, useState, type ReactNode } from "react";
import { setLogoutHandler } from "@/features/auth/logoutHandler";

type AppContextType = {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: User;
  setAuth: (data?: User) => void;
  logout: () => void;
  isSheetOpen: boolean;
  openSheet: () => void;
  closeSheet: () => void;
  setIsSheetOpen: (isOpen: boolean) => void;
};

const AppContext = createContext<AppContextType>({
  isAuthenticated: false,
  isLoading: true,
  user: { email: "", id: "", name: "", username: "", avatar_url: "" },
  setAuth: (data?: User) => {
    void data;
  },
  logout: () => {},
  isSheetOpen: false,
  openSheet: () => {},
  closeSheet: () => {},
  setIsSheetOpen: (isOpen: boolean) => {
    void isOpen;
  },
});

export default AppContext;

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [auth, setAuthState] = useState<Pick<AppContextType, "isAuthenticated" | "user" | "isLoading">>({
    user: {
      id: "",
      email: "",
      name: "",
      username: "",
      email_verified: false,
      avatar_url: "",
    },
    isAuthenticated: false,
    isLoading: true,
  });

  const setAuth = useCallback((data?: User) => {
    setAuthState((prev) => ({
      ...prev,
      user: {
        ...prev.user,
        ...data,
      },
      isAuthenticated: true,
      isLoading: false,
    }));
  }, []);

  const logout = () => {
    setAuthState({
      isAuthenticated: false,
      user: {
        id: "",
        email: "",
        name: "",
        username: "",
        avatar_url: "",
      },
      isLoading: false,
    });
  };

  // UI actions
  const openSheet = () => {
    setIsSheetOpen(true);
  };

  const closeSheet = () => {
    setIsSheetOpen(false);
  };

  useEffect(() => {
    setLogoutHandler(logout);
  }, []);

  // session rehydration on page load
  useEffect(() => {
    const rehydrateSession = async () => {
      try {
        const res = await apiRequest.get("/users/me", { withCredentials: true });
        if (res.data) {
          setAuth({
            email: res.data.data.email,
            id: res.data.data.id,
            name: res.data.data.name,
            username: res.data.data.username,
            avatar_url: res.data.data.avatar_url,
          });
        } else {
          setAuthState({
            isAuthenticated: false,
            user: {
              id: "",
              email: "",
              name: "",
              username: "",
              avatar_url: "",
            },
            isLoading: false,
          });
        }
      } catch {
        setAuthState({
          isAuthenticated: false,
          user: {
            id: "",
            email: "",
            name: "",
            username: "",
            avatar_url: "",
          },
          isLoading: false,
        });
      }
    };

    rehydrateSession();
  }, [setAuth]);

  return (
    <AppContext.Provider
      value={{
        ...auth,
        setAuth,
        logout,
        isSheetOpen,
        openSheet,
        closeSheet,
        setIsSheetOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
