import React from 'react';
import Header from "./components/Header";
import MainContent from "./components/MainContent";

class App extends React.Component {

  render() {
    return <div className="App">
      <Header />
      <MainContent/>
    </div>
  }
}

export default App;
