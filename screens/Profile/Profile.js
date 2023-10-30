import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import globalStyle from '../../assets/styles/global.style';
import style from './style';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.profileImageContainer}>
        <View style={style.profileImageContent}>
          <Image
            style={style.profileImage}
            source={require('../../assets/images/default_profile.png')}
          />
        </View>
      </View>
      <Text style={style.userName}>Aleksey Kim</Text>
      <View style={style.statContainer}>
        <View>
          <Text style={style.statAmount}>45</Text>
          <Text style={style.statType}>Following</Text>
        </View>
        <View style={style.statBorder}></View>
        <View>
          <Text style={style.statAmount}>30M</Text>
          <Text style={style.statType}>Followers</Text>
        </View>
        <View style={style.statBorder}></View>
        <View>
          <Text style={style.statAmount}>100</Text>
          <Text style={style.statType}>Posts</Text>
        </View>
      </View>
      <View style={globalStyle.flex}>
        <ProfileTabsNavigation />
      </View>
      <ScrollView contentContainerStyle={globalStyle.flexGrow} />
    </SafeAreaView>
  );
};

export default Profile;
