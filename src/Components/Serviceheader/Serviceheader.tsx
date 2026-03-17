
import { Menu } from 'lucide-react';
import { useContext } from 'react';
import Sidebarcontext from '../../Context/Sidebar/SideContext';
import { ArrowLeft } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Pagesswitchcontext } from '../../Context/PagesSwitich/PageswitchContext';




const Serviceheader = () => {

  const location=useLocation();
  const cancelurl=location.pathname.startsWith('/cancelride')
  const towberurl=location.pathname.startsWith('/towberbooked')
  

  const { sidebaropen, setsidebaropen } = useContext(Sidebarcontext)
  const {page,setpage}=useContext(Pagesswitchcontext)

  console.log(page)

  return (
    <header className="bg-purple-950 w-full px-6 py-2 flex items-center justify-between shadow-lg">
      <div className="flex-1 flex justify-start">
        { page==0 || cancelurl || towberurl  ?(
          <button onClick={() => setsidebaropen(!sidebaropen)}
          className="text-white outline-none hover:opacity-80 transition-opacity">
          <Menu size={23} />
        </button>
        ):( <button
         onClick={()=>setpage(page-1)}
           className='text-white  '  >
          <ArrowLeft />
        </button>) }
        
       
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