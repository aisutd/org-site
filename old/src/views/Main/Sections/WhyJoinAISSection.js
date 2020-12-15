import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Computer from "@material-ui/icons/Computer";
import Functions from "@material-ui/icons/Functions";
import MoneyOff from "@material-ui/icons/MoneyOff";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Why Join AIS?</h2>
          {/* <h5 className={classes.description}>
            Put some text here
          </h5> */}
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="If you are excited by the idea of technical talks concerning AI, AI-focused hackathons, and AI industry events, join the AIS."
              icon={Computer}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="If you find fields such as natural language processing, machine learning, computer vision, and statistical learning interesting, join the AIS."
              icon={Functions}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="If you wish to get involved with us, we've made being a member easy. There are no required fees or obligations for members. As long as you're interested, we will keep coming up with opportunities to get involved. If that sounds like a good deal, join the AIS."
              icon={MoneyOff}
              iconColor="info"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
