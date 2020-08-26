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
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import officers from "./Officers.json";

import team1 from "assets/img/faces/avatar.jpg";
import team2 from "assets/img/faces/christian.jpg";
import team3 from "assets/img/faces/kendall.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const officerList = officers.people;

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
      <Parallax image={require("assets/img/team.jpg")}></Parallax>
      <div className={classes.section}>
        <div>
          <GridContainer>
            {officerList.map((officer, index) => {
              return (
                <GridItem key={index} xs={6} sm={4} md={3}>
                  <Card plain>
                    <GridItem
                      xs={12}
                      sm={12}
                      md={6}
                      className={classes.itemGrid}
                    >
                      <img
                        src={officer.img}
                        alt="..."
                        className={imageClasses}
                      />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                      {officer.name}
                      <Button
                        justIcon
                        color="transparent"
                        className={classes.margin5}
                      >
                        <a href={officer.linkedin}>
                          <i className={classes.socials + " fab fa-linkedin"} />
                        </a>
                      </Button>
                      <br />
                      <small className={classes.smallTitle}>
                        {officer.role}
                      </small>
                    </h4>
                    {/* <CardBody>
                      <p className={classes.description}>{officer.desc}</p>
                    </CardBody> */}
                    {/* <CardFooter className={classes.justifyCenter}></CardFooter> */}
                  </Card>
                </GridItem>
              );
            })}
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
