import React from 'react';
import {
  Button,
  Checkbox,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Avatar,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import { green } from '@mui/material/colors';
import axios from 'axios';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

export default function SignUp({setFormData}) {
  const history=useHistory();
  const { register, formState: { errors, isValid }, handleSubmit } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    axios.post('https://reqres.in/api/users', data)
    .then(function (response) {
      console.log(response.data);
      setFormData(response.data)
      history.push("/signin")
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <Container component="main" maxWidth="xs" className="register-container form-container">
      <CssBaseline />
      <div className='signUp-icon'>
      <Avatar sx={{ width: 56, height: 56}}>
        <LockOutlined />
      </Avatar>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                {...register("firstName", {
                  required: "Ad alanı zorunludur.",
                  minLength: {
                    value: 3,
                    message: "Ad en az 3 karakter olmalıdır."
                  }
                })}
                error={!!errors.firstName}
                helperText={errors.firstName ? errors.firstName.message : ""}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                autoComplete="lname"
                {...register("lastName", { required: "Soyad alanı zorunludur.",minLength: {
                  value: 3,
                  message: "Soyad en az 3 karakter olmalıdır."
                } })}
                error={!!errors.lastName}
                helperText={errors.lastName ? errors.lastName.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                autoComplete="email"
                {...register("email", { required: "Email alanı zorunludur.",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Geçerli bir email adresi giriniz."
                  }

                 })}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                label="Password"
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "Şifre alanı zorunludur.",
                  minLength: {
                    value: 6,
                    message: "Şifre en az 6 karakter olmalıdır."
                  }, pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    message: "Şifre en az 1 büyük harf, 1 küçük harf, 1 rakam ve 1 özel karakter içermelidir."
                  }
                })}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
                sx={{ textAlign: "left" }}
              />
            </Grid>
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary" disabled={!isValid}>
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
