import "./App.css";
import Header from "./Header";
import Jobs from "./Jobs";
import Footer from "./Footer";
const App = () => {
    return (
        <div className="App">
            <Header title="The Job Board" />

            <div className="allJobs">
                <div className="test">
                    <Jobs
                        className="job1"
                        title="Full time Sales Associate - Sydney Boutique"
                        contractType="CDI"
                        country="Australie"
                        city="Sydney"
                    />
                    <Jobs
                        className="job2"
                        title="Agent de Sécurité - Pantin"
                        contractType="CDI"
                        country="France"
                        city="Pantin"
                    />
                    <Jobs
                        className="job3"
                        title="Responsable d'Atelier (H/F)"
                        contractType="CDD"
                        country="France"
                        city="Paris"
                    />
                </div>
                <div className="test">
                    <Jobs
                        className="job1"
                        title="Full time Sales Associate - Sydney Boutique"
                        contractType="CDI"
                        country="Australie"
                        city="Sydney"
                    />
                    <Jobs
                        className="job2"
                        title="Agent de Sécurité - Pantin"
                        contractType="CDI"
                        country="France"
                        city="Pantin"
                    />
                    <Jobs
                        className="job3"
                        title="Responsable d'Atelier (H/F)"
                        contractType="CDD"
                        country="France"
                        city="Paris"
                    />
                </div>
                <div className="test">
                    <Jobs
                        className="job1"
                        title="Full time Sales Associate - Sydney Boutique"
                        contractType="CDI"
                        country="Australie"
                        city="Sydney"
                    />
                    <Jobs
                        className="job2"
                        title="Agent de Sécurité - Pantin"
                        contractType="CDI"
                        country="France"
                        city="Pantin"
                    />
                    <Jobs
                        className="job3"
                        title="Responsable d'Atelier (H/F)"
                        contractType="CDD"
                        country="France"
                        city="Paris"
                    />
                </div>
            </div>
            <Footer footer="Made with React at Le Reacteur by Samy" />
        </div>
    );
};

export default App;
