import { useEffect } from "react";
import { styled } from "styled-components";
import { PostList, TextEditor } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/slices/posts";

const Home = () => {
  const dispatch: any = useDispatch();
  const { posts, tags }: any = useSelector<any>((state) => state.posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);
  return (
    (posts.items && posts.items.length > 0 && (
      <Container>
        <PostContainer>
          <TextEditor />
          <PostList posts={posts.items} />
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
