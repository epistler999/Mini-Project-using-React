import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

import About from "./components/Multi-Language-Support/About";
import Body from "./components/InfiniteScroll/Body";
import Team from "./components/Protected-Routes/Team";
import Login from "./components/Protected-Routes/Login";
import ProtectedRoute from "./components/Protected-Routes/ProtectedRoute";
import Accordion from "./components/Accordian/Accordion";
import Comments from "./components/comments/Comments";
import Carousal from "./components/Carousal/Carousal";

function App() {
  const [lang, setLang] = useState("en");
  return (
    // <UserContext.Provider value={{ isLogin: isLogin, setIsLogin }}>
    <div>
      <header className="flex py-5 text-2xl font-bold text-center text-white bg-black">
        LLD Practice
        <nav className="px-20 m-2 w-[800px] flex justify-between text-lg">
          <a href="/">Home </a>
          <a href="/about">About </a>
          <a href="/accordion">Accordion </a>
          <a href="/comments">Nested Comments </a>
          <a href="/carousal">Carousal </a>
          <a href="/team">Team </a>
          <a href="/login">Login </a>
        </nav>
        <select value={lang} onChange={(e) => setLang(e.target.value)}>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </header>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />}></Route>
          <Route element={<ProtectedRoute />}>
            <Route path="/team" element={<Team />}></Route>
          </Route>
          <Route path="/about" element={<About lang={lang} />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/accordion" element={<Accordion />}></Route>
          <Route path="/comments" element={<Comments />}></Route>
          <Route path="/carousal" element={<Carousal />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    // </UserContext.Provider>
  );
}

export default App;
