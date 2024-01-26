import Shops from 'pages/Shops/Shops';
import { Routes, Route } from 'react-router-dom';
import Layout from 'stories/Layout/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* <Route index element={<Homepage />} /> */}
        <Route path='shops' element={<Shops />} />
      </Route>
    </Routes>
  );
};

export default App;
