import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const ProtectedRoute = ({ Component }) => {

    const navigate = useNavigate();
    const findToken = localStorage.getItem("userToken")

    useEffect(() => {
        if (!findToken) {
            navigate("/");
            return;
        }
    }, []);

    return <div > {findToken && <Component />
    }</div>;

}

export default ProtectedRoute