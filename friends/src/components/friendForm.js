import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  StyledForm,
  FormContainer,
  StyledInput,
  StyledError,
  StyledLabel,
  PrimaryButton
} from "./styledComponents";

// in order to render my custom styled component in the field component, it needs to be given it's formik properties back
const CustomInputComponent = ({
  field,
  form: { touched, errors },
  ...props // { name, value, onChange, onBlur }
}) => {
  return (
    <div style={{ position: "relative" }}>
      <StyledLabel htmlFor="name">
        {field.name.replace(field.name[0], field.name[0].toUpperCase())}:
      </StyledLabel>
      <ErrorMessage name={field.name}>
        {msg => <StyledError>{msg}</StyledError>}
      </ErrorMessage>
      <StyledInput
        {...props}
        {...field}
        style={
          touched[field.name] && errors[field.name]
            ? { border: "1px solid #7f0000" }
            : { border: "1px solid #cfd8dc" }
        }
      />
    </div>
  );
};

const FriendForm = ({ addFriend, activeFriend, updateFriend }) => {
  return (
    <FormContainer>
      <h3 style={{ textAlign: "center" }}>
        {activeFriend ? "Update Friend" : "Add A Friend"}
      </h3>
      <Formik
        enableReinitialize
        initialValues={{
          email: activeFriend ? activeFriend.email : "",
          age: activeFriend ? activeFriend.age : "",
          name: activeFriend ? activeFriend.name : ""
        }}
        onSubmit={(values, actions) => {
          activeFriend
            ? updateFriend(values, actions, activeFriend.id)
            : addFriend(values, actions);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string().required("Email is required"),
          age: Yup.number().required("Age is required")
        })}
        render={props => (
          <StyledForm onSubmit={props.handleSubmit}>
            <Field
              type="name"
              name="name"
              placeholder="Name"
              component={CustomInputComponent}
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
            <PrimaryButton type="submit">
              {activeFriend ? "Update Friend" : "Add Friend"}
            </PrimaryButton>
          </StyledForm>
        )}
      />
    </FormContainer>
  );
};

export default FriendForm;
