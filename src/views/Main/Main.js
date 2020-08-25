import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import renderHTML from "react-render-html";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Carousel from "./Sections/SectionCarousel";
import WhyJoinAISSection from "./Sections/WhyJoinAISSection";
import JoinPage from "views/JoinPage/JoinList";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="AIS UTD"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/ais-bg.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>
                  Artificial Intelligence <br /> Society @ UTD
                </h1>
                <h3 className={classes.subtitle}>
                  We are a team of passionate individuals at the University of
                  Texas at Dallas, devoted to bridging the gap between people's
                  awareness and the world of AI.
                </h3>
              </div>
              <br />
              <a href="#join">
                <Button round color="info" size="lg" rel="noopener noreferrer">
                  <i className="fas fa-envelope" />
                  &nbsp; Join us
                </Button>
              </a>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <br />
      <Container>
        <Row>
          <Col>
            <Carousel />
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <div className={classes.container}>
                <WhyJoinAISSection />
                <div id="join">
                  <JoinPage />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
