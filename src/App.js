import { Router } from "@reach/router";
import NavLink from "./NavLink";
import Posts from "./Posts";
import { makeServer } from "./mirage/server";
let Dash = () => <div>Dash</div>;

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      <h1 className="text-5xl text-center py-5 border-b">Fancy blog</h1>

      <div className="flex items-stretch min-h-full">
        <div className="flex-shrink-0 w-40 h-full bg-blue-200">
          <NavLink to="/">Home</NavLink>
          <NavLink to="dashboard">Dashboard</NavLink>
        </div>
        <div className="flex-grow">
          <Router>
            <Posts path="/" />
            <Dash path="dashboard" />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
