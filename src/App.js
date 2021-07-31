
import './App.css';
import {TopBar} from "./components/TopBar";
import {Hero} from "./components/Hero/Hero";
import Content from "./components/UI/Content";


function App() {
    return (
        <div className="h-screen w-screen bg-blue-100">
            <TopBar/>
            <Content>
                <Hero/>
            </Content>
        </div>
    );
}

export default App;
