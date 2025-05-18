import React from 'react';
import { View, Text, TextInput, FlatList, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { removeData } from '../Components/Async_Storage_Login';
import { HomeStyle } from '../screens/HomeStyle';
import AntDesign from 'react-native-vector-icons/AntDesign';

const categories = ['All', 'Burgers', 'Drinks', 'Chicken', 'Tacos'];

const restaurants = [
  {
    id: '1',
    Image: require("../img/burgerKing.jpg"),
    name: "Bbq's",
    time: '20 - 30min',
    rating: '4.5',
    screen: "BurgerKing"
  },
  {
    id: '2',
    Image: require("../img/images.jpg"),
    name: 'Pizza',
    time: '25 - 30min',
    rating: '4.7',
    screen: "PopEyes"
  },
  {
    id: '3',
    Image: require("../img/Jamba-Juice-.png"),
    name: 'Jumbo Juice',
    time: '15 - 20min',
    rating: '4.2',
    screen: "JumboJuice"
  },
  {
    id: '4',
    Image: require("../img/The-Worst-Time-to-Visit-McDonalds.jpg"),
    name: 'Burgers',
    time: '10 - 15min',
    rating: '4.3',
    screen: "MacDonalds"
  },
  {
    id: '5',
    Image: require("../img/TacoBellsjfif.jpg"),
    name: 'Steaks',
    time: '30 - 35min',
    rating: '4.6',
    screen: "TacoBell"
  },
];

const Home = () => {
  const navigation = useNavigation();

  const handleLogout = async () => {
    await removeData('user');
    navigation.replace('Login');
  };

  const handleSearch = (text) => {
    const searchText = text.toLowerCase().trim();

    const found = restaurants.find(r =>
      r.name.toLowerCase().includes(searchText)
    );

    if (found) {
      navigation.navigate(found.screen, { restaurant: found });
    } else {
      // Optional: show alert or ignore if no match
      // alert("No matching restaurant found");
    }
  };

  return (
    <View style={HomeStyle.container}>

      {/* Search Bar */}
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 8, paddingHorizontal: 10, marginBottom: 10 }}>
        <AntDesign name="search1" size={20} color="#000" />
        <TextInput
          style={{ flex: 1, height: 40, marginLeft: 8, color: '#000' }}
          placeholder="What are you craving"
          placeholderTextColor="#000"
          onSubmitEditing={(e) => handleSearch(e.nativeEvent.text)}  
        />
      </View>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={HomeStyle.categoryScroll}
      >
        {categories.map((item, index) => (
          <TouchableOpacity key={index} style={HomeStyle.categoryItem}>
            <Text style={HomeStyle.categoryText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Restaurant List */}
      <FlatList
        data={restaurants}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={HomeStyle.card}
            onPress={() => navigation.navigate(item.screen, { restaurant: item })}
          >
            <Image source={item.Image} style={HomeStyle.cardImage} />
            <View style={HomeStyle.cardContent}>
              <Text style={HomeStyle.cardTitle}>{item.name}</Text>
              <Text style={HomeStyle.cardSub}>
                Delivery: {item.time} • Rating: {item.rating}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      
    </View>
  );
};

export default Home;
