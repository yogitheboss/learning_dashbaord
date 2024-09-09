import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const {
    getAccessTokenSilently,
    loginWithRedirect,
    logout,
    user,
    isAuthenticated,
  } = useAuth0();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated]);
  function callApi() {
    axios
      .get("http://localhost:3000")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }
  async function callProtectedApi() {
    try {
      const token = await getAccessTokenSilently({
        audience: "unique_identifier",
        grantType: "client_credentials",
      });
      let res = await axios.get("http://localhost:3000/api", {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      });
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <header className="App-header">
      <button
        onClick={() =>
          isAuthenticated
            ? logout({ returnTo: window.location.origin })
            : loginWithRedirect()
        }>
        {isAuthenticated ? "Log Out" : "Log In"}
      </button>
      {isAuthenticated && <code>{JSON.stringify(user, null, 2)}</code>}
      <button onClick={callApi}>Call API</button>
      <button onClick={callProtectedApi}>Call Protected API</button>
      <Link to="/dash"> Dashboard</Link>
    </header>
  );
}

export default App;
