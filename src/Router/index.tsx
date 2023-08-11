import { lazy , Suspense} from "react";
import { Routes, Route } from "react-router-dom";
import SkeletonHome from "../skeletons/SkeletonHome";
import ProductScreen from "../pages/ProductScreen";


const HomeScreen = lazy(()=> import ("../pages/HomeScreen"));

const index = () => {
  return (
    <Routes>
      <Route index element={
        <Suspense fallback={<SkeletonHome/>}>
          <HomeScreen/>
        </Suspense>
      } />
    </Routes>
  );
};

export default index;
