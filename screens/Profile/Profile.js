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

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.profleImageContainer}>
        <View style={style.profleImageContent}>
          <Image
            style={style.profleImage}
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
      <ScrollView contentContainerStyle={globalStyle.flexGrow} />
    </SafeAreaView>
  );
};

export default Profile;
