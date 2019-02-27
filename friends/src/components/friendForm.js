import React from "react";
import { Formik, FormikProps, Form, Field } from "formik";

const FriendForm = props => {
  return (
    <div>
      <h3>Add a Friend</h3>
      <Formik
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
        render={props => (
          <form onSubmit={props.handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.name}
              name="name"
            />
            {props.errors.name && <div id="feedback">{props.errors.name}</div>}
            <button type="submit">Submit</button>
          </form>
        )}
      />
    </div>
  );
};

export default FriendForm;
