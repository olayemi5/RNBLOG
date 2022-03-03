import React, { useContext } from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native'
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {

    const blogPosts = useContext(BlogContext);

    return (
        <View>
            <FlatList 
                data={blogPosts}
                keyExtractor={blog => blog.title}
                renderItem={({ item }) => {
                    return <Text>
                        {item.title}
                    </Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({

})

export default IndexScreen