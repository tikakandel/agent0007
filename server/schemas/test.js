//src/utils/checkUserPermission.js
export default function checkUserPermission(user = { roles: [] }, permission) {
    const allowAccessForRoles = {
      "route.admin": ["admin"],
      "route.authenticated": ["user", "admin"],
      "route.home": ["*"], //means "Any role"
      "component.Authenticate": ["*", "!user", "!admin"], //Any role except user and admin
      "component.BecomeAdmin": ["user"],
      "component.LogOut": ["user", "admin"]
    };
  
    //If we don't have such permission in list, access denied for everyone
    if (!Array.isArray(allowAccessForRoles[permission])) {
      return false;
    }
  
    //Check if any of user's roles explicitly denies access
    for (const role of user.roles) {
      if (allowAccessForRoles[permission].includes("!" + role)) {
        return false;
      }
    }
  
    //If list of allowed roles contains '*', access allowed for everyone
    if (allowAccessForRoles[permission].includes("*")) {
      return true;
    }
  
    //Check if any of user's roles allowes access
    for (const role of user.roles) {
      if (allowAccessForRoles[permission].includes(role)) {
        return true;
      }
    }
  
    return false;
  }
  
  //src/SecuredRoute
  import React from "react";
  import { Route, Redirect } from "react-router-dom";
  import checkUserPermission from "./utils/checkUserPermission";
  
  const SecuredRoute = ({
    user,
    permission,
    redirectTo = "/",
    children,
    ...rest
  }) => {
    const allowed = checkUserPermission(user, permission);
  
    if (allowed) {
      return <Route {...rest} render={() => children} />;
    }
  
    return (
      <Route
        {...rest}
        render={({ location }) => (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: location }
            }}
          />
        )}
      />
    );
  };
  
  export default SecuredRoute;
  
  //src/App.js
  import React, { useState } from "react";
  import "./styles.css";
  import { BrowserRouter as Router, Switch, Link } from "react-router-dom";
  import SecuredRoute from "./SecuredRoute";
  import checkUserPermission from "./utils/checkUserPermission";
  
  const AdminPage = () => <div>Admin page is open for admins</div>;
  
  const AuthenticatedPage = () => (
    <div>Authenticated page is open for users and admins</div>
  );
  
  const HomePage = () => <div>Home page is open for everyone</div>;
  
  export default function App() {
    const [user, setUser] = useState();
  
    return (
      <Router>
        <div className="App">    
          <div className="Nav">
            <div>
              <Link to="/">Go to Home Page</Link>
            </div>
            {checkUserPermission(user, "route.authenticated") ? (
              <div>
                <Link to="/authenticated">Go to Authenticated Page</Link>
              </div>
            ) : null}
            {checkUserPermission(user, "route.admin") ? (
              <div>
                <Link to="/admin">Go to Admin Page</Link>
              </div>
            ) : null}
          </div>
  
          <div className="Controls">
            {checkUserPermission(user, "component.Authenticate") ? (
              <button type="button" onClick={() => setUser({ roles: ["user"] })}>
                Become authenticated
              </button>
            ) : null}
  
            {checkUserPermission(user, "component.BecomeAdmin") ? (
              <button type="button" onClick={() => setUser({ roles: ["admin"] })}>
                Become admin
              </button>
            ) : null}
  
            {checkUserPermission(user, "component.LogOut") ? (
              <button type="button" onClick={() => setUser()}>
                Log out
              </button>
            ) : null}
          </div>
  
          <div className="Main">
            <Switch>
              <SecuredRoute user={user} permission="route.home" exact path="/">
                <HomePage />
              </SecuredRoute>
              <SecuredRoute
                user={user}
                permission="route.authenticated"
                path="/authenticated"
              >
                <AuthenticatedPage />
              </SecuredRoute>
              <SecuredRoute user={user} permission="route.admin" path="/admin">
                <AdminPage />
              </SecuredRoute>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }