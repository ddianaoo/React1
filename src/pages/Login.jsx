import React, { useContext } from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';
import { AuthContext } from '../context';



const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const login = e => {
        e.preventDefault();
        setIsAuth(true);
    };

    return (
        <div>
            <h1>Log in</h1>

            <form onSubmit={login}>
                <MyInput type='text' name='username' id='username' placeholder='Your username'/>
                <MyInput type='password' name='password' id='password' placeholder='Your password'/>
                <MyButton>Log in</MyButton>
            </form>

        </div>
    );
};

export default Login;