export interface AuthStore {
  authUser: any;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  checkAuth: () => void;
  signup: (data: initialStateType) => void;
}

export type authImagePatternType = {
  title: string;
  subtitle: string;
};

export type initialStateType = {
  fullName: string;
  email: string;
  password: string;
};
