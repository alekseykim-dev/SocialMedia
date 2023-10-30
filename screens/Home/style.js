import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
  },
  messageIcon: {padding: 14, backgroundColor: '#F9FAFB', borderRadius: 50},
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: 10,
    height: 10,
    borderRadius: 10,
    position: 'absolute',
    right: 10,
    top: 12,
  },
  messageNumber: {
    color: '#ffffff',
    fontSize: 6,
    fontFamily: getFontFamily('Inter, "600'),
  },
  useStoryContainer: {
    width: '100%',
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(15),
  },
  userPostContainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
