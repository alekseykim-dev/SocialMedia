// import 'react-native-gesture-handler';

import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  Text,
  Switch,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from 'react-native';
import Title from '../../components/Title/Title';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import style from './style';
import UserStory from '../../components/userStory/userStory';
import UserPost from '../../components/UserPost/UserPost';
import globalStyle from '../../assets/styles/global.style';
import {Routes} from '../../navigation/Routes';
const Home = ({navigation}) => {
  const userStories = [
    {
      firstName: 'Alex',
      id: 1,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Mark',
      id: 2,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Justin',
      id: 3,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Zoe',
      id: 4,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Tiffany',
      id: 5,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'David',
      id: 6,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Mia',
      id: 7,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Olive',
      id: 8,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Cindy',
      id: 9,
      profileImage: require('../../assets/images/default_profile.png'),
    },
    {
      firstName: 'Ruby',
      id: 10,
      profileImage: require('../../assets/images/default_profile.png'),
    },
  ];
  const userPosts = [
    {
      firstName: 'df_furkat',
      lastName: 'Davlatyorov',
      location: 'Busan, South Korea',
      likes: 22,
      comments: 3,
      bookmarks: 655,
      image: require('../../assets/images/furkat.jpg'),
      profileImage: require('../../assets/images/furkat.png'),
      id: 1,
    },
    {
      firstName: 'feruz_karim',
      lastName: 'Karimov',
      location: 'San Jose, California',
      likes: 42,
      comments: 4,
      bookmarks: 525,
      image: require('../../assets/images/feruz.webp'),
      profileImage: require('../../assets/images/feruz.png'),
      id: 2,
    },
    {
      firstName: 'hasbulla.hushetskiy',
      lastName: 'Magomedov',
      location: 'Dagestan, Russia',
      likes: 7777,
      comments: 77,
      bookmarks: 777,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 3,
    },
    {
      firstName: 'John Wick',
      lastName: 'BigDodo',
      location: 'Busan, South Korea',
      likes: 4123,
      comments: 221,
      bookmarks: 515,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 4,
    },
    {
      firstName: 'Maverick',
      lastName: 'Spark',
      location: 'Gurlenskiy, Urdu',
      likes: 3425,
      comments: 246,
      bookmarks: 755,
      image: require('../../assets/images/default_post.png'),
      profileImage: require('../../assets/images/default_profile.png'),
      id: 5,
    },
  ];

  const userStoriesPageSize = 4;
  const [userStoriesCurrentPage, setUserStoriesCurrentPage] = useState(1);
  const [userStoriesRenderedData, setUserStoriesRenderedData] = useState([]);
  const [isLoadingUserStories, setIsLoadingUserStories] = useState(false);

  const userPostsPageSize = 2;
  const [userPostsCurrentPage, setUserPostsCurrentPage] = useState(1);
  const [userPostsRenderedData, setUserPostsRenderedData] = useState([]);
  const [isLoadingUserPosts, setIsLoadingUserPosts] = useState(false);

  // const [isOn, setIsOn] = useState(false);
  // console.log(Platform);
  const pagination = (database, currentPage, pageSize) => {
    console.log(`Current Page is ${currentPage}`);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= database.length) {
      return [];
    }
    return database.slice(startIndex, endIndex);
  };
  useEffect(() => {
    setIsLoadingUserStories(true);
    const getInitialData = pagination(userStories, 1, userStoriesPageSize);
    setUserStoriesRenderedData(getInitialData);
    setIsLoadingUserStories(false);

    setIsLoadingUserPosts(true);
    const getInitialDataPosts = pagination(userPosts, 1, userPostsPageSize);
    setUserPostsRenderedData(getInitialDataPosts);
    setIsLoadingUserPosts(false);
  }, []);
  return (
    <SafeAreaView style={globalStyle.backgroundWhite}>
      {/* <StatusBar backgroundColor={'red'} barStyle={'dark-content'} /> */}
      <View>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={style.header}>
                <Title title={`Let's Explore`} />
                <TouchableOpacity
                  style={style.messageIcon}
                  //   onPress={() => {
                  //     navigation.navigate(Routes.Profile);
                  //   }}
                >
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size={20}
                    color="#898DAE"
                  />
                  <View style={style.messageNumberContainer}>
                    <Text style={style.messageNumber}>2</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/* <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}>
                <Switch
                  value={isOn}
                  onValueChange={value => setIsOn(value)}
                  style={
                    Platform.OS === 'android' && {
                      transform: [{scaleX: 1.5}, {scaleY: 1.5}],
                    }
                  }
                  ios_backgroundColor={'#000'}
                  trackColor={
                    Platform.OS === 'android' && {
                      false: 'blue',
                      true: 'red',
                    }
                  }
                />
              </View> */}
              <View style={style.useStoryContainer}>
                <FlatList
                  onEndReachedThreshold={0.5}
                  onEndReached={() => {
                    console.log('Rendering next story page');
                    if (isLoadingUserStories) return;
                    setIsLoadingUserStories(true);
                    const contentToAppend = pagination(
                      userStories,
                      userStoriesCurrentPage + 1,
                      userStoriesPageSize,
                    );
                    if (contentToAppend.length > 0) {
                      setUserStoriesCurrentPage(userStoriesCurrentPage + 1);
                      setUserStoriesRenderedData(prev => [
                        ...prev,
                        ...contentToAppend,
                      ]);
                    }
                    setIsLoadingUserStories(false);
                  }}
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}
                  data={userStoriesRenderedData}
                  renderItem={({item}) => (
                    <UserStory
                      key={`userStory ${item.id}`}
                      firstName={item.firstName}
                      profileImage={item.profileImage}
                    />
                  )}
                />
              </View>
            </>
          }
          showsVerticalScrollIndicator={false}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log('Rendering next post page');
            if (isLoadingUserPosts) return;
            setIsLoadingUserPosts(true);
            const contentToAppend = pagination(
              userPosts,
              userPostsCurrentPage + 1,
              userPostsPageSize,
            );
            if (contentToAppend.length > 0) {
              setUserPostsCurrentPage(userPostsCurrentPage + 1);
              setUserPostsRenderedData(prev => [...prev, ...contentToAppend]);
            }
            setIsLoadingUserPosts(false);
          }}
          data={userPostsRenderedData}
          renderItem={({item}) => (
            <View style={style.userPostContainer}>
              <UserPost
                firstName={item.firstName}
                lastName={item.lastName}
                location={item.location}
                image={item.image}
                profileImage={item.profileImage}
                likes={item.likes}
                comments={item.comments}
                bookmarks={item.bookmarks}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
