import React, { FC, useState } from 'react';
import {SafeAreaView, Text, View, StyleSheet, Pressable} from 'react-native';
import { useAuth } from '../../../hooks/useAuth';
import Button from '../../ui/Button';
import Field from '../../ui/Field';
import Loader from '../../ui/Loader';
import { useNavigation } from '@react-navigation/native';

interface IData {
  email: string
  password: string
}

const Auth: FC = () => {
  const {isLoading, login, register} = useAuth();
  const [isReg, setIsReg] = useState(false);
  const [data, setData] = useState<IData>({} as IData);

  const authHandler = async () => {
    const {email, password} = data;
    if (!isReg) {
      await register(email, password);
    } else {
      await login(email, password);
    }
    setData({} as IData);
  }

  return (
    <SafeAreaView>
      <View style={styles.forAuth}>
        <View style={styles.boxforText}>
          <Text style={styles.forAuthText}>{isReg ? 'Sign up': 'Sign in'}</Text>
          {isReg ? <Loader/> : <>
          <Field val={data.email} placeholder='Enter Email' onChange={val => setData({...data, email: val})} />
          <Field val={data.password} placeholder='Enter Password' isSecure={true} onChange={val => setData({...data, password: val})} />
          <Button onPress={authHandler} title={`Let's go`}></Button>
          <Pressable style={styles.forPressable} onPress={() => setIsReg(!isReg)}>
            <Text style={styles.forTextPressable}>{isReg ? 'Login': 'Register'}</Text>
          </Pressable>
          </>}
        </View>
      </View>
    </SafeAreaView>
  
  );
};
const styles = StyleSheet.create({
  forAuth: {
    height: '100%',
    alignItems: "center",
    justifyContent: 'center',
  },
  boxforText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '70%',
  },
  forAuthText: {
    fontSize: 20,
  },
  forPressable: {
    height: 25,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 20,
    marginTop: 10,
  },
  forTextPressable: {
    fontSize: 16,
    opacity: 0.5,
  },
})
export default Auth;
