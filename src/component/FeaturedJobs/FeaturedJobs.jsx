import { useEffect, useState } from "react";
import SingleJob from "./SingleJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            <div>
                <h2 className="text-4xl text-center font-bold">Featured Jobs</h2>
                <p className="text-center">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {
                    jobs.map(job => <SingleJob key={job.id} job={job}></SingleJob>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;