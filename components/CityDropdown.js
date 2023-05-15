import React, { useState } from 'react';
import { View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const CityDropdown = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Алматы', value: 'almaty'},
    {label: 'Астана', value: 'astana'},
    {label: 'Актобе', value: 'aktobe'},
    {label: 'Караганда', value: 'karaganda'},
    {label: 'Жопа', value: 'jopa'},
    {label: 'A', value: 'a'},
    {label: 'B', value: 'b'},

  ]);

  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder="Жопа"
      containerStyle={{ 
        height: 40, 
        marginBottom: 10,
        zIndex: 10,
         }}
      style={{ 
        backgroundColor: '#fafafa'
        }}
      disableBorderRadius={true}
      scrollViewProps={{
        // Additional props for the ScrollView component
        nestedScrollEnabled: true,
      }}
    />
  );
};

export default CityDropdown;
