import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const navigation = useNavigation();

  const handleEmailChange = (text) => {
  setEmail(text);
  if (!validateEmail(text)) {
    setEmailError("Пожалуйста, введите существующий E-mail");
  } else {
    setEmailError("");
  }
};

  const handlePasswordChange = (text) => {
  setPassword(text);
  if (text.length < 10 || !/^[a-zA-Z0-9!]+$/.test(text)) {
    setPasswordError("Пароль должен включать в себя как минимум 10 символов. Можно использовать только латинский алфавит, числа и восклицательный знак.");
  } else {
    setPasswordError("");
  }
};

  const handleLoginPress = () => {
    // Do something with the email and password
  };

  const validateEmail = (email) => {
    // This is a simple regex pattern to check for a valid email address
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

const formIsValid = email && password && !emailError && !passwordError;

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, emailError && styles.inputError]}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        placeholderTextColor={'#000'}
        onChangeText={handleEmailChange}
        onSubmitEditing={Keyboard.dismiss}
      />
      
       {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
      <TextInput
        style={[styles.input, passwordError && styles.inputError]}
        placeholder="Пароль"
        secureTextEntry={!showPassword}
        value={password}
        placeholderTextColor={'#000'}
        onChangeText={handlePasswordChange}
        onSubmitEditing={Keyboard.dismiss}
      />
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={handleShowPassword}>
          <Text>Показать пароль</Text>
        </TouchableOpacity>
      </View>
      
      <TouchableOpacity style={[styles.button, formIsValid ? null : styles.buttonDisabled]} onPress={() => navigation.navigate('Mainpage')} disabled={!formIsValid}>
        <Text style={styles.buttonText}>Войти</Text>
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
    fontSize: 17,
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
    fontSize: 20,
},
});

export default LoginForm;