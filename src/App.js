import { Route, Routes } from "react-router-dom";
import CarDetail from "./pages/CarDetail";
import CarList from "./pages/CarList";
import Layout from "./common/Layout";
import Register from "./pages/Register";
import Login from './pages/Login';
import Profile from "./pages/Profile";
import ProtectedRoute from "./common/ProtectedRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CarList />}/>
          <Route path="register" element={<Register />}/>
          <Route path="login" element={<Login />}/>
          <Route path="detail/:id" element={<CarDetail />} />
          <Route element={<ProtectedRoute />}>
            <Route path="profile" element={<Profile />}/>
          </Route>
          <Route path="*" element={<div>error 404: page not found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
