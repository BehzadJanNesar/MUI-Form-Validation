import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

interface FormData {
   email: string;
   password: string;
}

export default function LoginForm_RHF() {
   const {
      control,
      handleSubmit,
      formState: { errors, isValid },
   } = useForm<FormData>({
      mode: "onBlur",
      defaultValues: {
         email: "",
         password: "",
      },
      resolver: async (data) => {
         console.log(data);
         return {
            values: data,
            errors: {
               email: !data.email
                  ? "این فیلد باید پر شود"
                  : !/^\S+@\S+\.\S+$/.test(data.email)
                  ? "ایمیل وارد شده صحیح نمیباشد"
                  : undefined,
               password: !data.password
                  ? "این فیلد باید پر شود"
                  : !/^[a-zA-Z0-9]{8,}$/.test(data.password)
                  ? "رمز عبور وارد شده صحیح نمیباشد"
                  : undefined,
            },
         };
      },
   });
   console.log(control);

   const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

   // console.log(errors);

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
               rules={{
                  required: "این فیلد باید پر شود",
                  pattern: {
                     value: /^\S+@\S+\.\S+$/,
                     message: "ایمیل وارد شده صحیح نمیباشد",
                  },
               }}
               render={({ field, fieldState }) => (
                  <TextField
                     label="ایمیل"
                     value={field.value}
                     type="email"
                     onBlur={field.onBlur}
                     onChange={field.onChange}
                     error={!!fieldState.error}
                     helperText={fieldState.error?.message}
                  />
               )}
            />
            <Controller
               name="password"
               control={control}
               render={({ field }) => (
                  <TextField
                     autoComplete="false"
                     label="پسوورد"
                     type="password"
                     value={field.value}
                     onChange={field.onChange}
                     error={!!errors.password}
                     helperText={errors.password ? errors.password.message : undefined}
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
