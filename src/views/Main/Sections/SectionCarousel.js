import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/landing-page-slideshow/f17_kickoff-1.jpg"
import image2 from "assets/img/landing-page-slideshow/f17_kickoff-3.jpg"
import image3 from "assets/img/landing-page-slideshow/hackai-1.jpg"
import image4 from "assets/img/landing-page-slideshow/hackai-2.jpg"
import image5 from "assets/img/landing-page-slideshow/hackai-5.jpg"
import image6 from "assets/img/landing-page-slideshow/neuralnets-1.jpg"
import image7 from "assets/img/landing-page-slideshow/neuralnets-2.jpg"
import image8 from "assets/img/landing-page-slideshow/neuralnets-3.jpg"
import image9 from "assets/img/landing-page-slideshow/sep27-1.jpg"

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

const slideList = [
	{
		image: image1,
		description: 'AIS Kickoff'
	},
	{
		image: image2,
		description: 'AIS Kickoff'
  },
  {
		image: image3,
		description: 'HackAI'
  },
  {
		image: image4,
		description: 'HackAI'
  },
  {
		image: image5,
		description: 'HackAI'
  },
  {
		image: image6,
		description: 'Technical Workshops'
  },
  {
		image: image7,
		description: 'Technical Workshops'
  },
  {
		image: image8,
		description: 'Technical Workshops'
  },
  {
		image: image9,
		description: 'Technical Workshops'
	}
];

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                {slideList.map((slide) => (
                  <div>
                    <img src={slide.image} alt={slide.description} className="slick-image" />
                    <div className="slick-caption">
                      <h4>
                        {slide.description}
                      </h4>
                    </div>
                  </div>
                ))}
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
