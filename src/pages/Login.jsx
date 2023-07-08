import React from 'react';
import MyInput from '../components/UI/input/MyInput';
import MyButton from '../components/UI/button/MyButton';

const Login = () => {
    return (
        <div>
            <h1>Log in</h1>

            <form method='post'>

                <label for='username'>Enter your username</label>
                <MyInput type='text' name='username' id='username' placeholder='Your username'/>

                <label for='password'>Enter your password</label>
                <MyInput type='password' name='password' id='password' placeholder='Your password'/>

                <MyButton>Log in</MyButton>
                
            </form>

        </div>
    );
};

export default Login;