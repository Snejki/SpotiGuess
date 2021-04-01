import React, { useEffect } from "react";
import { getData } from "../../services/http/SpotifyService";
import { connect } from "react-redux";
import { loginUser } from "../../redux/auth/auth.actions";
import { useCookies } from "react-cookie";

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

const mapStateToProps = (state) => ({});

const RedirectContainer = ({ location, loginUser }) => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    const params = new URLSearchParams(location.hash.slice(1));
    const token = params.get("access_token");
    const validTill = params.get("expires_in");
    //getData('', token);
    loginUser({ token, validTill });
    setCookie("token", token, { maxAge: validTill });
    console.log(cookies);
    // add redirect to 'path'
  }, []);

  return <div>TESTT</div>;
};

export default connect(null, mapDispatchToProps)(RedirectContainer);
