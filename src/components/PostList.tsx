import React from "react";
import { styled } from "styled-components";
import Post from "./Post";

const PostList = ({ posts }: any) => {
  return (
    posts && (
      <Container>
        {posts.map((post: any) => (
          <Post post={post} key={post._id} />
        ))}
      </Container>
    )
  );
};

export default PostList;

const Container = styled.div({
  width: "100%",
});
