import React, { useContext, useState } from 'react'
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {

    const[title,setTitle] = useState(initialValues.title);
    const[content, setContent] = useState(initialValues.content)
    
    

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter title: </Text>
            <TextInput style={styles.input} value={title} onChangeText={setTitle} />
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput style={styles.input}  value={content} onChangeText={setContent} />
            <Button onPress={() => onSubmit(title, content)} title='Save blog post' />
        </View>
    )
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    container:{
        padding:10
    },  
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    }
})

export default BlogPostForm;
