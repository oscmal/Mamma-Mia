import Banner from "../Components/Banner";
import Card from "../Components/Card"
import Footer from "../Components/footer";

const Home = ( ) => {
    return ( 
        <>
            <Banner/>
            <div className="container my-4">
                <div className=" row row-cols-1 row-cols-md-3 g-4">
                    <Card />
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        </>   
    );
};

export default Home;