import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Keyboard } from 'react-native';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordRepeatError, setPasswordRepeatError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    // handle registration logic here
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
        onPress={handleRegister}
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
});

export default RegisterForm;