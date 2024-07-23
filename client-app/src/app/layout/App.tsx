import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivituDashboard";
import { observer } from "mobx-react-lite";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../../features/home/HomePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";

function App() {
  const location = useLocation();

  return (
    <>
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
        </Routes>
      </Container>
    </>
  );
}

export default observer(App);
