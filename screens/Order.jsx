import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Order = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>

        {/* Top Image */}
        <Image
       source={require('../img/New.png')}
       style={styles.image}
       resizeMode="cover"
/>

        {/* Order Text */}
        <View style={styles.header}>
          <Text style={styles.title}>Your order is on the way</Text>
          <Text style={styles.deliveryTime}>Estimated delivery time 12:30 PM</Text>
        </View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '50%' }]} />
          </View>
          <Text style={styles.progressText}>50%</Text>
        </View>

        {/* Order Status */}
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Order Status</Text>
          <View style={styles.statusItems}>
            <View style={styles.statusItem}>
              <View style={[styles.statusDot, styles.completed]} />
              <Text style={styles.statusText}>Order placed</Text>
            </View>
            <View style={styles.statusItem}>
              <View style={[styles.statusDot, styles.completed]} />
              <Text style={styles.statusText}>Preparing</Text>
            </View>
            <View style={styles.statusItem}>
              <View style={[styles.statusDot, styles.completed]} />
              <Text style={styles.statusText}>Picked up</Text>
            </View>
            <View style={styles.statusItem}>
              <View style={[styles.statusDot, styles.active]} />
              <Text style={[styles.statusText, styles.activeText]}>On the way</Text>
            </View>
          </View>
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  deliveryTime: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  progressContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 5,
  },
  progressText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  statusContainer: {
    marginTop: 10,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  statusItems: {
    paddingLeft: 10,
  },
  statusItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 10,
  },
  completed: {
    backgroundColor: '#4CAF50',
  },
  active: {
    backgroundColor: '#FFC107',
  },
  statusText: {
    fontSize: 16,
    color: '#666',
  },
  activeText: {
    color: '#333',
    fontWeight: 'bold',
  },
});

export default Order;
