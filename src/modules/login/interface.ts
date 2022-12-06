export interface AuthState {
  readonly isAuthenticated: boolean;
  readonly isLoading: boolean;
}

export interface Body {
  type: string;
  body: object;
}

export interface LoginSaga {
  type: string;
  body: {
    googleId: string;
    googleIdToken: string;
    imageUrl: string;
  };
}
