import Navbar from "./navbar/Navbar";
import Header from "./Header/Header";
import Explore from "./explore/Explore";
import Fooddisplay from "./Fooddisplay";
import StoreProvider from "./StoreContext";

function Home() {
    return (
        <StoreProvider>
            <Navbar />
            <Header />
            <Explore />
            <Fooddisplay />
        </StoreProvider>
    );
}

export default Home;
