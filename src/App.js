import { Header, MeetingTeam, PageContent, Aside } from "./Components";
import { News } from "./Pages";

function App() {
  return (
    <>
      <Header />
      <MeetingTeam />
      <PageContent>
        <News />
        <Aside />
      </PageContent>
    </>
  );
}

export default App;
