import React, { useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import Screen from '../components/screen';
import { AntDesign } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import colors from '../config/colors';
import AppButton from '../components/button';
import { Formik } from 'formik';

const categories = [
  {
    key: 0,
    color: '#6BF87C',
    value: 'All',
  },
  {
    key: 1,
    color: '#7463FA',
    value: 'Sports',
  },
  {
    key: 2,
    color: '#F3AB56',
    value: 'Meeting',
  },
  {
    key: 3,
    color: '#A65CB2',
    value: 'Education',
  },
  {
    key: 4,
    color: '#E63F4A',
    value: 'Friends',
  },
]

const CreateListingScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState([]);

  const handleCategory = (value, key) => {
    category.some(cat => key === cat.key) ? setCategory(category.filter(c => key !== c.key)) : setCategory([...category, value]);
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const handleSubmit = ({ title, destination, description }) => {
    const payload = {
      title,
      category,
      date,
      destination,
      description
    };
    console.log('Payload ', payload);
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Screen style={styles.inner}>
          <View style={styles.top}>
            <View />
            <Text style={{ fontSize: 16, fontWeight: '700', color: colors.dark }}>Create Task</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Listings')}>
              <AntDesign name="close" size={18} color={colors.muted} />
            </TouchableOpacity>
          </View>
          <Formik
            initialValues={{ title: '', destination: '', description: '' }}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ handleSubmit, setFieldTouched, setFieldValue, values }) => (
              <>
                <ScrollView contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 20 }}>
                  <>
                    <View style={styles.formGroup}>
                      <Text style={{ color: colors.dark, marginBottom: 10, fontSize: 13, fontWeight: '600' }}>Task title</Text>
                      <TextInput
                        onChangeText={text => setFieldValue('title', text)}
                        onBlur={() => setFieldTouched('title')}
                        value={values.title}
                        placeholder='Football'
                        style={{ borderColor: colors.light, borderWidth: .6, paddingHorizontal: 8, paddingVertical: 5, fontSize: 12, borderRadius: 2 }}
                      />
                    </View>
                    <View style={styles.formGroup}>
                      <Text style={{ color: colors.dark, marginBottom: 10, fontSize: 13, fontWeight: '600' }}>Category</Text>
                      <View style={styles.category}>
                        {categories.map((category, key) => (
                          <TouchableOpacity onPress={() => handleCategory(category, category.key)} key={key} style={[styles.item, { backgroundColor: category.color }]}>
                            <Text style={{ color: colors.primary, fontWeight: '400' }}>{category.value}</Text>
                          </TouchableOpacity>
                        ))}
                      </View>
                    </View>
                    <View style={styles.formGroup}>
                      <Text style={{ color: colors.dark, marginBottom: 10, fontSize: 13, fontWeight: '600' }}>Starts</Text>
                      <TouchableOpacity onPress={showDatepicker} style={{ borderColor: colors.light, borderWidth: .6, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 4, width: '60%' }}>
                        <TextInput
                          editable={false}
                          value={date.toString().slice(4, 15)}
                          placeholder="15 May, 11: 30 AM"
                          style={{ fontSize: 14, color: colors.light }}
                        />
                      </TouchableOpacity>
                    </View>
                    <View>
                      {show && (
                        <DateTimePicker
                          testID="dateTimePicker"
                          value={date}
                          mode={mode}
                          is24Hour={true}
                          display="default"
                          onChange={onChange}
                        />
                      )}
                    </View>
                    <View style={styles.formGroup}>
                      <Text style={{ color: colors.dark, marginBottom: 10, fontSize: 13, fontWeight: '600' }}>Destination</Text>
                      <TextInput
                        onChangeText={text => setFieldValue('destination', text)}
                        onBlur={() => setFieldTouched('destination')}
                        value={values.destination}
                        placeholder="Kimironko, Mushimire"
                        style={{ borderColor: colors.light, borderWidth: .6, paddingHorizontal: 8, paddingVertical: 5, fontSize: 12, borderRadius: 2 }}
                      />
                    </View>
                    <View style={styles.formGroup}>
                      <Text style={{ color: colors.dark, marginBottom: 10, fontSize: 13, fontWeight: '600' }}>Description</Text>
                      <TextInput
                        onChangeText={text => setFieldValue('description', text)}
                        onBlur={() => setFieldTouched('description')}
                        value={values.description}
                        numberOfLines={5}
                        style={{ borderColor: colors.light, borderWidth: .6, paddingHorizontal: 8, paddingVertical: 5, fontSize: 12, borderRadius: 2 }}
                      />
                    </View>
                  </>
                </ScrollView>
                <View style={{ marginHorizontal: 25 }}>
                  <AppButton text="Create task" color="success" onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>
        </Screen>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1
  },
  formGroup: {
    alignSelf: 'flex-start',
    padding: 1,
    marginVertical: 8,
    width: '95%'
  },
  inner: {
    flex: 1,
    paddingVertical: 10
  },
  item: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 3,
    margin: 2.5,
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    borderBottomColor: colors.dark,
    borderBottomWidth: .3
  }
})

export default CreateListingScreen;
