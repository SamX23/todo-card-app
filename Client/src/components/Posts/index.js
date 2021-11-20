import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@mui/material";

import Post from "./Post";
import useStyles from "./styles";

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <div>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post.id} item xs={12} sm={6}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Posts;
