import { useForm, Controller } from "react-hook-form";
import { styled } from "styled-components";
import Button from "../assets/kit/Button";
import Input from "../assets/kit/Input";

const SignUp = () => {
  const { control, handleSubmit } = useForm();
  return (
    <Container>
      <MainText>Sign Up to join our community!</MainText>
      <Content onSubmit={handleSubmit((data) => console.log(data))}>
        <Controller
          name="fullName"
          control={control}
          rules={{ required: true, minLength: 5 }}
          render={({ field }) => <Input {...field} placeholder="Full name" />}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: true, minLength: 5 }}
          render={({ field }) => <Input {...field} placeholder="Email" />}
        />
        <Controller
          name="username"
          control={control}
          rules={{ required: true, minLength: 5 }}
          render={({ field }) => <Input {...field} placeholder="Username" />}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true, minLength: 5 }}
          render={({ field }) => (
            <Input {...field} placeholder="Password" type="password" />
          )}
        />
        {/* <Input placeholder="Full name" />
        <Input placeholder="Email" />
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm password" /> */}
        <Button
          appearance="primary"
          text="Sign Up"
          onClick={() => console.log(1)}
        />
      </Content>
    </Container>
  );
};

export default SignUp;

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
