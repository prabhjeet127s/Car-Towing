import { useContext} from "react";
import EVPage1context from "../../../Context/Sidebar/Evcharge/Page1/EVpage1context";

import Page1 from "../../../ServiceDemoPages/Page1";

const EVpage1 = () => {

    
    const evpage1data = useContext(EVPage1context)

    return (
        <Page1 evpage1data={evpage1data}  />



      
    );
};

export default EVpage1;