import Page2 from "../../../ServiceDemoPages/Page2";
import { useSelector } from "react-redux";

const EVpage2 = () => {


  const evpage2data=useSelector(
    (state:any)=>state.EVcharge2.evpage2data
  )


  return (
    <Page2  evpage2data={evpage2data}  />

  );
};

export default EVpage2;