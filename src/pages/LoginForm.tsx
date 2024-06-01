import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import { FormEvent } from "react";
import * as yup from "yup";

//    VALIDITION WITH USE-STATE
// const isEmailValid = (value: string) => /.+@.+\..+/.test(value);
// const isPasswordValid = (value: string) => /[a-zA-Z0-9]{8,}/.test(value);

// interface InitialValues {
//    email: string;
//    password: string;
// }

export default function LoginForm() {
   // VALIDATION WITH FORMIK AND YUP
   const validationSchema = yup.object({
      email: yup.string().email("ایمیل وارد شده صحیح نمیباشد...").required("این فیلد باید پر شود!"),
      password: yup
         .string()
         .matches(/[a-zA-Z0-9]{8,}/, "رمز عبور وارد شده صحیح نمیباشد")
         .required("این فیلد باید پر شود!"),
   });
   const formik = useFormik<{ email: string; password: string }>({
      initialValues: {
         email: "",
         password: "",
      },
      validationSchema,
      onSubmit: (value, { setSubmitting }) => {
         console.log(value);
         setSubmitting(false);
      },
   });

   function handelOnSubmitForm(event: FormEvent<HTMLFormElement>) {
      event.preventDefault();
      formik.handleSubmit();
   }

   //    VALIDITION WITH USE-STATE
   // const [emailValue, setEmailValue] = useState<string>("");
   // const [passwordValue, setPasswordValue] = useState<string>("");
   // const [isValid, setIsValid] = useState<boolean>(false);
   // function handelSetEmailValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
   //    setEmailValue(event.target.value);
   // }
   // function handelSetPasswordValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
   //    setPasswordValue(event.target.value);
   // }

   // useEffect(() => {
   //    let isNewValid = true;

   //    if (!isEmailValid(emailValue)) {
   //       isNewValid = false;
   //    }
   //    if (!isPasswordValid(passwordValue)) {
   //       isNewValid = false;
   //    }

   //    setIsValid(isNewValid);
   // }, [emailValue, passwordValue]);

   return (
      <Paper
         component="form"
         onSubmit={handelOnSubmitForm}
         sx={{ margin: "auto", width: "50%", mt: 5 }}>
         <Stack
            border={"1px solid primary"}
            spacing={3}
            sx={{ margin: "auto" }}
            direction={"column"}
            width={500}
            height={300}>
            <Typography textAlign={"center"} variant="h1" color="primary">
               Login Form
            </Typography>
            <TextField
               name="email"
               value={formik.values.email}
               label="ایمیل"
               type="email"
               onBlur={formik.handleBlur}
               helperText={formik.touched.email && formik.errors.email}
               error={formik.touched.email && Boolean(formik.errors.email)}
               onChange={formik.handleChange}></TextField>
            <TextField
               name="password"
               value={formik.values.password}
               label="پسوورد"
               type="password"
               helperText={formik.touched.password && formik.errors.password}
               error={formik.touched.password && Boolean(formik.errors.password)}
               onChange={formik.handleChange}></TextField>
            <Button type="submit" variant="contained" disabled={!formik.isValid}>
               ورود
            </Button>
         </Stack>
      </Paper>
   );
}
