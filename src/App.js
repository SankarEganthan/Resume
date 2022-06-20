import React from "react";
import { Container, Grid } from "@mui/material";
import "./App.css";

import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className={"top_40"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content container_shadow">
              <Routes>
                <Route exact path="/" element={<Resume />} />

                <Route path="/portfolio" element={<Portfolio />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
