import { Routes, Route } from "react-router-dom";
// page and layout imports
import Homepage from "./pages/Homepage";
import Category from "./pages/Category";
import ReviewDetails from "./pages/ReviewDetails";
import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <div className="App">
      <SiteHeader />
      <Routes>
        <Route path="/"
          /* The exact prop is used to ensure that the route is only matched if the path is an exact match to the current URL otherwise it will match any route that starts with the path. */
          element= {<Homepage />}
        />
        <Route path="/category/:id"
        element= {<Category />}
        />
        <Route path="/details/:id"
          element= {<ReviewDetails />}
          />
      </Routes>
    </div>
  );
}

export default App;