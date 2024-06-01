import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

interface FormData {
   email: string;
   password: string;
}

const validationSchema = yup.object({
   email: yup.string().email("ایمیل وارد شده صحیح نمیباشد").required("این فیلد باید پر شود"),
   password: yup
      .string()
      .matches(/[a-zA-Z0-9]{8,}/, "رمز عبور وارد شده صحیح نمیباشد")
      .required("این فیلد باید پر شود!"),
});

export default function LoginForm_RHF() {
   const {
      control,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm<FormData>({
      resolver: yupResolver(validationSchema),
      mode: "onBlur",
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

   return (
      <Paper
         component="form"
         onSubmit={handleSubmit(onSubmit)}
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
            <Controller
               name="email"
               control={control}
               render={({ field }) => (
                  <TextField
                     {...field}
                     label="ایمیل"
                     type="email"
                     onBlur={field.onBlur}
                     helperText={errors.email ? errors.email.message : null}
                     error={!!errors.email}
                  />
               )}
            />
            <Controller
               name="password"
               control={control}
               render={({ field }) => (
                  <TextField
                     {...field}
                     label="پسوورد"
                     type="password"
                     onBlur={field.onBlur}
                     helperText={errors.password ? errors.password.message : null}
                     error={!!errors.password}
                  />
               )}
            />
            <Button type="submit" variant="contained" disabled={!isValid}>
               ورود
            </Button>
         </Stack>
      </Paper>
   );
}
