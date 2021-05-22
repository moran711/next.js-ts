import React, { ChangeEvent, useState } from "react";
import { Button, TextField } from "@material-ui/core";
import * as yup from "yup";
import { useFormik } from "formik";
import { gql } from "apollo-boost";
import { useMutation } from "@apollo/client";
import { useDispatch } from "react-redux";
import { setSnackBarMessage, setSnackBarSeverity, setSnackBarStatus } from "../../redux/snackbar/snackbar.actions";
import { useRouter } from "next/router";


const ADD_NEWS = gql`
  mutation($image: String!, $title: String, $text: String) {
    addNews(image: $image, title: $title, text: $text) {
      _id
    }
  }
`


const validationSchema = yup.object({
  title: yup
    .string()
    .min(5, "Title should have at list 5 symbols")
    .max(30, "Title should have no more than 30 symbols")
    .required("Title is required"),
  text: yup
    .string()
    .min(5, "Text should have at list 5 symbols")
    .max(100, "Text should have no more than 30 symbols")
    .required("Text is required"),
});

const AdminForm: React.FC = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);

  const router = useRouter();
  const refreshData = () => {
    router.replace(router.asPath);
  }

  const [addNews, { data }] = useMutation(ADD_NEWS);

  const openSnackbarWithMessage = (message:string, severity?:string) => {
    dispatch(setSnackBarSeverity(severity));
    dispatch(setSnackBarMessage(message));
    dispatch(setSnackBarStatus(true))
  };


  const formik = useFormik({
    initialValues: {
      title: "",
      text: "",
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (!image) {
        openSnackbarWithMessage('Please add photo', 'error');
        return;
      }
      
      addNews({variables: {
        ...values,
        image
      }})
      setImage('');
      resetForm();
      refreshData();
    },
  });
  const onImageChange = (e:ChangeEvent<HTMLInputElement>) => {
    const FR= new FileReader();
    FR.addEventListener("load", (e: Event) => {
      setImage(FR.result);
    }); 
    
    FR.readAsDataURL( e.target.files[0] );
  }
  return (
    <>
      <h2 className="admin-header">Add news</h2>
      <form action="" className="add-news" onSubmit={formik.handleSubmit}>
        <img className="added-image" src={image ? image : '/news-img.png'}alt="barselona logo" />
        <label className="custom-file-upload">
            <input
              type="file"
              accept="image/*"
              name="image"
              id="file"
              onChange={onImageChange}
            />
            Upload
        </label>
        <div className="input-container">
          <TextField
            id="title"
            label="News title"
            name="title"
            variant="outlined"
            className="add-news-title"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && !!formik.errors.title}
            helperText={formik.touched.title && formik.errors.title}
          />
          <TextField
            id="text"
            label="Text"
            name="text"
            multiline
            rows={4}
            variant="outlined"
            className="add-news-text"
            value={formik.values.text}
            onChange={formik.handleChange}
            error={formik.touched.text && !!formik.errors.text}
            helperText={formik.touched.text && formik.errors.text}
          />
          <Button className="add-news-btn" type="submit">
            Add news
          </Button>
        </div>
      </form>
    </>
  );
};

export default AdminForm;
