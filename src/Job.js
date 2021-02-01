const Job = (props) => {
    return (
        <div className="div-job">
            <h2 className="h2-job">{props.title}</h2>
            <p className="p-job">
                <span>{props.contractType} - </span>
                <span>{props.country} - </span>
                <span>{props.city}</span>
            </p>
        </div>
    );
};
export default Job;
