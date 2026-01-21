import { useAuth } from "@/lib/ProviderHooks";
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "./ui/button";
import { LogOut, UserCircle } from "lucide-react";
import { useLogout } from "@/features/auth/hooks/useAuth";
import { useContext } from "react";
import AppContext from "@/lib/AppProvider";
import { toast } from "sonner";
import type { AxiosError } from "axios";
import type { LogoutPayload } from "@/types";
import { getDeviceId } from "@/lib/utils";

export default function NavMenu() {
  const { isAuthenticated, user, isLoading } = useAuth();
  const { mutate, isPending } = useLogout();
  const context = useContext(AppContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const data: LogoutPayload = {
      device_id: getDeviceId(),
    };
    mutate(data, {
      onSuccess: async (response) => {
        const isSuccessfulLogout = response?.status === "success";
        if (!isSuccessfulLogout) {
          context.logout();
          toast.error(response?.error);
          return;
        }

        context.logout();

        navigate("/login");
      },
      onError: (err: unknown) => {
        const error = err as AxiosError<{ error: string }>;
        const errorMessage = error?.response?.data.error || "Something went wrong";
        toast.error(errorMessage);
      },
    });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 border-b border-border-light bg-white/80 backdrop-blur-md transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="size-6 bg-transparent text-white flex items-center justify-center">
                <img src={"/betterpush-icon.png"} alt="betterpush logo" />
              </div>
              <span className="text-lg font-bold tracking-tight text-text-primary">BetterPush</span>
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-text-secondary">
              {/* <Link className="hover:text-text-primary transition-colors duration-200" to="/">
                Features
              </Link> */}
              <Link className="hover:text-text-primary transition-colors duration-200" to="/docs">
                Docs
              </Link>
              <Link className="hover:text-text-primary transition-colors duration-200" to="/contact">
                Contact
              </Link>
              <Link className="hover:text-text-primary transition-colors duration-200" to="/pricing">
                Pricing
              </Link>
            </nav>
            {!isAuthenticated && !isLoading && (
              <div className="flex items-center gap-4">
                <Link className="hidden sm:block text-sm font-medium text-text-secondary hover:text-text-primary transition-colors" to="/login">
                  Sign In
                </Link>
                <Link className="bg-accent hover:bg-[#e5a020] text-text-primary text-sm font-bold py-2 px-5 rounded-md transition-all shadow-sm hover:shadow-md" to="/signup">
                  Get Started
                </Link>
              </div>
            )}
            {isAuthenticated && !isLoading && (
              <div className="flex items-center gap-4">
                <Link className="bg-accent hover:bg-[#e5a020] text-text-primary text-sm font-bold py-2 px-5 rounded-md transition-all shadow-sm hover:shadow-md" to="/dashboard">
                  Dashboard
                </Link>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button className="bg-black p-0 w-10 h-10 rounded-full border border-accent hover:bg-black cursor-pointer overflow-hidden">{user.avatar_url ? <img src={user.avatar_url} alt="user avatar" className="" /> : <UserCircle color="#ffb224" />}</Button>
                  </PopoverTrigger>
                  <PopoverContent align="end" className="border-gray-200 text-sm p-1">
                    <div className="flex flex-col gap-3">
                      <div className="flex flex-col p-2">
                        <p className="text-black/60">{user.username}</p>
                        <p>{user.email}</p>
                      </div>
                      <Link to="/dashboard" className="hover:bg-gray-200 hover:text-black text-black/60 rounded-lg p-2">
                        Dashboard
                      </Link>
                      <button className="flex justify-between items-center cursor-pointer hover:bg-gray-200 hover:text-black text-black/60 rounded-lg p-2" onClick={handleLogout}>
                        <span>Logout</span>
                        <LogOut />
                      </button>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
