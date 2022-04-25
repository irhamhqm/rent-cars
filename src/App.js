import { Route, Routes } from "react-router-dom";
import CarDetail from "./CarDetail";
import CarList from "./CarList";
import Layout from "./Layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CarList />}/>
          <Route path="detail/:id" element={<CarDetail />} />
          <Route path="*" element={<div>error 404: page not found</div>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
