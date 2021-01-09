import React from "react";
import * as yup from 'yup';
import {Button, TextField} from '@material-ui/core';
import { useFormik } from "formik";
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { addComment } from "../../redux/comment/comment.actions";

const validationSchema = yup.object({
  comment: yup
    .string()
    .min(5, 'Comment should have at list 5 symbols')
    .max(100, 'Comment should have no more than 100 symbols')
    .required('Comment is required')
});

const FansForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }
  const formik = useFormik({
        initialValues: {
          comment: '',
        },
        validationSchema,
        onSubmit: (values, {resetForm}) => {
          dispatch(addComment(values.comment));
          resetForm({});
          refreshData();
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
