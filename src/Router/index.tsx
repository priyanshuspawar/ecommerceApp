import { lazy , Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import SkeletonHome from "../skeletons/SkeletonHome";
import Productscreen from "../pages/ProductScreen"

const HomeScreen = lazy(()=> import ("../pages/HomeScreen"));

const index = () => {
  return (
    <Routes>
      <Route index element={
        <Suspense fallback={<SkeletonHome/>}>
          <HomeScreen/>
        </Suspense>
      } />
      <Route path="/hello" element={<Productscreen/>}/>
    </Routes>
  );
};

export default index;
