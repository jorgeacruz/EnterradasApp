import React from "react";
import { StyleSheet } from 'react-native'
import { SwipeView, SwipeImage, SwipeButton, Title, Subtitle} from './styles';
import  Swiper from "react-native-swiper";

export default function SwiperCards(){


    return(
        <Swiper autoplay={false} style={styles.swp} showsPagination={false}>

                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play1.png')}/>
                        <Subtitle>Chicago Bulls</Subtitle>
                        <Title>Michael Jordan</Title>
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play2.png')}/>
                        <Subtitle>Los Angeles Lakers</Subtitle>
                        <Title>Lebron James</Title>
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play3.png')}/>
                        <Subtitle>Boston Celtics</Subtitle>
                        <Title>Kyrie Irving</Title>
                    </SwipeButton>
                </SwipeView>
                <SwipeView>
                    <SwipeButton>
                        <SwipeImage source={require('../../images/cards/play4.png')}/>
                        <Subtitle>Boston Celtics</Subtitle>
                        <Title>Kyrie Irving</Title>
                    </SwipeButton>
                </SwipeView>


        </Swiper>
    )
}

const styles = StyleSheet.create({
    swp:{
        height:460
    }
})