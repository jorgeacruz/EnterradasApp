import React, { useEffect, useState} from "react";
import { FlatList, View, Text } from "react-native";
import { MainView,} from "./styles";
import { useNavigation } from "@react-navigation/native";

import apiNBA from "../api/api-NBA";

export default function Times(){
    // navigation
    const navigation = useNavigation();
    
    // Api NBA
    const [team, setTeam] = useState([]);
    useEffect(() => {

        async function loadTeam(){
            const response = await apiNBA.get('https://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams');
            console.log(response.data);
            setTeam(response.data)
        }

        loadTeam();

    },[])

    return(
        <MainView>
            <FlatList
            data={team}
            
            renderItem={({item}) => 
                <View>
                      <Text>sasas</Text>  
                </View>
            }
            />           
        </MainView>
    )
}