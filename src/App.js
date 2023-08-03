import React from "react";
import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/setting/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { 
  BrowserRouter, 
  Route, 
  Routes 
} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <TopBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="write" element={<Write />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//  <Router>
//     <Switch>
//     <Route exact path="/">
//       <Home/>
//     </Route>
//     <Route path="/register">{user ? <Home/>:<Register/>}
//     </Route>
//     <Route path="/login">{user ? <Home/> :<Login/>}
//     </Route>
//     <Route path="/write">{user ? <Write/> :<Register/>}
//     </Route>
//     <Route path="/settings">{user ? <Settings/> :<Register/>}
//     </Route>
//     <Route path="/post/:postId">
//       <Single/>
//     </Route>
//     </Switch>
// </Router>