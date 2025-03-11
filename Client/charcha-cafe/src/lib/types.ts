export interface AuthStore {
    authUser: any,
    isSigningUp: boolean,
    isLoggingIn: boolean,
    isUpdatingProfile: boolean,
    isCheckingAuth: boolean,
    checkAuth: () => void;
    signup: () => void;
}

export type authImagePatternType = {
    title: string,
    subtitle: string
} 