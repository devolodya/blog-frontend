import { styled } from "styled-components";
import PostList from "../components/PostList";

const Home = () => {
  return (
    <Container>
      <PostContainer>
        <PostList />
      </PostContainer>
      <TagsContainer>Tags</TagsContainer>
    </Container>
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
  width: "70%",
});
const TagsContainer = styled.div({
  width: "30%",
});
