export interface AuthStore {
  authUser: any;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  checkAuth: () => void;
  signup: (data: initialStateType) => void;
  login: (data: loginStateType) => void;
  logout: () => void;
  updateProfile: (file: {}) => void;
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

export type loginStateType = {
  fullName: string;
  email: string;
  password: string;
};
export interface themeType {
  theme: string;
  setTheme: (theme: string) => void;
}
export type previewImagesObjectType = {
  id: number;
  content: string;
  isSent: boolean;
};

export type previewImagesType = previewImagesObjectType[];
