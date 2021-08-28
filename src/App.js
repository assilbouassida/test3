import './App.css';
import myWonderfulImage from "./assil2.jpg"
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
            <h1 className="title">Your name here</h1>
            <img src="assil1.jpg" alt="pic"/>
            <img src={myWonderfulImage} alt="pic"/>
      </div>
            <video width="320" height="240" controls>
            <source src="myVideo.mp4" type="video/mp4"/>
            </video>
      </header>
    </div>
  );
}

export default App;
