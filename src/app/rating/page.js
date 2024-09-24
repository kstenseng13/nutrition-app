import Link from 'next/link';
//import styles from './Rating.module.css';
import RatingComp from '../components/ratingcomp';

export default function Rating() {
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 ">

            <h2>This is the Food Rating page.</h2>
            <RatingComp />

        </div>
    );
}