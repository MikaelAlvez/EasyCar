import { TouchableOpacity, Text } from "react-native";
import { styles } from "./mybutton.style"

function MyButton(props){
    return <TouchableOpacity style={styles.btnYellow}>
        <Text style={styles.textDark}>{props.text}</Text>
    </TouchableOpacity>
}

export default MyButton;