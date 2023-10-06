import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { Header } from "./Header";


const Layout = () => {

    return(
        <div className="w-full">
           <Header />
           <div className="w-full">
           <Outlet />
           </div>
           <Footer />
        </div>
    )
}

export default Layout;
