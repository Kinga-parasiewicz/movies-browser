import star from "../../assets/star.svg";
import { Data, NumericalRating, Star, Wrapper } from "./styled";

export const Rating = ({ rating, votes }) => (
    <Wrapper>
        <Star src={star}></Star>
        <NumericalRating>{rating}</NumericalRating>
        <Data>/ 10</Data>
        <Data>{votes} votes</Data>
    </Wrapper>
);