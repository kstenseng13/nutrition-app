"use client"; 

import React from 'react';
import FoodDetails from '../components/foodDetails';
import NutritionLabel from '../data/nutritionlabel';
import styles from './Details.module.css';

export default function Details() {

    const nutritionData = {
        servingSize: "1 cup (240ml)",
        servingsPerContainer: 2,
        calories: 250,
        totalFat: 8,
        saturatedFat: 3,
        transFat: 0,
        cholesterol: 30,
        sodium: 470,
        totalCarbohydrate: 31,
        dietaryFiber: 4,
        totalSugars: 5,
        addedSugars: 2,
        protein: 5,
        vitaminD: 2,
        calcium: 260,
        iron: 1,
        potassium: 235
    };

    const negativeData = {
        servingSize: "1 cup (240ml)",
        servingsPerContainer: -2,
        calories: -250,
        totalFat: -8,
        saturatedFat: -3,
        transFat: -0,
        cholesterol: -30,
        sodium: -470,
        totalCarbohydrate: -31,
        dietaryFiber: -4,
        totalSugars: -5,
        addedSugars: -2,
        protein: -5,
        vitaminD: -2,
        calcium: -260,
        iron: -1,
        potassium: -235
    };
    
    const veryLargeNumbers = {
        servingSize: "1 cup (240ml)",
        servingsPerContainer: 10000,
        calories: 10000,
        totalFat: 10000,
        saturatedFat: 10000,
        transFat: 10000,
        cholesterol: 10000,
        sodium: 10000,
        totalCarbohydrate: 10000,
        dietaryFiber: 10000,
        totalSugars: 10000,
        addedSugars: 10000,
        protein: 10000,
        vitaminD: 10000,
        calcium: 10000,
        iron: 10000,
        potassium: 10000
    };

    const nanData = {
        servingSize: "1 cup (240ml)",
        servingsPerContainer: NaN,
        calories: NaN,
        totalFat: NaN,
        saturatedFat: NaN,
        transFat: NaN,
        cholesterol: NaN,
        sodium: NaN,
        totalCarbohydrate: NaN,
        dietaryFiber: NaN,
        totalSugars: NaN,
        addedSugars: NaN,
        protein: NaN,
        vitaminD: NaN,
        calcium: NaN,
        iron: NaN,
        potassium: NaN
    };

    const veryLargeNegNumbers = {
        servingSize: "1 cup (240ml)",
        servingsPerContainer: -10000,
        calories: -10000,
        totalFat: -10000,
        saturatedFat: -10000,
        transFat: -10000,
        cholesterol: -10000,
        sodium: -10000,
        totalCarbohydrate: -10000,
        dietaryFiber: -10000,
        totalSugars: -10000,
        addedSugars: -10000,
        protein: -10000,
        vitaminD: -10000,
        calcium: -10000,
        iron: -10000,
        potassium: -10000
    };
    
    
    const defaultLabel = new NutritionLabel();
    const label = new NutritionLabel(nutritionData);
    const negativeLabel = new NutritionLabel(negativeData);
    const veryLargeLabel = new NutritionLabel(veryLargeNumbers);
    const nanLabel = new NutritionLabel(nanData);
    const veryLargeNegLabel = new NutritionLabel(veryLargeNegNumbers);

    return (
        <div>

            <h1 className={styles.centeredHeading}>Default Data</h1>
            <FoodDetails label={defaultLabel} />
            <br /><br />

            <h1 className={styles.centeredHeading}>Normal Data</h1>
            <FoodDetails label={label} />
            <br /><br />

            <h1 className={styles.centeredHeading}>Negative Data</h1>
            <FoodDetails label={negativeLabel} />
            <br /><br />

            <h1 className={styles.centeredHeading}>Very Large Numbers</h1>
            <FoodDetails label={veryLargeLabel} />
            <br /><br />

            <h1 className={styles.centeredHeading}>NaN Data</h1>
            <FoodDetails label={nanLabel} />
            <br /><br />

            <h1 className={styles.centeredHeading}>Very Large Negative Numbers</h1>
            <FoodDetails label={veryLargeNegLabel} />
            <br /><br />
        </div>

    );
};

