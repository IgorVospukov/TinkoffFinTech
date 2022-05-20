import { createContext, useMemo, useState, useEffect, FC } from "react";
import { onAuthStateChanged, User } from 'firebase/auth';
import { Alert } from 'react-native';
import { db, register, logout, auth, login } from "../firebase";
import { addDoc, collection } from "@firebase/firestore";


interface IContext {
  user: User | null
  isLoading: boolean,
  register: (email: string, password: string) => Promise<void>
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}
export const AuthContext = createContext<IContext>({} as IContext)

const AuthProvider: FC  = ({children}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoadingInitial, setIsLoadingInitial] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const registerHandler = async (email:string, password: string) => {
    setIsLoading(true);
    try {
      const {user} = await register(email, password);
      await addDoc(collection(db, 'users'), {
        id: user.uid,
        displayName: 'no name'
      })
    } catch (error: any) {
      Alert.alert('error register', error);
    } finally {
      setIsLoading(false);
    }
  }

  const logInHandler = async (email:string, password: string) => {
    setIsLoading(true)
    try {
      await login (email, password);
    } catch (error: any) {
      Alert.alert('error login', error);
    } finally {
      setIsLoading(false);
    }
  }

  const logOutHandler = async () => {
    setIsLoading(true)
    try {
      await logout ();
    } catch (error: any) {
      Alert.alert('error logout', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => onAuthStateChanged(auth, user => {
    setUser(user || null);
    setIsLoadingInitial(false)
  }), []);

  const value = useMemo(() => ({
    user, isLoading, login: logInHandler, logout: logOutHandler, register: registerHandler
  }), [user, isLoading]);
  return <AuthContext.Provider value={value}>{!isLoadingInitial && children}</AuthContext.Provider>;
}

export default AuthProvider;