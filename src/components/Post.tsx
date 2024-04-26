import classes from "../css/Post.module.css";


function Post(props: { author: string; title: string }) {
  return (
    <div className={classes.post}>
      <p className={classes.author}>{props.author}</p>
      <p className={classes.text}>{props.title}</p>
    </div>
  );
}

export default Post;
