import ProfileCard from "./components/ProfileCard";

function App() {
    return (
        <>
            <div>
                <h1>First React application</h1>
                <ProfileCard
                    name="Cristian Camilo"
                    role="Full stack Software Developer"
                />
            </div>
        </>
    );
}

export default App;