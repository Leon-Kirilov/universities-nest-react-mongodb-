import { Outlet } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
const LandingLayout = () => {
  return (
    <div className="w-full">
      <Header />
      <div className="mt-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default LandingLayout;