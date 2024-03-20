import { useEffect, useState } from "react";
import SignleCategory from "./SignleCategory";

const CategoryList = () => {

    const [jobsCategory, setJobsCategory] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJobsCategory(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-4xl text-center font-bold">Job Category List</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-3">
                {
                    jobsCategory.map(category => <SignleCategory key={category.id} category={category}></SignleCategory>)
                }
            </div>
        </div>
    );
};

export default CategoryList;