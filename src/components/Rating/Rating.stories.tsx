import React, {useState} from 'react';
import {Story, Meta} from '@storybook/react/types-6-0';
import {Rating, RatingValueType,} from "./Rating";


export default {
    title: 'Rating stories',
    comment: Rating
}

export const EmptyRating = () => <Rating value={0} onClick={x => x}/>
export const Rating1 = () => <Rating value={1} onClick={x => x}/>
export const Rating2 = () => <Rating value={2} onClick={x => x}/>
export const Rating3 = () => <Rating value={3} onClick={x => x}/>
export const Rating4 = () => <Rating value={4} onClick={x => x}/>
export const Rating5 = () => <Rating value={5} onClick={x => x}/>

export const RatingChanging = () => {
    const [rating, seyRating] = useState<RatingValueType>(0)
    return <Rating value={rating} onClick={seyRating}/>
}