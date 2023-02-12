import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import "./App.css"
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
import { action,comedy,documentaries,horror,orginals, romance, trending } from "./urls";


function App() {
  return (
    <div className="App">
     // <NavBar />
      <Banner />
      <RowPost url = {orginals} title ="Netflix Orginals"/>
      <RowPost url={trending} title="Trending" isSmall />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />


    </div>
  );
}

export default App;
