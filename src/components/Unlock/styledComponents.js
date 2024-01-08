// Style your elements here
import styled from 'styled-components'
import {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
font-family:"Roboto"
;`

export const AppContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  background-color:#161617;
`
export const AppImage = styled.img`
 width: 150px; 
  height: auto; 
  margin-bottom: 20px;
`
export const AppStatus = styled.p`
  color: ${({theme}) => (theme.isLocked ? 'red' : 'green')};
  font-family:"Roboto";
`

export const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
`
