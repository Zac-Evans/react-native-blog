import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import BlogPostForm from '../components/BlogPostForm';
import { Context } from '../context/BlogContext';
import ShowScreen from './ShowScreen';

const EditScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const { id } = route.params;

  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.pop());
      }}
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
