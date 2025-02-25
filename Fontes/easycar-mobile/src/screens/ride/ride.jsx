import { FlatList, Text, TouchableOpacity, View, Image } from "react-native";
import { styles } from "./ride.style.js"
import { json_rides } from "../../constants/dados.js"
import icons from "../../constants/icons.js";

function Ride(props){
    return <View style={styles.container}>

        <FlatList 
            data={json_rides}
            keyExtractor={(ride) => ride.ride_id}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) =>{
                return <TouchableOpacity style={styles.ride}>
                    <View style={styles.containerName}>
                        <Image source={icons.car} style={styles.car}></Image>
                        <Text style={styles.name}>{item.passenger_name}</Text>
                    </View>
                    <Text style={styles.andress}>Origem: {item.pickup_address}</Text>
                    <Text style={styles.andress}>Destino: {item.dropoff_address}</Text>
                </TouchableOpacity>
            }}
        />
        
    </View>
}

export default Ride;