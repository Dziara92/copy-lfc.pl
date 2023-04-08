import { Header, MeetingTeam, PageContent, Aside, Footer } from "./Components";
import { News, SinglePost, About, Archives, NewNews } from "./Pages";
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
          <Route path="/new_news" element={<NewNews />} />
          <Route path="/*" element={<div>brak podstrony</div>} />
        </Routes>
        <Aside />
      </PageContent>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
