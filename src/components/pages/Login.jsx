import React, { useState } from "react";
import styled from "styled-components";
import loginApi from "../../api/loginData";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState("");
  const [userErrorMessage, setUserErrorMessage] = useState("");

  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
    login_type: "BUYER",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUserInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (userInput) => {
    const response = await loginApi(userInput);
    if (response) {
      console.log("성공!!!!!");
      navigate("/home");
    } else if (userInput.username && userInput.password) {
      setErrorMessage("아이디 혹은 비밀번호가 일치하지 않습니다.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(userInput);
  };

  const handleError = () => {
    if (userInput.username === "" && userInput.password === "") {
      setUserErrorMessage("아이디를 입력해주세요");
    } else if (userInput.username && userInput.password === "") {
      setUserErrorMessage("비밀번호를 입력해주세요");
    } else {
      setUserErrorMessage("");
    }
  };

  return (
    <Loginwrap>
      <button type="button">구매자로 전환</button>
      <button type="button">판매자로 전환</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="이메일을 입력해주세요"
          onChange={handleInput}
          value={userInput.username}
        />
        {/* email을 입력하지 않은 경우 */}
        {userErrorMessage && userInput.username === "" && (
          <ErrorText>{userErrorMessage}</ErrorText>
        )}
        <input
          type="password"
          placeholder="비밀번호를 입력해주세요"
          name="password"
          onChange={handleInput}
          value={userInput.password}
        />
        {/* password을 입력하지 않은 경우 */}
        {userErrorMessage &&
          userInput.username &&
          userInput.password === "" && (
            <ErrorText>{userErrorMessage}</ErrorText>
          )}

        {errorMessage && userInput.username && userInput.password && (
          <ErrorText>{errorMessage}</ErrorText>
        )}

        <button type="submit" onClick={handleError}>
          로그인
        </button>
      </form>
    </Loginwrap>
  );
}

const ErrorText = styled.p`
  color: red;
`;

const Loginwrap = styled.div`
  & button {
    border-radius: 50px;
    background-color: black;
    color: white;
    padding: 12px 24px;
    cursor: pointer;
  }

  & input {
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 12px;
    width: 300px;
    margin-right: 24px;
    margin-top: 24px;
    display: block;
  }

  & form button {
    display: block;
    margin-top: 24px;
    width: 120px;
    text-align: center;
  }
`;
// const SallerButton = styled.button``;
