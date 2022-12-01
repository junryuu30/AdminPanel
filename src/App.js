import ContentLeft from "./components/Content/ContentLeft";
import ContentRight from "./components/Content/ContentRight";
import SideBar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full min-h-screen bg-white flex flex-row">
      <SideBar/>
      <ContentLeft/>
      <ContentRight/>
      
    </div>
  );
}

export default App;
