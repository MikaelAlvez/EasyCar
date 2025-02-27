import MyButton from "../../components/mybutton/mybutton";
import { Text, TextInput, View } from "react-native";
import MapView, {Marker, PROVIDER_DEFAULT} from "react-native-maps";
import { styles } from "./passenger.style.js";
import { useEffect, useState } from "react";

function Passenger(props){
    const [myLocation, setMyLocation] = useState({
        latitude: 20,
        longitude: 20
    });

    const [title, setTitle] = useState("");

    async function LoadScreen(){
        const response = await RequestRideFromUser();

        if(!response.ride_id){
            setTitle("Encontre a sua carona agora");
        } else {

        }
    }

    async function RequestRideFromUser(){
        const response = {
            /*ride_id: 1,
            passenger_user_id: 1,
            passenger_name: "Carlos Alberto de Nobrega",
            passenger_phone: "(11)1111-1111",
            pickup_address: "Rua A - Brahma",
            pickup_date: "2025-02-19",
            pickup_latitute: "-5.20559",
            pickup_longitude: "-37.33444",
            dropoff_address: "Shopping popular",
            status: "Pendente",
            driver_user_id: null,
            driver_name: null,
            driver_phone: null*/
        }
        return response;
    }

    useEffect(() => {
        LoadScreen();
    }, [])

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
                    <Text>{title}</Text>
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

        <MyButton text="CONFIRMAR" theme="default"></MyButton>

    </View>

}

export default Passenger;