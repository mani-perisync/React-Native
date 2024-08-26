import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { RNPickerSelect } from 'react-native-picker-select';

export const DropDownComponent = ()=> {
    const [selectedValue, setSelectedValue] = useState(null);

    const placeholder = {
        label: 'Gender',
        value: null,
    };

    const genderoptions = [
        {gender:'Male'},
        {gender:'Female'},
        {gender:'Other'}
    ];

  return (
    <View>
      <Text>Gender</Text>
      <RNPickerSelect
        placeholder={placeholder}
        items={genderoptions}
        onValueChange={(value) => setSelectedValue(value)}
        value={selectedValue}
      />
      {selectedValue && <Text>Selected: {selectedValue}</Text>}
    </View>
  )
}
