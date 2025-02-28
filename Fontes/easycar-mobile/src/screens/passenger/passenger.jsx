import MyButton from "../../components/mybutton/mybutton";
import { ActivityIndicator, Alert, Text, TextInput, View } from "react-native";
import MapView, {Marker, PROVIDER_DEFAULT} from "react-native-maps";
import { styles } from "./passenger.style.js";
import { useEffect, useState } from "react";
import { getCurrentPositionAsync, requestForegroundPermissionsAsync, reverseGeocodeAsync } from "expo-location";

function Passenger(props){
    const userId = 1;

    const [myLocation, setMyLocation] = useState({
    
    });

    const [title, setTitle] = useState("");

    const [pickupAddress, setPickupAddress] = useState("");

    const [dropoffAddress, setDropAddress] = useState("");

    async function RequestPermissionAndGetLocation(){

        const {granted} = await requestForegroundPermissionsAsync();

        if(granted == true){
            const currentPosition = await getCurrentPositionAsync();

            if(currentPosition.coords){
                return currentPosition.coords
            } else {
                return {};
            }

        } else {
            return {};
        }

    }

    async function RequestAddressName(lat, long){
        const response = await reverseGeocodeAsync({
            latitude: lat,
            longitude: long
        });

        if(response[0].street && response[0].streetNumber && response[0].district){
            setPickupAddress(response[0].street + ", " +
                response[0].streetNumber + " - " + 
                response[0].district); 
        }
    }

    async function LoadScreen(){

        //Busca dados de corrida aberta na API
        const response = await RequestRideFromUser();

        if(!response.ride_id){
            //Solicitar permissão de localização ao GPS
            const location = await RequestPermissionAndGetLocation();

            if(location.latitude){
                setTitle("Encontre a sua carona agora");
                setMyLocation(location);
                RequestAddressName(location.latitude, location,longitude);
            } else {
                Alert.alert("Não foi possível obter sua localização!")
            }

        } else {

        }

    }

    async function AskForRide(){
        const json = { 
            passenger_id: 1,
            pickup_address: pickupAddress,
            dropoff_address: dropoffAddress,
            pickup_latitude: myLocation.latitude,
            pickup_longitude: myLocation.longitude,
        }
        console.log("Post para servidor: ", json);
        props.navigation.goBack(Alert.alert("Carona solicitada com sucesso!"));
        
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
        {myLocation.latitude ? <>
            <MapView 
            style={styles.map} 
            provider={PROVIDER_DEFAULT}
            initialRegion={{
                latitude: myLocation.latitude,
                longitude: myLocation.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}>
                <Marker 
                coordinate={{
                    latitude: myLocation.latitude,
                    longitude: myLocation.longitude,
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
                    <TextInput 
                        style={styles.input} 
                        value={pickupAddress} 
                        onChangeText={(text) => setPickupAddress(text)}>
                    </TextInput>
                </View>
                <View style={styles.footerFields}>
                    <Text>Destino</Text>
                    <TextInput 
                        style={styles.input}
                        value={dropoffAddress}
                        onChangeText={(text) => setDropAddress(text)}>
                    </TextInput>
                </View>
            </View>

            <MyButton text="CONFIRMAR" theme="default" onClick={AskForRide}></MyButton>
        </> 
        
        : 
        <View style={styles.loading}>
            <ActivityIndicator size="large"></ActivityIndicator>
            <Text style={styles.textLoading}>Carregando localização...</Text>
        </View>
        }

    </View>

}

export default Passenger;