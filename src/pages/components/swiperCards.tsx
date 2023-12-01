import React from "react";
import { StyleSheet, View } from 'react-native'
import { SwipeView, SwipeImage, SwipeButton, Title, Subtitle} from './styles';
import  Swiper from "react-native-swiper";


export default function SwiperCards(){

    return(
        <View>
        <Swiper autoplay={true} style={styles.swp} showsPagination={false} autoplayTimeout={6}>

                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play1.png')} />
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play2.png')}/>
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play3.png')}/>
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play4.png')}/>
                    </SwipeButton>
                </SwipeView>
        </Swiper>
        <Title>Enterradas Épicas</Title>
                
        </View>
    )
}

const styles = StyleSheet.create({
    swp:{
        height:450
    }
})