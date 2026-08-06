import HelloWorld from "./components/HelloWorld.jsx";
import HelloMyFriend from "./components/HelloMyFriend.jsx";
import Footer from "./components/Footer.jsx";


function App() {

    return (
        <>
            <HelloWorld/>
            <main className="container">
                <HelloMyFriend/>
            </main>
            <Footer/>
        </>
    )
}

export default App;
