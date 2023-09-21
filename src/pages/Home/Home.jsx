import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/NavBar/NavBar";
import PrimaryCard from "../../components/PrimaryCard/PrimaryCard";
import Principle from "../../components/Principle/Principle";
import Review from "../../components/Review/Review";
import SecondaryCard from "../../components/SecondaryCard/SecondaryCard";
import SubNav from "../../components/SubNav/SubNav";

const Home = () => {
    return ( 
        <>
           <SubNav />
        <Navbar />
        <Hero />
        <PrimaryCard/>
        <SecondaryCard/>
        <Principle/>
        <Review/>
        <Footer/>
        </>
     );
}
 
export default Home;