import React from "react";
import * as yup from 'yup';
import {Button, TextField} from '@material-ui/core';
import { useFormik } from "formik";

const validationSchema = yup.object({
  comment: yup
    .string()
    .min(5, 'Comment should have at list 5 symbols')
    .max(100, 'Comment should have no more than 100 symbols')
    .required('Comment is required')
});

const FansForm: React.FC = () => {
  const formik = useFormik({
        initialValues: {
          comment: '',
        },
        validationSchema,
        onSubmit: (values) => {
          console.log(11212);
          
          alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <form action="" onSubmit={formik.handleSubmit} className="add-appeal">
       <TextField
          id="comment"
          label="Comment"
          name="comment"
          multiline
          rows={4}
          variant="outlined"
          className="add-comment-appeal"
          value={formik.values.comment}
          onChange={formik.handleChange}
          error={formik.touched.comment && !!formik.errors.comment}
          helperText={formik.touched.comment && formik.errors.comment}
        />
        <Button className="add-appeal-btn" type="submit">Add appeal</Button>  
      </form>
  );
};

export default FansForm;


// import React from 'react';
// import ReactDOM from 'react-dom';
// import { useFormik } from 'formik';
// import * as yup from 'yup';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';

// const validationSchema = yup.object({
//   email: yup
//     .string()
//     .email('Enter a valid email')
//     .required('Email is required'),
//   password: yup
//     .string()
//     .min(8, 'Password should be of minimum 8 characters length')
//     .required('Password is required'),
// });

// const WithMaterialUI = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: 'foobar@example.com',
//       password: 'foobar',
//     },
//     validationSchema: validationSchema,
//     onSubmit: (values) => {
//       alert(JSON.stringify(values, null, 2));
//     },
//   });

//   return (
//     <div>
//       <form onSubmit={formik.handleSubmit}>
//         <TextField
//           fullWidth
//           id="email"
//           name="email"
//           label="Email"
//           value={formik.values.email}
//           onChange={formik.handleChange}
//           error={formik.touched.email && Boolean(formik.errors.email)}
//           helperText={formik.touched.email && formik.errors.email}
//         />
//         <TextField
//           fullWidth
//           id="password"
//           name="password"
//           label="Password"
//           type="password"
//           value={formik.values.password}
//           onChange={formik.handleChange}
//           error={formik.touched.password && Boolean(formik.errors.password)}
//           helperText={formik.touched.password && formik.errors.password}
//         />
//         <Button color="primary" variant="contained" fullWidth type="submit">
//           Submit
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default WithMaterialUI