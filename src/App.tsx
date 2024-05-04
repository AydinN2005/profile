import React from 'react';
import {Routes, Route} from "react-router-dom";
import {EditProfile, Profile} from "./pages";

function App() {

    return (
        <div className="container">
            <Routes>
                <Route path={'/'} Component={Profile}/>
                <Route path={'/editProfile'} Component={EditProfile}/>
            </Routes>
        </div>
    );
}

export default App;
