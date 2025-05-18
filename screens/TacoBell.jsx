import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';

const TacoBell = ({navigation}) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://free-food-menus-api-two.vercel.app/steaks')
      .then(res => res.json())
      .then(data => {
        setMenuItems(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('API error:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <ActivityIndicator size="large" color="#3b82f6" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🥩 Steak Menu</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ItemDetailScreen', { item })}>
            <View style={styles.card}>
              <Image source={{ uri: item.img }} style={styles.image} />
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>${item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f2f6ff',  // Light blueish background
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 24,
    textAlign: 'center',
    color: '#1e3a8a',  // Dark blue
    textShadowColor: 'rgba(0,0,0,0.1)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#3b82f6',  // soft blue shadow
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    borderRadius: 40, // full circle
    borderWidth: 2,
    borderColor: '#3b82f6',  // blue border
  },
  details: {
    flex: 1,
    marginLeft: 18,
  },
  name: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1e293b',  // dark slate blue
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2563eb',  // bright blue
  },
});

export default TacoBell;
