import {useEffect} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {setCookie} from "../../services/cookie.js";

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');

  useEffect(() => {
    setCookie('accessToken', accessToken);
    setCookie('refreshToken', refreshToken);
    navigate("/");
    window.location.reload();
  }, []);

  return (
    <div>
      로딩중...
    </div>
  );
};

export default OauthRedirectPage;