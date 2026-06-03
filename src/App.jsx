import ProfileCard from "./components/ProfileCard";
import SkillsList from "./components/SkillsList";

function App() {
    return (
        <>
            <div>
                <h1>First React application</h1>
                <ProfileCard
                    name="ALEXANDRA KEDJU"
                    role="Full stack Software Developer"
                />
                <SkillsList/>
            </div>
        </>
    );
}

export default App;