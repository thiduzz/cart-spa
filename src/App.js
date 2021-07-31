
import './App.css';
import {TopBar} from "./components/TopBar";
import {Hero} from "./components/Hero/Hero";
import Content from "./components/UI/Content";


function App() {
    return (
        <div className="h-screen w-screen bg-white-400">
            <TopBar/>
            <Content>
                <Hero className="flex justify-center">
                    <div className="bg-white-400 absolute h-auto p-10 -bottom-16 w-1/2 text-center rounded-2xl shadow-xl">
                        <h2 className="mb-3 text-2xl font-fabarie">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
                        <p className="text-xs  font-fabarie">Pellentesque magna eros, laoreet a ornare eu, feugiat sed sapien. In vitae ante quis justo pulvinar pulvinar nec sit amet ligula. Curabitur aliquam semper congue. </p>
                    </div>
                </Hero>
            </Content>
        </div>
    );
}

export default App;
