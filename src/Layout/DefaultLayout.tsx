
import Serviceheader from '../Components/Serviceheader/Serviceheader'
import Servicesidebar from '../Components/Serviceheader/Servicesidebar'
import WelcomeMessage from '../Components/Serviceheader/WelcomeMessage'


const DefaultLayout = ({ children }) => {
    return (
        <div className="w-full  h-screen  bg-[url('/images/background-image.png')] bg-cover bg-center flex justify-center items-center">

            <div className="bg-gray-100 w-full max-w-xl h-screen ">

                <Serviceheader />
                <Servicesidebar />
                <WelcomeMessage />
                
                <div className={` transition-all duration-500 ease-in-out bg-gray-100  max-h-full  `}>{children}</div>


            </div>
      </div>






    )
}

export default DefaultLayout
