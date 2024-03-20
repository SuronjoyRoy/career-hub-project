
const SingleJob = ({ job }) => {

    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, educational_requirements, job_responsibility, experiences, contact_information, phone, email, adress } = job;
    return (
        <div>
            <img src={logo} alt="" />

        </div>
    );
};

export default SingleJob;