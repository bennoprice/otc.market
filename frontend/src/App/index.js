import { Routes, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import Layout from '../Layout';
import Home from '../Home';
import './style.css';

const App = () => (
	<div className="App">
		<Layout>
			<Routes>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
         </Routes>
      </Layout>
	</div>
);

export default App;