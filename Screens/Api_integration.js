import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    SafeAreaView,
    Dimensions,
    Image,
    Text,
    Button,
    ScrollView,
    TouchableOpacity,
} from 'react-native'

var { width } = Dimensions.get("window");

class Api_Integration extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts',
            {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then((response) => {
                return response.json();
            })
            .then(response => {
                this.setState({ data: response })
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { data } = this.state
        return (
            <ScrollView>
                <SafeAreaView >
                    {
                        data.map((item, index) =>
                            <TouchableOpacity style={styles.card} key={index}>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <Text style={styles.body}>
                                    {item.body}
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({

    card: {
        height: width / 2.5,
        //elevation: 12,
        borderWidth: 2,
        margin: 6,
        padding: 6,
        borderRadius: 9,
        borderColor: 'gray'
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 9,
        fontSize: 16,
        textTransform: "capitalize"
    },
    body: {
        color: 'gray',
        fontSize: 13,
        fontWeight: 'bold'
    }

})

export default Api_Integration;