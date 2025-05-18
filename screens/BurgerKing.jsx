import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';

const BurgerKing = ({ navigation }) => {
  const [bbqItems, setBbqItems] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    fetch('https://free-food-menus-api-two.vercel.app/burgers')
      .then((res) => res.json())
      .then((data) => {
        setBbqItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching menu:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#e53935" />
        <Text>Loading menu...</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('ItemDetailScreen', { item })}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.price}>{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (loading) return <ActivityIndicator size="large" color="#3b82f6" style={{ flex: 1 }} />;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔥 BBQ Menu</Text>
      <FlatList
        data={bbqItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f2f2f2' },
  title: { fontSize: 28, fontWeight: '900', textAlign: 'center', marginBottom: 20, color: '#b91c1c' },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#b91c1c',
  },
  details: { flex: 1, marginLeft: 16 },
  name: { fontSize: 20, fontWeight: '700', color: '#1f2937' },
  price: { fontSize: 18, color: '#dc2626', fontWeight: '600' },
});

export default BurgerKing;
