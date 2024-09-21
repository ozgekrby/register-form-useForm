import React from 'react';
import {
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
  Avatar,
  Link,
} from "@mui/material";
import LockOutlined from "@mui/icons-material/LockOutlined";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
const userData = {
  firstName: 'johndoe@example.com', 
  password: 'password123',       
};

export default function SignIn({formData}) {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const history=useHistory();
  const onSubmit = (data) => {
    const { email, password } = data;
    if (email === formData.email&& password === formData.password) {
      toast.success("Giriş başarılı!");
      history.push("/home")
    } else {
      toast.error("Hatalı email veya şifre!");
    }
  };

  return (
    <Container component="main" maxWidth="xl" className='register-container form-container'>
      <CssBaseline />
      <div className='signUp-icon'>
        <Avatar sx={{ width: 56, height: 56 }}>
          <LockOutlined />
        </Avatar>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} >
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              sx={{
                height: '5rem',
                '& .MuiInputBase-input': {
                  fontSize: '1.2rem',
                },
              }}
              {...register('email', { required: true })}
              error={!!errors.email}
              helperText={errors.email && 'Email gerekli'}
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
              sx={{
                height: '5rem',
                '& .MuiInputBase-input': {
                  fontSize: '1.2rem',
                },
              }}
              {...register('password', { required: true })}
              error={!!errors.password}
              helperText={errors.password && 'Password gerekli'}
            />
          </Grid>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign In
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/signup" variant="body2">
                Don't you have an account? Sign up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <ToastContainer />
    </Container>
  );
}
