export type FailedRequest = {
  resolve: () => void;
  reject: (error: unknown) => void;
};

export type APIError = {
  status: string;
  error: string;
};

export type SignupPayload = {
  email: string;
  password: string;
  username: string;
  name?: string;
};

export type LoginPayload = {
  email: string;
  password: string;
  device_id: string;
};

export type LogoutPayload = {
  device_id: string;
};

export type AuthResponse =
  | {
      status: "success";
      statuscode: 200;
      message: "Successful login";
      data: null;
    }
  | {
      status: "error";
      statuscode: number;
      error: string;
    };

export type User = {
  id: string;
  email: string;
  name?: string;
  username: string;
  email_verified?: boolean;
  avatar_url: string | null;
};
