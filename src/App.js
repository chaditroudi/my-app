import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import InstancesPage from './components/instances';
import Layout from './layout/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<InstancesPage />} />  {/* Render InstancesPage at root */}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
