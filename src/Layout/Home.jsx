import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";


const Home = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default Home;