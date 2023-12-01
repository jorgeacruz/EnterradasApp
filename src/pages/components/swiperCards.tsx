import React from "react";
import { StyleSheet, View, Text } from 'react-native'
import { SwipeView, SwipeImage, SwipeButton, ImageTitle, Subtitle} from './styles';
import  Swiper from "react-native-swiper";


export default function SwiperCards(){

    return(
        <View>
          
        <Swiper autoplay={false} style={styles.swp} showsPagination={false} autoplayTimeout={6}>

                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play1.png')} />
                        <ImageTitle>Michael Jordan</ImageTitle>
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play2.png')}/>
                        <ImageTitle>Lebron James</ImageTitle>
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play3.png')}/>
                        <ImageTitle>Kirie Irving</ImageTitle>
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play4.png')}/>
                        <ImageTitle>Stephen Curry</ImageTitle>
                    </SwipeButton>
                </SwipeView>
        </Swiper>
                
        </View>
    )
}

const styles = StyleSheet.create({
    swp:{
        height:430
    }
})