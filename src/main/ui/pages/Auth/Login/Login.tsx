import React, {useState} from 'react'
import SuperCheckbox from '../../../common/c3-SuperCheckbox/SuperCheckbox'
import style from './Login.module.scss'
import ErrorMessage from "../../../common/MessageError/ErrorMessage";
import { NavLink } from 'react-router-dom';
import {PATH} from "../../../routes/Routes";
import { useFormik } from 'formik';
import eye from '../../../assets/images/eye.svg'
import Button from "../../../common/Button/Button";


type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

const Login = () => {
    const [show, setShow] = useState(true)

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'email is required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'password is Required';
            } else if (values.password.length < 7) {
                errors.password = 'password must be more than 7 character';
            }
            return errors;
        },
        onSubmit: values => {
            // dispatch(loginThunk(values))
            formik.resetForm()
        },
    });

    const handleShowPassword = () => {
        setShow(!show)
    }

    // if isAuth true redirect to profile page
    // if(isAuth) {
    //     return <Redirect to={PATH.PROFILE}/>
    // }



    return (
            <div className={style.form__block}>
                <p className={style.form__block_text}>Sign In</p>
                <div className={style.form__block_content}>
                    <form
                        noValidate
                        onSubmit={formik.handleSubmit}
                        className={style.form__style}
                    >
                        <label>Email</label>
                        <div className={style.form__style_input_box} style={{width: '100%', position: 'relative', textAlign: 'center'}}>
                            <input
                                autoComplete='email'
                                className={style.form__style_input}
                                type="email"
                                {...formik.getFieldProps('email')}
                            />

                            {formik.touched.email && formik.errors.email ?
                                <ErrorMessage>{formik.errors.email}</ErrorMessage> : null}
                        </div>
                        <label>Password</label>
                        <div className={style.form__style_input_box} style={{width: '100%', position: 'relative', textAlign: 'center'}}>
                            <input
                                autoComplete='current-password'
                                type={show ? 'password' : 'text'}
                                placeholder="*********"
                                className={style.form__style_input}
                                {...formik.getFieldProps('password')}
                            />
                            <img className={style.input__eye} src={eye} alt="eye" onClick={handleShowPassword}/>
                            {formik.touched.password && formik.errors.password ?
                                <ErrorMessage>{formik.errors.password}</ErrorMessage> : null}

                        </div>
                        <SuperCheckbox
                            {...formik.getFieldProps('rememberMe')}
                        > Remember me
                        </SuperCheckbox>
                        <div className={style.button__group}>
                            <NavLink to={PATH.NEW_PASSWORD} className={`${style.form__link} ${style.forgot}`}>Forgot Password?</NavLink>
                            <Button style={{width: '70%', borderRadius: '20px'}}  type="submit" name="form_login_submit" >Login</Button>
                            <p className={style.form__text}>Don’t have an account?</p>
                            <NavLink to={PATH.REGISTRATION} className={`${style.form__link } ${style.signUp}`}>Sign Up</NavLink>
                        </div>
                    </form>
                </div>

            </div>
    )
}

export default Login