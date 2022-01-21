import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
function App() {
  return (
    <div className="App text-white font-Karla   ">
<div class="fixed">
<Sidebar className="fixed" />

</div>
    
<div className="flex grow w-full h-screen flex-col">
<Home/>

</div>


     
     
    </div>
  );
}

export default App;
