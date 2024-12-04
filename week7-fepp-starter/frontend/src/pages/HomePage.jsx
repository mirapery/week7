import JobListings from "../components/JobListings";
import { useEffect, useState } from "react";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch("api/jobs");
        const data = await res.json();
        setJobs(data);
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="home">
      {jobs && <JobListings jobs={jobs} />}
    </div>
  );
};

export default Home;
