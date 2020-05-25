import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import CardStack, { Card } from 'react-native-card-stack-swiper';
import CardItem from '../components/CardItem';
import Demo from '../assets/data/demo.js';

const Explore = () => {
    return (
        <ImageBackground
            source={require('../assets/images/bg.png')}
            style={styles.bg}
        >
            <View style={styles.containerHome}>

                <CardStack
                    loop={true}
                    verticalSwipe={false}
                    renderNoMoreCards={() => null}
                    ref={swiper => (this.swiper = swiper)}
                >
                    {Demo.map((item, index) => (
                        <Card key={index}>
                            <CardItem
                                image={item.image}
                                name={item.name}
                                description={item.description}
                                matches={item.match}
                                distance={item.distance}
                                statue={item.status}
                                actions
                                onPressLeft={() => this.swiper.swipeLeft()}
                                onPressRight={() => this.swiper.swipeRight()}
                            />
                        </Card>
                    ))}
                </CardStack>
            </View>
        </ImageBackground>
    );
};

export default Explore;

const styles = StyleSheet.create({
    containerHome: {
        marginHorizontal: 10
    },
    bg: {
        flex: 1,
        resizeMode: "cover",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
})
