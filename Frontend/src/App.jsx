import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
//router dom
import { Route, Routes, useLocation } from "react-router-dom";

// Shared Components
import { FooterPolis } from "./components/shared/footer/FooterPolis";
import { NavbarMain } from "./components/shared/navbarMain/NavbarMain";
// Pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Novelties from "./pages/Novelties";
import Participate from "./pages/Participate";
import Youngsters from "./pages/Youngsters";
import Institutions from "./pages/Institutions";
import Environment from "./pages/Environment";
import NoMatch from "./pages/NoMatch";
import { HeaderMain } from "./components/headerMain/HeaderMain";
import { SidebarRedes } from "./components/sidebarRedes/SidebarRedes";
import Participation from "./pages/Participation";
import { AboutYoungDescription } from "./components/description/AboutYoungDescription";
import { ParticipationLayout } from "./components/youngsters/ParticipationLayout";
import EnvironmentProjects from "./components/Environment/EnvironmentProjects";
import EnvironmentFormation from "./components/Environment/EnvironmentFormation";
import EventsCalendar from "./components/youngsters/Calendar/calendar";

function App() {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <div className="schema-page">
      <NavbarMain />
      {splitLocation[1] === '' &&
        <HeaderMain />
      }
      <SidebarRedes />
      <div className="bg-container-main mb-5">
        <Routes >
          {/* pages */}
          <Route path="/" element={<Home />} />

          <Route exact path="/aboutUs" element={<AboutUs/>} />

          <Route exact path="/novelties" element={<Novelties />} />

          <Route exact path="/participate" element={<Participate />} />

          <Route exact path="/youngsters" element={<Youngsters />} />
          <Route exact path="/youngsters/about" element={<AboutYoungDescription />} />
          <Route exact path="/youngsters/participation" element={<ParticipationLayout />} />
          <Route exact path="/youngsters/events" element={<ParticipationLayout />} />
          <Route exact path="/youngsters/calendar" element={<EventsCalendar />} />

          <Route exact path="/institutions" element={<Institutions />} />
          

          <Route exact path="/environment" element={<Environment />} />
          <Route exact path="/environment/projects" element={<EnvironmentProjects  />} />
          <Route exact path="/environment/formation" element={<EnvironmentFormation  />} />

          <Route exact path="/participation" element={<Participation />} />

          <Route path="/404" element={<NoMatch />} />
          <Route path="*" element={<NoMatch />} />

        </Routes>
      </div>
      <FooterPolis />


    </div>
  );
}

export default App;
