export interface AuthStore {
  authUser: any;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isUpdatingProfile: boolean;
  isCheckingAuth: boolean;
  onlineUsers:[],
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

export type usersType = {
  _id: string;
  fullName?: string;
  email?: string;
  profilePic: string;
  createdAt: string;
  updatedAt: string;
  __v?: number;
}
export interface ChatStore {
  messages: any[];
  users: usersType[];
  selectedUser: any;
  isUsersLoading: boolean;
  isMessagesLoading: boolean;

  // Adjust the type of getMessages to include userId as an argument
  getUsers: () => void;
  getMessages: (userId: string) => Promise<void>; // Fix the signature here
  setSelectedUser: (user: usersType) => void;
  sendMessage: (d:any) => Promise<void>
  subscribeToMessages: () => void;
  unsubscribeFromMessages: () => void;
}
