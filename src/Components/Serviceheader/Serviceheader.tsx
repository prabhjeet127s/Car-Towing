
import { Menu } from 'lucide-react';
import { useContext } from 'react';
import Sidebarcontext from '../../Context/Sidebar/SideContext';



const Serviceheader = () => {

 const {sidebaropen,setsidebaropen}  =useContext(Sidebarcontext)
 console.log(sidebaropen)

  return (
    <header className="bg-purple-950 w-full px-6 py-2 flex items-center justify-between shadow-lg">
      <div className="flex-1 flex justify-start">
        <button onClick={()=>setsidebaropen(!sidebaropen)}
          className="text-white outline-none hover:opacity-80 transition-opacity">
          <Menu size={23}  />
        </button>
      </div>
        <div className=" w-17 h-17 p-2 ">
          <img 
            src="/images/logo.png" 
            alt="Towing Knox Logo" 
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      <div className="flex-1"></div>
    </header>
  );
};

export default Serviceheader;