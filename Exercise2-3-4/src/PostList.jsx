import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [postCount, setPostCount] = useState(5);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${postCount}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [postCount]);

  const handlePostCountChange = (event) => {
    setPostCount(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ marginBottom: "1rem", width: "300px" }}>
        <p>Number of posts to show</p>
        <InputLabel
          id="post-count-label"
          sx={{ color: "rgba(0, 0, 0, 0.54)", fontSize: "0.875rem" }}
        ></InputLabel>
        <Select
          labelId="post-count-label"
          id="post-count-select"
          value={postCount}
          onChange={handlePostCountChange}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>

      {posts.map((post) => (
        <Card key={post.id} sx={{ marginBottom: "1rem" }}>
          <CardContent>
            <Typography variant="h5" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {post.body}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default PostList;
