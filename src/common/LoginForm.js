import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { ScrollView, Text, TouchableOpacity } from 'react-native';

import MyInput from '../common/Input';

const onSubmit = (values) => {
  console.log(values);
};

function MyForm(props) {
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <Text>Username</Text>
      <Field
        name={'username'}
        component={MyInput}
      />
      <Text>Password</Text>
      <Field
        name={'password'}
        secureTextEntry={true}
        component={MyInput}
      />

      <TouchableOpacity onPress={props.handleSubmit(onSubmit)}>
        <Text>Submit!</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

export default reduxForm({ form: 'signIn' })(MyForm);
