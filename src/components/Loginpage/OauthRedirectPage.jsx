import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {setCookie} from "../../services/cookie.js";

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');
    setCookie('accessToken', accessToken);
    setCookie('refreshToken', refreshToken);
    navigate("/");
  }, []);

  return (
    <div>
      로딩중...
    </div>
  );
};

export default OauthRedirectPage;