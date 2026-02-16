interface Authstate {
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
}

type AuthContext = {
    isSignedIn: boolean;
    userName: string | null;
    userId: string | null;
    refreshAuthState: () => Promise<boolean>;
    signedIn: () => Promise<boolean>;
    signOut: () => Promise<boolean>;
}