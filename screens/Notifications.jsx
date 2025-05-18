import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const NotificationsScreen = () => {
  const notifications = [
    {
      id: '1',
      date: 'Today',
      items: [
        {
          id: '1-1',
          title: 'Your order is on the way',
          subtitle: 'Arriving at 9:05PM',
          icon: require('../img/beconjfif.jpg'),
        },
        {
          id: '1-2',
          title: "You've earned a new badge",
          subtitle: 'Check it out',
          icon: require('../img/star-badge-3.jpg'),
        },
      ],
    },
    {
      id: '2',
      date: 'Yesterday',
      items: [
        {
          id: '2-1',
          title: 'Delivered',
          subtitle: 'at 8:35PM',
          icon: require('../img/onion-rings-recipe.jpg'),
        },
        {
          id: '2-2',
          title: 'Delivered',
          subtitle: 'at 7:58PM',
          icon: require('../img/TacoBellsjfif.jpg'), 
        },
        {
          id: '2-3',
          title: 'Delivered',
          subtitle: 'at 5:45PM',
          icon: require('../img/softDrinks.jpg'), 
        },
      ],
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <Image source={item.icon} style={styles.notificationIcon} />
      <View style={styles.notificationTextContainer}>
        <Text style={styles.notificationTitle}>{item.title}</Text>
        {item.subtitle && <Text style={styles.notificationSubtitle}>{item.subtitle}</Text>}
      </View>
    </View>
  );

  const renderSection = ({ item: section }) => (
    <View style={styles.section}>
      <Text style={styles.sectionHeader}>{section.date}</Text>
      <FlatList
        data={section.items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Notifications</Text>
      <FlatList
        data={notifications}
        renderItem={renderSection}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 20,
  },
  notificationTextContainer: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  notificationSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
    marginLeft: 52, // Align with text (icon width + margin)
    marginVertical: 4,
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default NotificationsScreen;