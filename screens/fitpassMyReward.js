import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Logo from "../components/logo";
import Nav from "../components/nav";
import UserGreeting from '../components/userGreeting';
import ArrowBack from '../components/arrowBack';
import theme from "../theme";

const FitpassReward = () => {
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <ArrowBack style={styles.arrowBack}/>
                <View style={styles.innerContainer}>
                    <Logo />
                    <View>
                        <UserGreeting style={theme.textStyles.NameTitle} />
                        <Text style={theme.textStyles.customSubtitle}>Here is your claimed reward</Text>
                    </View>
                    <View style={styles.rewards}>
                            <View style={styles.reward}>
                                <Image
                                    source={require("../assets/icons/placeholderReward6.png")}
                                    style={styles.image5}
                                />
                                <View style={styles.circleBig}></View>
                            </View>
                            <View>
                                <Text style={styles.Title}>REWARDNAAM</Text>
                                <Text style={styles.Text}>Ask your fitness staff for your reward. They will give you your deserved REWARDNAAM. </Text>
                            </View>
                            <TouchableOpacity style={theme.buttonStyles.button}><Text style={theme.buttonStyles.buttonText}>I got my reward</Text></TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Nav />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: "center",
    },
    scrollContainer: {
        paddingBottom: 100,
        alignItems: "center",
    },
    innerContainer: {
        paddingTop: 130,
        alignItems: "center",
    },
    arrowBack: {
        top: 80,
        left: 7,
    },

    rewards: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        gap: 20,
    },

    reward: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },

    circleBig: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: theme.colors.blue_dark,
    },

    image5: {
        position: 'absolute',
        width: 90,
        height: 120, // Pas de afmetingen naar wens aan
        zIndex: 1, // Zorgt ervoor dat de Image bovenop de View wordt getoond
    },

    Title: {
        ...theme.textStyles.customTitle,
        fontSize: 22,
        textAlign: "center",
        color: theme.colors.offblack,
    },

    Text: {
        ...theme.textStyles.customText,
        fontSize: 16,
        textAlign: "center",
        color: theme.colors.offblack,
        marginBottom: 20,
    },
});


export default FitpassReward;