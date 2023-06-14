import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function AuthApp({ onSignIn }) {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
}

export default AuthApp;
