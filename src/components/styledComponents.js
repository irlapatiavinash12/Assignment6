import styled from 'styled-components'

export const MainContainer = styled.div`
height:100vh;
background-color:#223a5f;
display:flex;
flex-direction:column;
align-items:center;
padding:20px;
`

export const ContentContainer = styled.div`
width:80%;
display:flex;
flex-direction:column;
justify-content:center;`

export const ScoreSection = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
padding:10px;
border-radius:6px;
border:1px solid #ffffff;
background-color:transparent;`

export const ItemList = styled.div`
width:100px;
font-size:10px;
display:flex;
flex-direction:column;
`

export const Item = styled.h1`
list-style-type:none;
color:#ffffff;
font-family:"Bree Serif";
font-weight:400;`

export const UpdationContainer = styled.div`
width:100px;
background-color:#ffffff;
border-radius:6px;
display:flex;
flex-direction:column;
align-items:center;
color:#223a5f;
font-weight:bold;
font-family:"Bree Serif";
`

export const ScoreText = styled.p`
font-size:20px;
color:#223a5f;
font-family:"Roboto";
font-weight:bold;
margin-top:0px;
margin-bottom:0px;`

export const ImagesList = styled(ItemList)`
flex-wrap:wrap;
flex-direction:row;
padding:20px;
margin-top:20px;
justify-content:center;
width:60%;
margin-left:15%;
margin-top:20%;
`

export const ChoiceButton = styled.button`
border:none;
outline:none;
background-color:transparent;`

export const EachImage = styled.img`
height:150px;
width:150px;`

export const StylesButton = styled.button`
background-color:#ffffff;
font-family:"Bree Serif;
color:#223a5f;
font-weight:bold;
align-self:flex-end;
border:none;
outline:none;
align-self:end;
`

export const RulesView = styled.div`
diaplay:flex;
flex-direction:column;
background-color:#ffffff;
padding:20px;
`

export const ResponseContainer = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;`

export const SectionResult = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
background-color:aqua;`

export const PlayerElement = styled.div`
display:flex;
flex-direction:column;
color:#ffffff;
font-family"Roboto;
font-weight:bold;`

export const SpecificPlayer = styled.p`
color:#ffffff;
font-family:Roboto;
font-weight:bold;`

export const TextResult = styled.p`
font-family:Roboto;
font-weight:bold;
color:#ffffff;`

export const PlayAgainButton = styled(StylesButton)`
background-color:#ffffff;
font-family:"Bree Serif";
color:#223a5f;
border:none;
outline:none;
border-radius:6px;`
