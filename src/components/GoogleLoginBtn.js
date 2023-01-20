// GoogleLoginBtn.js

import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
import axios from "axios";

// const clientId = "OAuth Web Client ID";
const clientId =
  "857884672202-q5rsue0htsm3kq8rmk0gqph01ktb8ij9.apps.googleusercontent.com";

const GoogleLoginBtn = ({ onSocial }) => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const onSuccess = (response) => {
    console.log(response);
  };
  const onFailure = (response) => {
    console.log(response);
  };

  const onGoogleSignInSuccess = (res) => {
    const params = new URLSearchParams();
    params.append("idToken", res.tokenObj.id_token);

    const googleLogin = async () => {
      const res = await axios.post("요청 주소", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });

      localStorage.setItem("accessToken", res.data.token.access);
      localStorage.setItem("refreshToken", res.data.token.refresh);
    };

    googleLogin();
  };

  return (
    <div>
      {/* <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      /> */}
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_API_KEY}
        onSuccess={onGoogleSignInSuccess}
      />
    </div>
  );
};

export default GoogleLoginBtn;
// - clientId : OAuth Client ID입니다. 설정 및 ClientID를 구하는 방법은 밑에 상세히 알아보도록 합시다.
// - onSuccess : 구글 로그인을 성공했을 때 response를 받아오게 됩니다.
// - onFailure : 구글 로그인을 실패했을 때 error object를 받아오게 됩니다.
// - responseType : 구글 로그인을 성공할 때 어떤 response를 받아올지 결정합니다. 자세한 responseType은 github에서 확인할 수 있습니다.
