import { Text, Image, ImageBackground, TextInput, TouchableOpacity } from "react-native";
import icons from "../../constants/icons.js"
import MyButton from "../../components/mybutton/mybutton";
import { styles } from "./login.style.js";

function Login(props){

    function OpenHome(){
        props.navigation.navigate("home");
    }

    return <ImageBackground source={icons.bg} style={styles.bg}>
        <Image source={icons.logo} style={styles.logo}></Image>

        <Text style={styles.text}>Login</Text>
        <TextInput style={styles.input} placeholder="Login"></TextInput>
        <Text style={styles.text}>Senha</Text>
        <TextInput style={styles.input} placeholder="Senha"></TextInput>


        <MyButton text="ENTRAR" onPress={OpenHome}></MyButton>
        <Text style={styles.newpassword}>Esqueci minha senha</Text>

    </ImageBackground>

}

export default Login;