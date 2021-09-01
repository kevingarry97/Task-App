import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AppButton from '../components/button';
import Screen from '../components/screen';
import colors from '../config/colors';
import { Feather } from '@expo/vector-icons';

const categories = [
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
    key: 4,
    color: '#E63F4A',
    value: 'Friends',
  },
]

const ListingScreen = ({ navigation }) => {

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  return (
    <Screen style={styles.container}>
      <View style={styles.top}>
        <View>
          <Text style={{ color: '#ABABAB', fontSize: 16 }}>Hello, Serge</Text>
          <Text style={{ fontSize: 20, color: '#171717', fontWeight: '700' }}>You've got</Text>
          <Text style={{ fontSize: 20, color: '#171717', fontWeight: '700' }}>8 tasks today</Text>
        </View>
        <AppButton text="Add task" width="35%" color="dark" onPress={() => navigation.navigate('CreateListings')} />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#ececec', paddingVertical: 7, paddingHorizontal: 10, borderRadius: 5, marginVertical: 5 }}>
        <Feather name="search" size={18} color="black" style={{ marginRight: 5 }} />
        <TextInput
          placeholderTextColor="#D5D5D5"
          placeholder="Search something..."
        />
      </View>
      <View style={styles.content}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>My tasks</Text>
      </View>
      <ScrollView contentContainerStyle={styles.tasks} showsVerticalScrollIndicator={false}>
        {data.map((d, key) => (
          <View key={key} style={styles.task}>
            <Text style={{ fontWeight: '700' }}>Medical LP</Text>
            <View style={{ marginVertical: 10 }}>
              <Text style={{ color: '#C8C8C8' }}>Make a landing page and mobile app</Text>
            </View>
            <View style={styles.category}>
              {categories.map((category, key) => (
                <TouchableOpacity key={key} style={[styles.item, { backgroundColor: category.color }]}>
                  <Text style={{ color: colors.white, fontSize: 12 }}>{category.value}</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Text style={{ color: '#787878', fontWeight: '700' }}>30-Aug-2021</Text>
          </View>
        ))}
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  category: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 50,
    backgroundColor: '#F5F5F5'
  },
  content: {
    marginVertical: 10
  },
  item: {
    paddingVertical: 3.5,
    paddingHorizontal: 6,
    borderRadius: 3,
    margin: 2.5,
  },
  task: {
    width: '46.5%',
    margin: 5,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.white
  },
  tasks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 20
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 25
  }
})

export default ListingScreen;
