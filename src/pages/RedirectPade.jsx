import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, []); 
    return (
        <div className="main-login">
      
    </div>
    );
};

export default RedirectPage;