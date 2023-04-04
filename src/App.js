import { Header, MeetingTeam, PageContent, Aside } from "./Components";
import { News, SinglePost, About, Archives } from "./Pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <MeetingTeam />
      <PageContent>
        <Routes>
          <Route path="/" element={<News />} />
          <Route path="/:title" element={<SinglePost />} />
          <Route path="/about" element={<About />} />
          <Route path="/archives" element={<Archives />} />
          <Route path="*" element={<div>brak podstrony</div>} />
        </Routes>
        <Aside />
      </PageContent>
    </BrowserRouter>
  );
}

export default App;
