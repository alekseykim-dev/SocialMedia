import React from 'react';
import PropTypes from 'prop-types';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {View, Text, Image} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import {
  faHeart,
  faMessage,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';

const UserPost = props => {
  console.log('UserPosts');
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={props.profileImage}
            imageDimensions={48}
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>
              {props.firstName} {props.lastName}
            </Text>
            {props.location && (
              <Text style={style.location}> {props.location}</Text>
            )}
          </View>
        </View>
        <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={26} />
      </View>
      <View style={style.postImage}>
        <Image source={props.image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatsButton}>
          <FontAwesomeIcon icon={faHeart} color={'#79869F'} />
          <Text style={style.userPostStatsText}>{props.likes}</Text>
        </View>
        <View style={style.userPostStatsButtonRight}>
          <FontAwesomeIcon icon={faMessage} color={'#79869F'} />
          <Text style={style.userPostStatsText}>{props.comments}</Text>
        </View>
        <View style={style.userPostStatsButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color={'#79869F'} />
          <Text style={style.userPostStatsText}>{props.bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
