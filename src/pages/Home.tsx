import { useState, useEffect } from "react";
import axios from "axios";
import { styled } from "styled-components";
import PostList from "../components/PostList";
import { getPosts } from "../utils/getPosts";

const Home = () => {
  const [data, setData]: any = useState([]);
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get("http://localhost:4444/posts");
        console.log(response);
        if (response.data) setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getPosts();
  }, []);
  console.log(data);
  return (
    (data && data.length > 0 && (
      <Container>
        <PostContainer>
          <PostList posts={data} />
        </PostContainer>
        <TagsContainer>Tags (in progress)</TagsContainer>
      </Container>
    )) || <div>No data!</div>
  );
};

export default Home;

const Container = styled.div({
  width: "100%",
  minHeight: "100vh",
  color: "white",
  display: "flex",
});
const PostContainer = styled.div({
  width: "65%",
});
const TagsContainer = styled.div({
  width: "35%",
  display: "flex",
  justifyContent: "center",
});
