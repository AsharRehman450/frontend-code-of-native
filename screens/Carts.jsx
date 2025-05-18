import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useEffect } from 'react';

let cartItems = [];
let listeners = [];

export const addToCart = (item, quantity, customization) => {
  const existing = cartItems.find(i => i.id === item.id && i.customization === customization);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cartItems.push({ ...item, quantity, customization });
  }
  listeners.forEach(cb => cb(cartItems));
};

export const getCartCount = () =>
  cartItems.reduce((total, item) => total + item.quantity, 0);

export const subscribe = (cb) => {
  listeners.push(cb);
  cb(cartItems);
  return () => {
    listeners = listeners.filter(fn => fn !== cb);
  };
};

export const useCart = () => {
  const [cart, setCart] = useState(cartItems);
  const [count, setCount] = useState(getCartCount());

  // ✅ Ye sahi hai:
  useEffect(() => {
    const unsubscribe = subscribe(items => {
      setCart([...items]);
      setCount(getCartCount());
    });
    return unsubscribe;
  }, []);

  return { cart, count };
};

// ✅ Styled cart screen with cards
const Carts = () => {
  const { cart } = useCart();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🛒 Your Cart</Text>
      {cart.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty.</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item, index) => '${item.id}-${item.customization}-${index}'}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              {item.customization ? (
                <Text style={styles.customization}>Custom: {item.customization}</Text>
              ) : null}
            </View>
          )}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 30,
    color: '#888',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    color: '#555',
    marginBottom: 4,
  },
  customization: {
    fontSize: 14,
    fontStyle: 'italic',
    color: '#777',
  },
});

export default Carts;