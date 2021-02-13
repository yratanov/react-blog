import { Router } from "@reach/router";
import NavLink from "./NavLink";
import Posts from "./Posts";
import { makeServer } from "./server";
let Dash = () => <div>Dash</div>;

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" });
}

function App() {
  return (
    <div className="max-w-7xl mx-auto bg-white">
      <h1 className="text-5xl text-center py-5 border-b">Fancy blog</h1>

      <div className="flex min-h-full">
        <div className="w-40">
          <NavLink to="/">Home</NavLink>
          <NavLink to="dashboard">Dashboard</NavLink>
        </div>
        <Router>
          <Posts path="/" />
          <Dash path="dashboard" />
        </Router>
      </div>
    </div>
  );
}

export default App;
