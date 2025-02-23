import { Text, Image, ImageBackground, TouchableOpacity } from "react-native";
import icons from "../../constants/icons.js"
import  { styles } from "./home.style.js"

function Home(){
    return <ImageBackground source={icons.bg} resizeMode="cover" style={styles.bg}>

        <Image source={icons.logo} style={styles.logo}></Image>

        <TouchableOpacity style={styles.btn}>
            <Image source={icons.passenger} style={styles.img}></Image>
            <Text style={styles.title}>Passageiro</Text>
            <Text style={styles.text}>Encontre uma carona para você</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn}>
            <Image source={icons.driver} style={styles.img}></Image>
            <Text style={styles.title}>Motorista</Text>
            <Text style={styles.text}>Ofereça carona em seu carro</Text>
        </TouchableOpacity>

    </ImageBackground>    
}

export default Home;