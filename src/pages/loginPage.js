import React from 'react';
import * as Components from '../components/login';
import LoginImage from '../assets/Image.jpg';
import { useFormik } from "formik";
import * as Yup from "yup";
import "../App.css";
import PasswordInput from "../components/passwordField";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate();
    // Validation schema for sign-in
    const signInSchema = Yup.object().shape({
        username: Yup.string().required("Username is required"),
        password: Yup.string().required("Password is required"),
        role: Yup.string().required("Role is required")
    });

    // Login
    const loginFormik = useFormik({
        initialValues: {
            username: '',
            password: '',
            role: ''
        },
        validationSchema: signInSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                // Store role in local storage
                localStorage.setItem('role', values.role);

                // Navigate to different dashboards based on role
                if (values.username === 'admin' && values.password === 'admin') {
                    navigate('/accounts-handling');
                } else {
                    console.error('Invalid username or password');
                }
                resetForm();
            } catch (error) {
                console.error('Login error:', error);
            }
        }
    });

    return (
        <div className="login-signup-page-container">
            <Components.Container>
                <Components.SignInContainer signingIn>
                    <Components.Form onSubmit={loginFormik.handleSubmit}>
                        <Components.Title>Sign In</Components.Title>
                        <Components.Input
                            className="input-field"
                            type="text"
                            placeholder="Username"
                            {...loginFormik.getFieldProps("username")}
                        />
                        {loginFormik.touched.username && loginFormik.errors.username ? (
                            <div className="error-message">{loginFormik.errors.username}</div>
                        ) : null}
                        <PasswordInput
                            className="input-field"
                            placeholder="Password"
                            {...loginFormik.getFieldProps('password')}
                        />
                        {loginFormik.touched.password && loginFormik.errors.password ? (
                            <div className="error-message">{loginFormik.errors.password}</div>
                        ) : null}
                        <Components.Select
                            className="input-field"
                            {...loginFormik.getFieldProps("role")}
                        >
                            <option value="" label="Select Role" />
                            <option value="Admin" label="Admin" />
                            <option value="HRManager" label="HRManager" />
                            <option value="FinanceManager" label="FinanceManager" />
                        </Components.Select>
                        {loginFormik.touched.role && loginFormik.errors.role ? (
                            <div className="error-message">{loginFormik.errors.role}</div>
                        ) : null}
                        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                        <Components.Button type="submit">
                            Sign In
                        </Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="right-overlay-panel">
                            <img src={LoginImage} alt="Login" style={{
                                width: "40%",
                                height: "auto",
                                objectFit: "cover",
                                position: "absolute",
                                top: "10%",
                                left: "55%",
                            }} />
                        </div>
                    </div>
                </div>
            </Components.Container>
        </div>
    );
};

export default LoginPage;
