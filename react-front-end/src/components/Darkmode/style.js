import styled from 'styled-components';

const StyleSheet = styled.div`
background-color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("background") ? props.colors.background : "#121212") : "")} !important;
margin: -10px;
padding: 20px;
* {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("default") ?  props.colors.default : "#f0f0f0e5") : "")} !important;
}
h1 {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("h1") ? props.colors.h1 : "#a38cf8d8") : "")} !important;
}
h2 {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("h2") ? props.colors.h2 : "#a38cf8d8") : "")} !important;
}
h3{
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("h3") ? props.colors.h3 : "#f0f0f0e5") : "")} !important;
}
h4 {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("h4") ? props.colors.h4 : "#f0f0f0e5") : "")} !important;
}
h5 {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("h5") ? props.colors.h5 : "#f0f0f0e5") : "")} !important;
}
h6 {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("h6") ? props.colors.h6 : "#f0f0f0e5") : "")} !important;
}
p {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("p") ? props.colors.p : "#f0f0f0e5") : "")} !important;
}
blockquote {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("blockquote") ? props.colors.blockquote : "#f0f0f0e5") : "")} !important;
}
a {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("a") ? props.colors.a : "#e454f7") : "")} !important;
}
a:hover {
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("ahover") ? props.colors.ahover : "#7e0a8d") : "")} !important;
}
table {
  background-color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("tablebackground") ? props.colors.tablebackground : "#3838384d") : "")} !important;
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("tablecolor") ? props.colors.tablecolor : "#3838384d") : "")} !important;
}
table tr {
  background-color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("tabletr") ? props.colors.tabletr : "#121212f5") : "#f0f0f0e5")} !important;
}
code {
  background-color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("codebackground") ? props.colors.codebackground : "#784e85b2") : "")} !important;
  color: ${props => (props.mode==="dark" ? (props.colors.hasOwnProperty("code") ? props.colors.codebackground : "#f0f0f0e5") : "")} !important;
}
`
export default StyleSheet;