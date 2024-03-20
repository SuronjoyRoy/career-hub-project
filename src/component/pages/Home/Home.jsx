import CategoryList from "../../CategoryList/CategoryList";
import FeaturedJobs from "../../FeaturedJobs/FeaturedJobs";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h3>This is home page</h3>
            <CategoryList></CategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;