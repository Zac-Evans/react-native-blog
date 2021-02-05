import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ route, navigation }) => {
  const { addBlogPost } = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        {
          addBlogPost(title, content, () => navigation.navigate('Index'));
        }
      }}
    />
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};

export default CreateScreen;

const styles = StyleSheet.create({});
