import MyButton from "../../components/mybutton/mybutton";
import { Text, View } from "react-native";
import MapView, {PROVIDER_DEFAULT} from "react-native-maps";
import { styles } from "./passenger.style.js";
import { useState } from "react";

function Passenger(props){
    const [myLocation, setMyLocation] = useState(null);
    
    return <View style={styles.container}>

        <MapView style={styles.map} provider={PROVIDER_DEFAULT}></MapView>
        <MyButton text="CONFIRMAR"></MyButton>

    </View>

}

export default Passenger;