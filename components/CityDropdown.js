import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CityDropdown = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const cities = [
    { label: 'New York', value: 'new-york' },
    { label: 'London', value: 'london' },
    { label: 'Paris', value: 'paris' },
    // Add more cities as needed
  ];

  return (
    <View>
      <DropDownPicker
        items={cities}
        defaultValue={selectedCity}
        placeholder="Select a city"
        containerStyle={{ height: 40, marginBottom: 10 }}
        style={{ backgroundColor: '#fafafa' }}
        itemStyle={{ justifyContent: 'flex-start' }}
        dropDownStyle={{ backgroundColor: '#fafafa' }}
        onChangeItem={(item) => setSelectedCity(item.value)}
      />
    </View>
  );
};

export default CityDropdown;
