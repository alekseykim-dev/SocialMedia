import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
  userContainer: {
    flexDirection: 'row',
    marginLeft: -10,
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
    marginTop: 5,
    marginLeft: -4,
  },
  postImage: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  userPostContainer: {
    marginTop: 20,
    borderBottomWidth: 1,
    paddingBottom: 10,
    borderBottomColor: '#EFF2F6',
  },
  userPostStats: {
    marginLeft: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userPostStatsButton: {flexDirection: 'row', marginLeft: -17},
  userPostStatsButtonRight: {flexDirection: 'row', marginLeft: 20},
  userPostStatsText: {marginLeft: 3, color: '#79869F'},
});

export default style;
