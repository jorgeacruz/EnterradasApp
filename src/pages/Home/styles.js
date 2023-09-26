import styled from 'styled-components';

export const MainView = styled.View`
flex:1;
justify-content: center;
align-items: center;
background: #000;
`;

export const FrontView = styled.View`
flex: 1;
position:absolute;
justify-content: space-between;
padding-bottom: 60px;
padding-top: 120px;
align-items: center;
width: 100%;
height: 100%;
`;

export const Button = styled.TouchableOpacity`
width: 80%;
height: 40px;
justify-content: center;
align-items: center;
background: #FFFF00;
border-radius: 3px;
`;

export const Link = styled.TouchableOpacity``;

export const Logo = styled.Image`
width: 160px;
height: 160px;
`;

export const Text = styled.Text`
color: #fff;
`;
 export const Title = styled.Text`
 font-size: 20px;
 margin-top: 10px;
 margin-bottom: 10px;
 font-weight: bold;
 color: #fff;
 `;
//Inputs
export const Inputs = styled.TextInput`
border:1px solid #fff;
border-radius: 3px;
width: 80%;
height: 40px;
text-align: center;
margin-top: 10px;
color: #fff;
`;
export default styled;
