import React from 'react'
import { Formik } from 'formik';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import Screen from '../components/screen';
import colors from '../config/colors';
import AppButton from '../components/button';

const SigninScreen = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Screen style={styles.inner}>
          <Text style={styles.title}>Welcome, Back</Text>
          <Text style={styles.subTitle}>Provide your credentials for you to continue</Text>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => console.log(values)}
          >
            {({ handleSubmit, setFieldTouched, setFieldValue, values }) => (
              <>
                <View style={styles.formGroup}>
                  <TextInput
                    autoFocus
                    onChangeText={text => setFieldValue('email', text)}
                    onBlur={() => setFieldTouched('email')}
                    value={values.email}
                    placeholder='Email name'
                  />
                </View>
                <View style={styles.formGroup}>
                  <TextInput

                    onChangeText={text => setFieldValue('password', text)}
                    onBlur={() => setFieldTouched('password')}
                    value={values.password}
                    placeholder='Password'
                    secureTextEntry
                  />
                </View>
                <AppButton text="Login to account" style={{ marginTop: 30, elevation: 3 }} onPress={handleSubmit} />
              </>
            )}
          </Formik>
          <View style={{ marginTop: 40, flexDirection: 'row' }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </Screen>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  formGroup: {
    alignSelf: 'flex-start',
    padding: 1,
    marginVertical: 10,
    borderBottomColor: colors.muted,
    borderBottomWidth: .3,
    width: '95%'
  },
  title: {
    fontSize: 21,
    color: colors.primary,
    fontWeight: '700'
  },
  subTitle: {
    fontSize: 13,
    marginTop: 5,
    color: colors.muted,
    marginBottom: 40
  }
})

export default SigninScreen;
