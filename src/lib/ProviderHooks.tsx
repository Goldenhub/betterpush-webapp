import { useContext } from "react";
import AppContext from "./AppProvider";

export const useAppStore = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppStore must be used inside AppProvider");
  }
  return {
    isSheetOpen: context.isSheetOpen,
    openSheet: context.openSheet,
    closeSheet: context.closeSheet,
    setIsSheetOpen: context.setIsSheetOpen,
  };
};

export const useAuth = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAuth must be used inside AppProvider");
  }
  return {
    isAuthenticated: context.isAuthenticated,
    isLoading: context.isLoading,
    user: context.user,
    setAuth: context.setAuth,
    logout: context.logout,
  };
};
