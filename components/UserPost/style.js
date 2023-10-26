import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    marginLeft: horizontalScale(-10),
  },
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: 10,
    // backgroundColor: 'red',
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 16,
  },
  location: {
    color: '#000',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 12,
    marginTop: verticalScale(5),
    marginLeft: horizontalScale(0)
  },
  postImage: {
    alignItems: 'center',
    marginTop: verticalScale(10),
    marginBottom: verticalScale(20),
  },
  userPostContainer: {
    marginTop: verticalScale(20),
    borderBottomWidth: 1,
    paddingBottom: verticalScale(10),
    borderBottomColor: '#EFF2F6',
  },
  userPostStats: {
    marginLeft: horizontalScale(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userPostStatsButton: {flexDirection: 'row', marginLeft: horizontalScale(-17)},
  userPostStatsButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(20),
  },
  userPostStatsText: {marginLeft: horizontalScale(3), color: '#79869F'},
});

export default style;
