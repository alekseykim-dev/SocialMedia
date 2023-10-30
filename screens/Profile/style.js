import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  profileImage: {
    width: horizontalScale(120),
    height: verticalScale(110),
  },
  profileImageContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(32),
  },
  profileImageContent: {
    borderWidth: 1,
    borderBlockColor: '#0150EC',
    padding: horizontalScale(4),
    borderRadius: horizontalScale(110),
  },
  userName: {
    marginTop: verticalScale(10),
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 20,
  },
  statAmount: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: 20,
    color: '#022150',
    textAlign: 'center',
  },
  statType: {
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '400'),
    fontSize: 16,
    color: '#79869F',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: horizontalScale(40),
    paddingVertical: verticalScale(30),
    borderBottomWidth: 1,
    borderColor: '#E9EFF1',
  },
  statBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
});

export default style;
