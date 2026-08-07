import HelloWorld from "./components/HelloWorld.jsx";
import HelloMyFriend from "./components/HelloMyFriend.jsx";
import Footer from "./components/Footer.jsx";


function App() {

    return (
        <>
            <HelloWorld/>
            <main className="container">
                <HelloMyFriend Antes= "Hello World!" Ahora="Hello my Friend!"/>
            </main>
            <Footer/>
        </>
    )
}

export default App;
