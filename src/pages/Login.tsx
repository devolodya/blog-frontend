import { styled } from "styled-components";
import Button from "../assets/kit/Button";
import Input from "../assets/kit/Input";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const { control, handleSubmit } = useForm();

  return (
    <Container>
      <MainText>Login</MainText>
      <Content onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller
          name="username"
          control={control}
          rules={{ required: true, minLength: 4 }}
          render={({ field }) => <Input {...field} placeholder="Username" />}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true, minLength: 6 }}
          render={({ field }) => (
            <Input {...field} placeholder="Password" type="password" />
          )}
        />
        <Button appearance="primary" text="Login" type="submit" />
      </Content>
    </Container>
  );
};

export default Login;

const Container = styled.div({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: "20px",
});
const Content = styled.form({
  width: "30%",
  border: "1px solid gray",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  boxSizing: "border-box",
  padding: "10px",
  gap: "10px",
});
const MainText = styled.div({
  color: "white",
  fontSize: "24px",
  fontWeight: 600,
});
