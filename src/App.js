import React from 'react';

import './sass/main.scss';
import Layout from './containers/Layout';
import Content from './components/Content/Content';

console.log("Thanks for particles effect to: https://github.com/Wufe/react-particles-js")

function App() {
	return (
		<Layout>
			<Content />
		</Layout>
	);
}

export default App;
