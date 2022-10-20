import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const {user, loginWithRedirect, logout} = useAuth0();

    return (
        <button onClick={() => (user)?logout({returnTo : "/"}):loginWithRedirect()} className="custombtn">
            {(user)?"Log Out":"Log In"}
        </button>
    )
}

export default Login;