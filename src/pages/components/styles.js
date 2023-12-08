import styled from "styled-components";

export const SwipeView = styled.View`
flex: 1;
justify-content: center;
align-items: center;

`;

export const SwipeImage = styled.Image`
width:320px;
height: 430px;
border-radius: 15px;
`;

export const ImageTitle = styled.Text`
color: #fff;
font-weight: bold;
font-size: 28px;
position: absolute;
z-index: 2;
bottom:20px;

`;

export const SwipeButton = styled.TouchableOpacity`
flex-direction: column;
align-items: center;
`;

export const Title = styled.Text`
position: absolute;
bottom: 30px;
color: #000;
left: 30px;
font-size: 25px;
font-weight: bold;
`;

export const Subtitle = styled.Text`
position: absolute;
bottom: 60px;
left: 30px;
color: #fff;
font-size: 15px;
font-weight: 500;
`;



// ScrollPlayers Styles
export const Button = styled.TouchableOpacity`
justify-content: center;
align-items: center;
margin:10px;
`;

export const PlayerImage = styled.Image`
margin-top:5px;
margin-bottom: 10px;
`;

export default styled;