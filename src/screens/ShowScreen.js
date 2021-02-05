import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Context } from '../context/BlogContext';
import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ShowScreen = ({ route, navigation }) => {
  const { id } = route.params;
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
          <FontAwesome name='pencil' size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
