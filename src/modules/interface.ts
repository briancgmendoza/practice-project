export interface AuthState {
    readonly isAuthenticated: boolean;
    readonly isloading: boolean;
    readonly profile: Profile;
    readonly error: null;
    readonly navbar: boolean;
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

export interface GetProfileSaga {
    type: string;
    userId: string;
}

export interface Profile {
    firstname: string;
    email: string;
    lastLogin: string;
    lastName?: string;
    fullName?: string;
    userId?: string;
    profilePicture?: string;
    accessToken?: string;
    googleId?: string;
    refreshToken?: string;
}