import React, { useContext, useLayoutEffect, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
  const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    getBlogPosts();
    const reload = navigation.addListener('didFocus', () => {
      getBlogPosts();
    });
    return () => {
      reload.remove();
    };
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Create')}>
          <Feather name='plus' size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={state}
        keyExtractor={(blogPost) => blogPost.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', { id: item.id })}
            >
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <FontAwesome5
                    style={styles.icon}
                    name='trash'
                    size={24}
                    color='black'
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default IndexScreen;

IndexScreen.setOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name='plus' size={30} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  row: {
    borderTopWidth: 1,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 18,
  },
  icon: {
    fontSize: 24,
  },
});
