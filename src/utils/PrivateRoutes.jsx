import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom'

const PrivateRoutes = () => {
  const navigator = useNavigate();

  useEffect(() => {
    if(!(localStorage.getItem("user"))){
      alert("No estas logueado");
      navigator("/login");    
      return
    };

    // navigator("/");    
  }, []);

  return (
    <Outlet />
  )
};

export default PrivateRoutes;