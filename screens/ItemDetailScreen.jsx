import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';


import { addToCart, getCartCount } from '../screens/Carts'; 

const ItemDetailScreen = ({ route ,navigation}) => {
  const { item } = route.params;

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const loadCartCount = async () => {
      try {
        const count = await AsyncStorage.getItem('cartCount');
        if (count !== null) {
          setCartCount(parseInt(count, 10));
        }
      } catch (error) {
        console.log('Error loading cart count:', error);
      }
    };
    loadCartCount();
  }, []);

  const saveCartCount = async (count) => {
    try {
      await AsyncStorage.setItem('cartCount', count.toString());
    } catch (error) {
      console.log('Error saving cart count:', error);
    }
  };

  const handleAddToCart = async () => {
    addToCart(item, 1, null); 
    const newCount = getCartCount();
    setCartCount(newCount);
    await saveCartCount(newCount);
    Alert.alert('Added to Cart', `${item.name} added to your cart.`);
  };

 const handleAddToOrder = () => {
    Alert.alert('Order Placed', `You have ordered ${item.name}.`);
    navigation.navigate('PlaceOrder', { item }); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.topRightIcon}>
        <AntDesign name="pluscircle" size={30} color="#2563eb" />
        <View style={styles.countBadge}>
          <Text style={styles.countText}>{cartCount}</Text>
        </View>
      </View>

      <Image source={item.image} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>{item.price}</Text>

      <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.button, { backgroundColor: '#e53935' }]} onPress={handleAddToOrder}>
        <Text style={styles.buttonText}>Add to Order</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#f0f4f8',
  },
  topRightIcon: {
    position: 'absolute',
    top: 30,
    right: 25,
  },
  countBadge: {
    position: 'absolute',
    top: -6,
    right: -6,
    backgroundColor: '#e53935',
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  image: {
    width: 220,
    height: 220,
    borderRadius: 20,
    marginBottom: 25,
    borderWidth: 3,
    borderColor: '#3b82f6',
  },
  name: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 12,
    color: '#1e40af',
    textShadowColor: 'rgba(59, 130, 246, 0.4)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
  price: {
    fontSize: 24,
    color: '#2563eb',
    marginBottom: 35,
    fontWeight: '700',
  },
  button: {
    backgroundColor: '#2563eb',
    paddingVertical: 16,
    paddingHorizontal: 55,
    borderRadius: 35,
    marginVertical: 12,
    width: '85%',
    alignItems: 'center',
    shadowColor: '#2563eb',
    shadowOpacity: 0.4,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 1,
  },
});

export default ItemDetailScreen;
