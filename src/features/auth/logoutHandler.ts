let logoutFn: (() => void) | null = null;

export const setLogoutHandler = (fn: () => void) => {
  logoutFn = fn;
};

export const triggerLogout = () => {
  if (logoutFn) logoutFn();
};
