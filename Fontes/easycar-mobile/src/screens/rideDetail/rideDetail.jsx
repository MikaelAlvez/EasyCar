import MyButton from "../../components/mybutton/mybutton";
import { Text, TextInput, View } from "react-native";
import MapView, {Marker, PROVIDER_DEFAULT} from "react-native-maps";
import { styles } from "./rideDetail.style.js";
import { useState } from "react";

function RideDetail(props){
    const [myLocation, setMyLocation] = useState({
        latitude: 20,
        longitude: 20
    });

    return <View style={styles.container}>

        <MapView 
            style={styles.map} 
            provider={PROVIDER_DEFAULT}
            initialRegion={{
                latitude: -5.20559,
                longitude: -37.33444,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}>
                <Marker 
                coordinate={{
                    latitude: -5.20559,
                    longitude: -37.33444,
                }}
                title="Passageiro"
                description="Mossoró/RN"
                />
        </MapView>
        <View style={styles.footer}>
                <View style={styles.footerText}>
                    <Text>Encontre a sua carona</Text>
                </View>
                <View style={styles.footerFields}>
                    <Text>Origem</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
                <View style={styles.footerFields}>
                    <Text>Destino</Text>
                    <TextInput style={styles.input}></TextInput>
                </View>
        </View>

        <MyButton text="ACEITAR" theme=""></MyButton>

    </View>

}

export default RideDetail;