import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView, } from 'react-native';
import Modal from 'react-native-modal';
import Ionicons from 'react-native-vector-icons/Ionicons';

import CityDropdown from './CityDropdown';

const BottomSheet = ({ isVisible, onClose }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const [checkboxes, setCheckboxes] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
  };

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevState) => ({
      ...prevState,
      [checkboxName]: !prevState[checkboxName],
    }));
  };

  return (
    <Modal
      isVisible={isVisible}
      style={styles.modal}
      onBackdropPress={onClose}
      swipeDirection={['down']}
      onSwipeComplete={onClose}
      propagateSwipe
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={onClose}>
          <Ionicons name="close" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={[styles.title, { marginTop: 16 }]}>Город</Text>
        <CityDropdown />
        <ScrollView>
        <View style={styles.content}>
          <Text style={[styles.title, { marginTop: 10 }]}>Комфорт</Text>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxChange('checkbox1')}
            >
              <Ionicons
                name={checkboxes.checkbox1 ? 'checkbox' : 'checkbox-outline'}
                size={24}
                color="#000"
              />
              <Text style={styles.checkboxText}>Место для мытья жопы</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxChange('checkbox2')}
            >
              <Ionicons
                name={checkboxes.checkbox2 ? 'checkbox' : 'checkbox-outline'}
                size={24}
                color="#000"
              />
              <Text style={styles.checkboxText}>Место для сранья</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxChange('checkbox3')}
            >
              <Ionicons
                name={checkboxes.checkbox3 ? 'checkbox' : 'checkbox-outline'}
                size={24}
                color="#000"
              />
              <Text style={styles.checkboxText}>Магазин рядом</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity
              style={styles.checkbox}
              onPress={() => handleCheckboxChange('checkbox4')}
            >
              <Ionicons
                name={checkboxes.checkbox4 ? 'checkbox' : 'checkbox-outline'}
                size={24}
                color="#000"
              />
              <Text style={styles.checkboxText}>Голубцы с говном</Text>
            </TouchableOpacity>
          </View>


        </View>
        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
    maxHeight: '80%',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    zIndex: 1,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  dropdownText: {
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    marginLeft: 8,
    fontSize: 16,
  },
});

export default BottomSheet;