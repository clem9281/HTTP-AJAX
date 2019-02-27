import React, { useState } from "react";
import { Formik, FormikProps, Form, Field } from "formik";
import {
  StyledForm,
  FormContainer,
  HeaderDiv,
  StyledInput
} from "./styledComponents";
import axios from "axios";

// in order to render my custom styled component in the field component, it needs to be given it's formik properties back
const CustomInputComponent = ({
  field,
  ...props // { name, value, onChange, onBlur }
}) => (
  <div>
    <StyledInput {...props} {...field} />
  </div>
);

const FriendForm = props => {
  return (
    <FormContainer>
      <HeaderDiv>
        <h3>Add a Friend</h3>
      </HeaderDiv>
      <Formik
        initialValues={{ email: "", age: "", name: "" }}
        onSubmit={(values, actions) => {
          console.log(values);
          axios.post("http://localhost:5000/friends", values);
        }}
        render={(props: FormikProps<Values>) => (
          <StyledForm onSubmit={props.handleSubmit}>
            <Field
              type="name"
              name="name"
              placeholder="Name"
              component={CustomInputComponent}
              value={props.name}
            />
            <Field
              type="number"
              name="age"
              placeholder="Age"
              component={CustomInputComponent}
            />
            <Field
              type="email"
              name="email"
              placeholder="Email"
              component={CustomInputComponent}
            />

            <button type="submit">Submit</button>
          </StyledForm>
        )}
      />
    </FormContainer>
  );
};

export default FriendForm;
