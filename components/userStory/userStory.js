import React from 'react';
import {View, Image, Text} from 'react-native';
import PropTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
const UserStory = props => {
  return (
    <View style={style.useStoryContainer}>
      <UserProfileImage profileImage={props.profileImage} imageDimensions={65} />
      <Text style={style.firstName}>{props.firstName}</Text>
    </View>
  );
};

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
  profileImage: PropTypes.any.isRequired,
};

export default UserStory;
