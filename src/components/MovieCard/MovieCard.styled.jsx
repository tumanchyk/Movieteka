import styled from "@emotion/styled";

const MovieContainer = styled.div`
display: flex;
margin: 30px 0`

const ImgContainer = styled.div`
height: 350px;
min-width: 250px;
max-width: 300px;
`
const Image = styled.img`
display: block;
height: 100%;
width: 100%;
object-fit: cover;
`
const MovieInfo = styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
margin-left: 35px;
`
const Title = styled.h1`
font-size: 36px;
margin-bottom: 20px;
`
const Section = styled.div`
display: flex;
padding: 10px 0`


const SectionTitle = styled.h2`
font-weight: 600;
font-size: 20px;
margin-right: 10px;
&:not(:last-child){
margin-bottom: 10px;
}`

const TextElem = styled.p`
font-size: 20px;

&:not(:last-child){
margin-bottom: 10px;
}`

export {Title, Section, MovieInfo, SectionTitle, TextElem, MovieContainer, Image, ImgContainer}