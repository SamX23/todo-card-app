import { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../actions/posts";
import FileBase64 from "react-file-base64";
import { TextField, Button, Typography, Paper } from "@mui/material/";
import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a memory</Typography>
        <TextField
          id="creator-field"
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          required
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          id="title-field"
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          required
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          id="message-field"
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          required
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          id="tags-field"
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          required
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        <Paper
          sx={{
            width: "97%",
            margin: "10px 0",
          }}
        >
          <FileBase64
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </Paper>

        <Button
          sx={{
            marginBottom: 1,
          }}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
