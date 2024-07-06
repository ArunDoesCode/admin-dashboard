import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Suspense, lazy } from "react";


import Loader from "./component/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Customers = lazy(() => import("./pages/Customers"));



const App = () => {
  return <Router>
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route
          path="/"
          element={
            <Link to="/admin/dashboard">
              <button>Visit Dashboard</button>
            </Link>
          }
        />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/transaction" element={<Transaction />} />

          {/*Charts*/}


          {/*Apps*/}


      </Routes>
    </Suspense>
  </Router>
}

export default App;