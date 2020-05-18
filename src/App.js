import React, { useState, useEffect } from 'react';

import './sass/main.scss';
import Spinner from './components/UI/Spinner/Spinner';
import Layout from './containers/Layout';
import Content from './components/Content/Content';
import logo from './assets/images/logo.png';

console.log(
  'Thanks for particles effect to: https://github.com/Wufe/react-particles-js'
);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 900);
  }, []);

  let appContent;

  if (loading) {
    appContent = (
      <div className="loadingScreen">
        <img className="loadingScreen__logo" src={logo} alt="SS" />
        <Spinner />
      </div>
    );
  } else {
    appContent = (
      <Layout>
        <Content />
      </Layout>
    );
  }

  return appContent;
}

export default App;
