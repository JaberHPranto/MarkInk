import Editor from "./components/Editor";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <nav className="navbar">
        <NavBar />
      </nav>
      <div className="main-container">
        <div className="main_sidebar_1">Sidebar 1</div>
        <div className="main_sidebar_2">Sidebar 2</div>
        <div className="main_editor">
          <Editor />
        </div>
      </div>
    </>
  );
}

export default App;
