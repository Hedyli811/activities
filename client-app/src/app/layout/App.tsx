import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivituDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";

function App() {
  const location = useLocation();

  return (
    <>
      <ToastContainer position="bottom-right" hideProgressBar />
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/activities" Component={ActivityDashboard} />
          <Route path="/activities/:id" Component={ActivityDetails} />
          <Route path="/createActivity" Component={ActivityForm} />
          <Route
            key={location.key}
            path="/manage/:id"
            Component={ActivityForm}
          />
          <Route path="/errors" Component={TestErrors} />
          <Route path="/server-error" Component={ServerError} />
          <Route Component={NotFound} />
        </Routes>
      </Container>
    </>
  );
}

export default observer(App);
