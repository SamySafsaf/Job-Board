import Job from "./Job";

const Jobs = (props) => {
    return (
        <Job
            className="job1"
            title={props.title}
            contractType={props.contractType}
            country={props.country}
            city={props.city}
        />
    );
};
export default Jobs;
