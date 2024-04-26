import { useState } from "react";

import Post from "./Post";
import classes from "../css/PostsList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostsList() {
  //[current value, update value] = useState
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(true);

  function hideModalHandle() {
    setModalIsVisible(false);
  }

  function bodyChangeHandle(event: { target: { value: any } }) {
    setEnteredBody(event.target.value);
  }
  function authorChangeHandle(event: { target: { value: any } }) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandle}>
          <NewPost
            onBodyChange={bodyChangeHandle}
            onAuthorChange={authorChangeHandle}
          />
        </Modal>
      )}

      <ul className={classes.posts}>
        <Post author={enteredAuthor} title={enteredBody} />
        <Post author="Yukihara Sensei" title="JS Tramcam" />
      </ul>
    </>
  );
}
export default PostsList;
