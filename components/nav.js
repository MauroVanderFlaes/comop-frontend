import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import theme from "../theme";

const Nav = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const routeName = route.name;

    const isChallengesRoute = routeName.startsWith("challenges");
    const isNewsfeedRoute = routeName.startsWith("newsfeed");
    const isProfileRoute = routeName.startsWith("profile");
    const isFitpassRoute = routeName.startsWith("fitpass");

    return (
        <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.navigate("newsfeed")}>
                <Image
                    style={[styles.icon, isNewsfeedRoute && styles.selectedIcon]}
                    source={isNewsfeedRoute ? require("../assets/images/NewsfeedWhite.png") : require("../assets/images/NewsfeedDark.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("challenges")}>
                <Image
                    style={[styles.icon, isChallengesRoute && styles.selectedIcon]}
                    source={isChallengesRoute ? require("../assets/images/ChallengesWhite.png") : require("../assets/images/ChallengesDark.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("fitpass")}>
                <Image
                    style={[styles.icon, isFitpassRoute && styles.selectedIcon]}
                    source={isFitpassRoute ? require("../assets/images/FitpassWhite.png") : require("../assets/images/FitpassDark.png")}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("profile")}>
                <Image
                    style={[styles.icon, isProfileRoute && styles.selectedIcon]}
                    source={isProfileRoute ? require("../assets/images/ProfileWhite.png") : require("../assets/images/ProfileDark.png")}
                />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    nav: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: 350,
        height: 60,
        borderRadius: 30,
        backgroundColor: theme.colors.offblack,
        position: "absolute",
        bottom: 20,
        zIndex: 50,
    },
    icon: {
        width: 75,
        height: 52,
        resizeMode: "contain",
    },
    selectedIcon: {
        tintColor: theme.colors.highlight,
    },
});

export default Nav;
