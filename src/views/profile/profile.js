import * as React from "react";
import { View, Text, TouchableOpacity} from "react-native";
import { Avatar, Icon, TextInput } from 'react-native-paper';
import { styles } from "./style_profile";

export function telaMeuPerfil(){
    return(
        <View style={styles.container}>
            <View style={styles.container_image_title}>
                <Text style={styles.title}>Perfil</Text>
                <Avatar.Image size={170} source={require('../../assets/avatar.png')}/>
                <Text style={styles.name}>Nome</Text>
            </View>
            <View style={styles.container_main}>
                <TouchableOpacity>
                    <View style={styles.container_text}> 
                        <Icon source={'account-edit'} size={40}/>
                        <Text style={styles.text}>Editar perfil</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.container_text}> 
                        <Icon source={'history'} size={40}/>
                        <Text style={styles.text}>Histórico de consultas</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.container_text}> 
                        <Icon source={'exit-to-app'} size={40}/>
                        <Text style={styles.text}>Sair</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
