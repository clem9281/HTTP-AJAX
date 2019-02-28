import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import {
  StyledForm,
  FormContainer,
  HeaderDiv,
  StyledInput
} from "./styledComponents";

// in order to render my custom styled component in the field component, it needs to be given it's formik properties back
const CustomInputComponent = ({
  field,
  ...props // { name, value, onChange, onBlur }
}) => {
  return (
    <div>
      <StyledInput {...props} {...field} />
      <ErrorMessage name={field.name}>{msg => <div>{msg}</div>}</ErrorMessage>
    </div>
  );
};

const FriendForm = ({ addFriend, activeFriend, updateFriend }) => {
  return (
    <FormContainer>
      <HeaderDiv>
        <h3>Add a Friend</h3>
      </HeaderDiv>
      <Formik
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
            <button type="submit">
              {activeFriend ? "Update Friend" : "Add Friend"}
            </button>
          </StyledForm>
        )}
      />
    </FormContainer>
  );
};

export default FriendForm;
