import { MovieContainer,  Title, Section, MovieInfo, SectionTitle, TextElem, Image, ImgContainer } from "./MovieCard.styled"
import formatDate from "util/funcFormatDate";
import photo from 'not-found-image.jpg';
const EP_IMG= 'https://image.tmdb.org/t/p/w500';

export const Card = ({ item }) => {
    console.log(item);
    return <MovieContainer>
             <ImgContainer>
                <Image src={item.backdrop_path ? `${EP_IMG}${item.backdrop_path}` : photo}></Image>
            </ImgContainer>  
            <MovieInfo>
                <Title>{item.title}</Title>
                 <Section>
                    <SectionTitle>Release:</SectionTitle>
                    <TextElem>{item.release_date ? formatDate(item.release_date): null}</TextElem>
                </Section>
                 <Section>
                    <SectionTitle>Country:</SectionTitle>
                    <TextElem>{item.production_countries ? item.production_countries.map(genre => genre.name).join(', ') : null}</TextElem>
                </Section>
                <Section>
                    <SectionTitle>Genres:</SectionTitle>
                    <TextElem>{item.genres ? item.genres.map(genre => genre.name).join(', ') : null}</TextElem>
                 </Section>
    
                {item.vote_average > 0  &&  <Section>
                    <SectionTitle>Rating:</SectionTitle>
                    <TextElem> {item.vote_average.toFixed(1)}</TextElem>
                </Section>}
               
                
                    <SectionTitle>Overview</SectionTitle>
                    <TextElem>{item.overview}</TextElem>
                
            </MovieInfo> 
            </MovieContainer>
}
