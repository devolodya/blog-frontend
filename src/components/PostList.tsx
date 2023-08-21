import React from "react";
import { styled } from "styled-components";
import Post from "./Post";

const PostList = () => {
  return (
    <Container>
      <Post />
    </Container>
  );
};

export default PostList;

const Container = styled.div({
  width: "100%",
  height: "100vh",
});
