import Loader from "@/components/loader";
import { ROUTES } from "@/constants";
import { useAuth } from "@/lib/ProviderHooks";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormValues } from "@/schema";
import { Button } from "@/components/ui/button";
import { useGithubAuth, useLogin } from "@/features/auth/hooks/useAuth";
import type { LoginPayload } from "@/types";
import { useContext, useState } from "react";
import AppContext from "@/lib/AppProvider";
import type { AxiosError } from "axios";
import { toast } from "sonner";
import { Loader as Loading } from "lucide-react";
import { getDeviceId } from "@/lib/utils";

export default function Login() {
  const { isAuthenticated, isLoading } = useAuth();
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const { mutate, isPending } = useLogin();
  const GITHUB_AUTH_URL = useGithubAuth();
  const [githubButtonIsLoading, setGithubButtonIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      device_id: "",
    },
  });

  const onSubmit = (data: LoginPayload) => {
    data.device_id = getDeviceId();
    mutate(data, {
      onSuccess: async (response) => {
        const isSuccessfulLogin = response?.status === "success";
        if (!isSuccessfulLogin) {
          context.logout();
          toast.error(response?.error);
          return;
        }

        context.setAuth();

        navigate("/dashboard");
      },
      onError: (err: unknown) => {
        const error = err as AxiosError<{ error: string }>;
        const errorMessage = error?.response?.data.error || "Something went wrong";
        toast.error(errorMessage);
      },
    });
  };

  const handleGithubAuth = async () => {
    setGithubButtonIsLoading(true);
    window.location.href = GITHUB_AUTH_URL;
  };

  if (isLoading) {
    return <Loader />;
  }

  if (isAuthenticated) {
    return <Navigate to={ROUTES.dashboard} replace />;
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 bg-subtle2-gradient" />
      <div className="w-full max-w-md relative z-10">
        <Link to="/" className="mb-6 text-sm font-medium inline-flex items-center gap-1 hover:opacity-80 transition-opacity" style={{ color: "rgb(255, 178, 36)" }}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </Link>
        <div className="rounded-xl border border-slate-200 p-8 backdrop-blur-sm bg-login-form-gradient">
          <h1 className="text-3xl font-bold mb-2 bg-linear-to-r from-slate-950 via-slate-800 to-slate-950 bg-clip-text text-transparent">Welcome back</h1>
          <p className="text-slate-600 mb-6">Sign in to your account</p>

          {errors.password?.message && <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{errors.password?.message}</div>}

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" {...register("email")} className="w-full px-4 py-2 rounded-lg border bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all" placeholder="you@example.com" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Password</label>
              <input type="password" {...register("password")} className="w-full px-4 py-2 rounded-lg border bg-white text-slate-950 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all" placeholder="••••••••" required />
            </div>

            <Button disabled={isPending} className="w-full bg-accent text-text-primary text-base font-bold h-12 px-8 rounded-md hover:bg-[#e5a020] transition-all shadow-lg shadow-orange-100 hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer">
              {isPending ? <Loading className="animate-spin" /> : "Sign in"}
            </Button>
          </form>

          <div className="my-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-slate-50 text-slate-600">Or continue with</span>
            </div>
          </div>

          <button title="continue with github" onClick={handleGithubAuth} type="button" className="w-full px-4 py-2 border border-slate-300 rounded-lg font-medium transition-all flex items-center justify-center gap-2 cursor-pointer text-[rgb(255,178,36)]">
            {githubButtonIsLoading ? <Loading className="animate-spin" /> : "Github"}
          </button>

          <p className="mt-6 text-center text-sm text-slate-600">
            Don't have an account?{" "}
            <Link to="/signup" className="font-medium hover:underline" style={{ color: "rgb(255, 178, 36)" }}>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
