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