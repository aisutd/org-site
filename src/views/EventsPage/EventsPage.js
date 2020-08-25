import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import kickoff from "assets/img/events/Kickoff.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.imgFluid);
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
      />
      <Parallax
        image={require("assets/img/landing-page-slideshow/hackai-1.jpg")}
      ></Parallax>
      <div className={classes.section}>
        <div>
          <GridContainer alignItems="center">
            <GridItem xs={12} sm={12} md={6}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={kickoff} alt="..." className={imageClasses} />
                </GridItem>
                <h4 className={classes.cardTitle}>
                  AI Society Kickoff
                  <br />
                  <small className={classes.smallTitle}>
                    8/26/2020, 7:00 PM
                  </small>
                </h4>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <Button
                    round
                    color="info"
                    href="https://aisutd.org/live"
                    size="lg"
                    rel="noopener noreferrer"
                  >
                    Join Meeting
                  </Button>
                </GridItem>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
