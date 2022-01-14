import Layout from "./components/Layout";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>
      <div>
        <Layout />
      </div>
    </>
  );
}

export default App;
