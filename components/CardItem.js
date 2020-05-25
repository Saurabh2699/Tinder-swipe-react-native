import React from 'react';
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

const CardItem = ({
    actions,
    description,
    image,
    matches,
    name,
    onPressLeft,
    onPressRight,
    distance,
    variant
}) => {
    const fullWidth = Dimensions.get('window').width;
    const imageStyle = [
        {
            borderRadius: 8,
            width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
            height: variant ? 170 : 350,
            margin: variant ? 0 : 20
        }
    ];

    const nameStyle = [
        {
            paddingTop: variant ? 10 : 15,
            paddingBottom: variant ? 5 : 7,
            color: '#363636',
            fontSize: variant ? 15 : 30
        }
    ];

    return (
        <View style={styles.containerCardItem}>

            <View>
                <Text>People Near Me</Text>
                <Text style={styles.distance}>{distance}</Text>
            </View>

            {/* IMAGE */}
            <Image source={image} style={imageStyle} />

            {/* MATCHES */}
            {matches && (
                <View style={styles.matchesCardItem}>
                    <Text style={styles.matchesTextCardItem}>
                        <FontAwesome name="heart" /> {matches}% Match!
                     </Text>
                </View>
            )}

            {/* NAME */}
            <Text style={nameStyle}>{name}</Text>

            {/* DESCRIPTION */}
            {description && (
                <Text style={styles.descriptionCardItem}>{description}</Text>
            )}

            {/* ACTIONS */}
            {actions && (
                <View style={styles.actionsCardItem}>
                    <TouchableOpacity style={styles.miniButton}>
                        <Text style={styles.star}>
                            <FontAwesome name="star" size={30} />
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => onPressLeft()}>
                        <Text style={styles.like}>
                            <AntDesign name="like1" size={30} />
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onPressRight()}
                    >
                        <Text style={styles.dislike}>
                            <AntDesign name="dislike1" size={30} />
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.miniButton}>
                        <Text style={styles.flash}>
                            <FontAwesome name="flash" size={30} />
                        </Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};

export default CardItem;

const styles = StyleSheet.create({
    containerCardItem: {
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        alignItems: "center",
        margin: 10,
        shadowOpacity: 0.05,
        shadowRadius: 10,
        shadowColor: "#000000",
        shadowOffset: { height: 0, width: 0 }
    },
    matchesCardItem: {
        marginTop: -35,
        backgroundColor: "#7444C0",
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 20
    },
    matchesTextCardItem: {
        color: "#FFFFFF"
    },
    descriptionCardItem: {
        color: "#757E90",
        textAlign: "center"
    },
    actionsCardItem: {
        flexDirection: "row",
        alignItems: "center",

    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
        marginHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowColor: "#363636",
        shadowOffset: { height: 10, width: 0 }
    },
    miniButton: {
        width: 40,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#FFFFFF",
        marginHorizontal: 7,
        alignItems: "center",
        justifyContent: "center",
        shadowOpacity: 0.15,
        shadowRadius: 20,
        shadowColor: "#363636",
        shadowOffset: { height: 10, width: 0 }
    },
    star: {
        color: "#FFA200"
    },
    like: {
        fontSize: 25,
        color: "#B644B2"
    },
    dislike: {
        fontSize: 25,
        color: "#363636"
    },
    flash: {
        color: "#5028D7"
    },
    distance: {
        color: "#757E90",
        textAlign: "center"
    }
})