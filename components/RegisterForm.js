import React, { useState } from 'react';
import { Alert, Modal, Pressable, View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard, ActivityIndicator } from 'react-native';
import { auth } from '../utils/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from "firebase/auth";

const RegisterForm = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // New state variable
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = (email, password) => {
    setIsLoading(true); // Start loading
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setIsLoading(false); // Stop loading
        setModalVisible(true); // Show modal after successful registration
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsLoading(false); // Stop loading
        // handle error here
      });
  };
  
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    // regex for email validation
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setEmailError('Пожалуйста, введите существующий E-mail');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (password) => {
    setPassword(password);
    if (password.length < 10 || !/^[a-zA-Z0-9!]+$/.test(password)) {
      setPasswordError('Пароль должен включать в себя как минимум 10 символов. Можно использовать только латинский алфавит, числа и восклицательный знак.');
    } else {
      setPasswordError('');
    }
  };

  const validatePasswordRepeat = (passwordRepeat) => {
    if (passwordRepeat !== password) {
      setPasswordRepeatError('Пароли не совпадают');
    } else {
      setPasswordRepeatError('');
    }
  };

  const formIsValid = email && password && passwordRepeat && !emailError && !passwordError && !passwordRepeatError;

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
  
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        placeholder="E-mail"
        placeholderTextColor={'#000'}
        value={email}
        onChangeText={(text) => {
          setEmail(text);
          validateEmail(text);
        }}
        onSubmitEditing={Keyboard.dismiss}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
  
      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        placeholder="Пароль"
        placeholderTextColor={'#000'}
        secureTextEntry={!showPassword}
        value={password}
        onChangeText={(text) => {
          setPassword(text);
          validatePassword(text);
        }}
        onSubmitEditing={Keyboard.dismiss}
        autoCapitalize="none"
      />
      {passwordError ? (
        <Text style={styles.errorText}>{passwordError}</Text>
      ) : null}
  
      <TextInput
        style={[styles.input, passwordRepeatError && styles.inputError]}
        placeholder="Повторите пароль"
        placeholderTextColor={'#000'}
        secureTextEntry={!showPassword}
        value={passwordRepeat}
        onChangeText={(text) => {
          setPasswordRepeat(text);
          validatePasswordRepeat(text);
        }}
        onSubmitEditing={Keyboard.dismiss}
        autoCapitalize="none"
      />
      {passwordRepeatError ? (
        <Text style={styles.errorText}>{passwordRepeatError}</Text>
      ) : null}
  
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleShowPassword}>
          <Text>Показать пароль</Text>
        </TouchableOpacity>
      </View>
  
      <TouchableOpacity
        style={[styles.button, !formIsValid && styles.buttonDisabled]}
        onPress={() => handleRegister(email, password)} // HandleRegister call wrapped in arrow function
        disabled={!formIsValid}
      >
        <Text style={styles.buttonText}>Зарегистрироваться</Text>
      </TouchableOpacity>
    </View>
  );
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 55,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    padding: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 13,
    marginLeft: 30,
    marginRight: 30,
  },
  button: {
    width: '80%',
    height: 70,
    backgroundColor: '#7FE3A7',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontSize:20,
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default RegisterForm;