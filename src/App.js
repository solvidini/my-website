import React from 'react';

import { LanguageProvider } from './context';

import Layout from './containers/Layout/Layout';
import Content from './components/Content/Content';

function App() {
	return (
		<LanguageProvider>
			<Layout>
				<Content />
			</Layout>
		</LanguageProvider>
	);
}

export default App;
