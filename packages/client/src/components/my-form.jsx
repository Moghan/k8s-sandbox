// ./components/my-form-component.js'
import React from 'react';
// import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';

class MyForm extends React.Component {
  handleSubmit(val) {
    // Do anything you want with the form value
    console.log(val);
  }

  render() {
    return (
      <Form
        model="user"
        onSubmit={(val) => this.handleSubmit(val)}
      >
        <label htmlFor="user.firstName">First name</label>
        <Control.text model="user.firstName" id="user.firstName" />

        <label htmlFor="user.lastName">Last name</label>
        <Control.text model="user.lastName" id="user.lastName" />

        <button type="submit">Submit!</button>
      </Form>
    );
  }
}

// No need to connect()!
export default MyForm;