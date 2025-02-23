import { TouchableOpacity } from "react-native";
import { styles } from "./mybutton.style"

function MyButton(){
    return <TouchableOpacity style={styles.btnYellow}>
        <Text style={styles.textDark}>CONFIRMAR</Text>
    </TouchableOpacity>
}

export default MyButton;