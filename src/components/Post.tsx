import React, { useEffect } from "react";
import { styled } from "styled-components";

const Post = ({ post }: any) => {
  return (
    (post && (
      <Container>
        <HeaderContainer>
          <AuthorContainer style={{ display: "flex" }}>
            <Avatar />
            <FullName>{post.id}</FullName>
            <Date>• 21 Aug</Date>
          </AuthorContainer>
          <OptionsContainer>•••</OptionsContainer>
        </HeaderContainer>
        <TextContainer>{post.title}</TextContainer>
        {post.url && <PhotoContainer src={post.url} />}
      </Container>
    )) || <div>No data!</div>
  );
};

export default Post;

const Container = styled.div({
  width: "100%",
  maxHeight: "500px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  padding: "10px",
  gap: "10px",
  borderRight: "1px solid gray",
  borderBottom: "1px solid gray",
  boxSizing: "border-box",
});
const HeaderContainer = styled.div({
  width: "80%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  justifyContent: "space-between",
});
const AuthorContainer = styled.div({
  display: "flex",
  gap: "10px",
  height: "100%",
  alignItems: "center",
});
const OptionsContainer = styled.div({
  height: "100%",
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
});
const Avatar = styled.div({
  width: "30px",
  height: "30px",
  backgroundColor: "red",
  borderRadius: "999px",
});
const FullName = styled.div({
  fontWeight: 600,
  color: "white",
});
const NickName = styled.div({
  color: "gray",
});
const Date = styled.div({
  color: "gray",
});
const TextContainer = styled.div({
  width: "80%",
});
const PhotoContainer = styled.img({
  maxWidth: "80%",
  maxHeight: "300px",
  borderRadius: "4px",
});
const Hashtags = styled.div({
  width: "80%",
  display: "flex",
  gap: "10px",
  color: "gray",
});
