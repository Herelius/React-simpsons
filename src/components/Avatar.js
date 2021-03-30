import React from "react";
import "./Avatar.css";
import PropTypes from "prop-types";

const Avatar = ({
  firstName,
  star,
  lastName,
  avatar = "https://www.drupal.org/files/issues/default-avatar.png",
}) => {
  return (
    <>
      <img src={avatar} alt={firstName}></img>
      <h3 className={star && "star"}>
        {firstName} {lastName.toUpperCase()}
      </h3>
    </>
  );
};

Avatar.prototype = {
  src: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  star: PropTypes.bool.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

export default Avatar;
