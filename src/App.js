import React, { useState, useEffect } from 'react';

import './sass/main.scss';
import Spinner from './components/UI/Spinner/Spinner';
import Layout from './containers/Layout';
import Content from './components/Content/Content';
import logo from './assets/images/logo.png';

console.log('Thanks for particles effect to: https://github.com/Wufe/react-particles-js');

function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 1200);
   }, []);

   const renderApp = () => {
      return (
         <Layout>
            <Content />
         </Layout>
      );
   };

   const renderLoadingScreen = () => {
      return (
         <div className="loadingScreen">
            <img className="loadingScreen__logo" src={logo} alt="SS" />
            <div className="loadingScreen__animate">
               <Spinner />
            </div>
         </div>
      );
   };

   return loading ? renderLoadingScreen() : renderApp();
}

export default App;
