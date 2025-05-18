 import { StyleSheet } from "react-native";


export const HomeStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 20,
  },
  search: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
  },
   icon: {
    marginRight: 8,
  },
  categoryScroll: {
    marginBottom: 15,
  },
  categoryItem: {
    backgroundColor: '#f4f4f4',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginRight: 10,
    height:40,
  },
  categoryText: {
    fontSize: 14,
    color: '#333',
  },
  card: {
    flexDirection: 'row',
    marginBottom: 20,
    // marginTop:20,
    borderRadius: 15,
    backgroundColor: '#f9f9f9',
    overflow: 'hidden',
    elevation: 3,
  },
  cardImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
    justifyContent: 'center',
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardSub: {
    color: '#777',
  },
  links: {
    marginTop: 20,
    gap: 10,
  },
  linkText: {
    color: '#1E90FF',
    fontWeight: '600',
    fontSize: 16,
  },
  logoutText: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
});