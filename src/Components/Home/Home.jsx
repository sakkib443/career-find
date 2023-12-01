import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJob from "../FeaturedJobs/FeaturedJob";

const Home = () => {
    return(
        <div>
            <Banner></Banner>
            <CategoryList></CategoryList>
            <FeaturedJob></FeaturedJob>
            <h1>this is home componentaaaaaaas </h1>
            
        </div>
    );
};

export default Home;