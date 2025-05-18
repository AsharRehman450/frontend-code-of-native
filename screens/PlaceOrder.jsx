import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const PlaceOrder = ({ route }) => {
  const { item } = route.params;
   const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>🎉 Order Placed Successfully! 🎉</Text>
        
        <View style={styles.detailRow}>
          <Text style={styles.label}>Item Name:</Text>
          <Text style={styles.value}>{item.name}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Text style={styles.label}>Price:</Text>
          <Text style={styles.value}>${item.price}</Text>
        </View>

        <Text style={styles.thanks}>Thank you for your purchase!</Text>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#f0f4f8',
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  card: {
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 20,
    padding: 30,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 15,
    shadowOffset: { width: 0, height: 10 },
    elevation: 8,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2563eb',
    marginBottom: 25,
    textAlign: 'center',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  label: {
    fontSize: 18,
    color: '#555',
    fontWeight: '600',
  },
  value: {
    fontSize: 18,
    color: '#1e40af',
    fontWeight: '700',
  },
  thanks: {
    marginTop: 30,
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
  },

});

export default PlaceOrder;
