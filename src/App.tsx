import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandle() {
    setModalIsVisible(true);
  }

  function hideModalHandle() {
    setModalIsVisible(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandle} />
      <main>
        <PostsList isPosting={modalIsVisible} onStopPosting={hideModalHandle} />
      </main>
    </>
  );
}

export default App;
