import React from "react";
import PropTypes from "prop-types";
// Styles
import { Wrapper, Content, Text } from "./HeroImg.styles";

const HeroImg = ({ image, title, text }) => {
  return (
    <Wrapper image={image}>
      <Content>
        <Text>
          <h1>{title}</h1>
          <p>{text}</p>
        </Text>
      </Content>
    </Wrapper>
  );
};

HeroImg.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default HeroImg;
