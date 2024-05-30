import { Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { ChangeEvent, useEffect, useRef, useState } from "react";
const isEmailValid = (value: string) => /.+@.+\..+/.test(value);
const isPasswordValid = (value: string) => /[a-zA-Z0-9]{8,}/.test(value);

export default function LoginForm() {
   const [emailValue, setEmailValue] = useState<string>("");
   const [passwordValue, setPasswordValue] = useState<string>("");
   const [isValid, setIsValid] = useState<boolean>(false);
   function handelSetEmailValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      setEmailValue(event.target.value);
   }
   function handelSetPasswordValue(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      setPasswordValue(event.target.value);
   }
   const ref = useRef();

   useEffect(() => {
      let isNewValid = true;

      if (!isEmailValid(emailValue)) {
         isNewValid = false;
      }
      if (!isPasswordValid(passwordValue)) {
         isNewValid = false;
      }

      setIsValid(isNewValid);
   }, [emailValue, passwordValue]);

   return (
      <Paper component="form" sx={{ margin: "auto", width: "50%", mt: 5 }}>
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
               value={emailValue}
               label="ایمیل"
               type="email"
               onChange={handelSetEmailValue}
               ref={ref}></TextField>
            <TextField
               value={passwordValue}
               label="پسوورد"
               type="password"
               onChange={handelSetPasswordValue}></TextField>
            <Button variant="contained" disabled={!isValid}>
               ورود
            </Button>
         </Stack>
      </Paper>
   );
}
