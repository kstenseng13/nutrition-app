import React from 'react';
import NutritionLabel from '../data/nutritionlabel';
import styles from './FoodDetails.module.css'; // Import the CSS module

const FoodDetails = ({ label }) => {

    if (!label) {
        return <div className={styles.error}>Nutrition data is not available.</div>;
    }

    const nutritionData = label.getData();

    return (
        <div className={styles.nutritionContainer}>
            <h1>Nutrition Facts</h1>
            <div className={styles.nutritionInfo}>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Serving size:</div>
                    <div className={styles.nutritionValue}>{nutritionData.servingSize}</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Servings per container:</div>
                    <div className={styles.nutritionValue}>{nutritionData.servingsPerContainer}</div>
                </div>

                <hr className={styles.divider} />

                
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Calories:</div>
                    <div className={styles.nutritionValue}>{nutritionData.calories}</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Total Fat:</div>
                    <div className={styles.nutritionValue}>{nutritionData.totalFat}g</div>
                </div>
                <div className={`${styles.nutritionRow} ${styles.indent}`}>
                    <div className={styles.nutritionTitle}>Saturated Fat:</div>
                    <div className={styles.nutritionValue}>{nutritionData.saturatedFat}g</div>
                </div>
                <div className={`${styles.nutritionRow} ${styles.indent}`}>
                    <div className={styles.nutritionTitle}>Trans Fat:</div>
                    <div className={styles.nutritionValue}>{nutritionData.transFat}g</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Cholesterol:</div>
                    <div className={styles.nutritionValue}>{nutritionData.cholesterol}mg</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Sodium:</div>
                    <div className={styles.nutritionValue}>{nutritionData.sodium}mg</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Total Carbohydrate:</div>
                    <div className={styles.nutritionValue}>{nutritionData.totalCarbohydrate}g</div>
                </div>
                <div className={`${styles.nutritionRow} ${styles.indent}`}>
                    <div className={styles.nutritionTitle}>Dietary Fiber:</div>
                    <div className={styles.nutritionValue}>{nutritionData.dietaryFiber}g</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Total Sugars:</div>
                    <div className={styles.nutritionValue}>{nutritionData.totalSugars}g</div>
                </div>
                <div className={`${styles.nutritionRow} ${styles.indent}`}>
                    <div className={styles.nutritionTitle}>Added Sugars:</div>
                    <div className={styles.nutritionValue}>{nutritionData.addedSugars}g</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Protein:</div>
                    <div className={styles.nutritionValue}>{nutritionData.protein}g</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Vitamin D:</div>
                    <div className={styles.nutritionValue}>{nutritionData.vitaminD}mcg</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Calcium:</div>
                    <div className={styles.nutritionValue}>{nutritionData.calcium}mg</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Iron:</div>
                    <div className={styles.nutritionValue}>{nutritionData.iron}mg</div>
                </div>
                <div className={styles.nutritionRow}>
                    <div className={styles.nutritionTitle}>Potassium:</div>
                    <div className={styles.nutritionValue}>{nutritionData.potassium}mg</div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
