class NutritionLabel {
    constructor({
      servingSize = "---",
      servingsPerContainer = "---",
      calories = "---",
      totalFat = "---",
      saturatedFat = "---",
      transFat = "---",
      cholesterol = "---",
      sodium = "---",
      totalCarbohydrate = "---",
      dietaryFiber = "---",
      totalSugars = "---",
      addedSugars = "---",
      protein = "---",
      vitaminD = "---",
      calcium = "---",
      iron = "---",
      potassium = "---"
    } = {}) {
      this.servingSize = servingSize;
      this.servingsPerContainer = this.validateNumber(servingsPerContainer);
      this.calories = this.validateNumber(calories);
      this.totalFat = this.validateNumber(totalFat);
      this.saturatedFat = this.validateNumber(saturatedFat);
      this.transFat = this.validateNumber(transFat);
      this.cholesterol = this.validateNumber(cholesterol);
      this.sodium = this.validateNumber(sodium);
      this.totalCarbohydrate = this.validateNumber(totalCarbohydrate);
      this.dietaryFiber = this.validateNumber(dietaryFiber);
      this.totalSugars = this.validateNumber(totalSugars);
      this.addedSugars = this.validateNumber(addedSugars);
      this.protein = this.validateNumber(protein);
      this.vitaminD = this.validateNumber(vitaminD);
      this.calcium = this.validateNumber(calcium);
      this.iron = this.validateNumber(iron);
      this.potassium = this.validateNumber(potassium);
    }
  
    validateNumber(value) {

      let num = Number(value);

      if (Number.isNaN(num) || num < 0) {
        return "---";
      }

      if (num === 0) {
        return 0;
      }

      //limit to uner 1000
      num =  Math.min(num, 9999);

      if (num > 999) {
        num = num.toFixed(0);
      }
      else if (num < 100) {
        num = num.toFixed(2);
      }
      else {
        num = num.toFixed(1);
      }

      //remove trailing zeros
      num = num.replace(/0+$/, '');

      //remove trailing decimal point
      num = num.replace(/\.$/, '');

      return num;

    }
  
    getData() {
      return {
        servingSize: this.servingSize,
        servingsPerContainer: this.servingsPerContainer,
        calories: this.calories,
        totalFat: this.totalFat,
        saturatedFat: this.saturatedFat,
        transFat: this.transFat,
        cholesterol: this.cholesterol,
        sodium: this.sodium,
        totalCarbohydrate: this.totalCarbohydrate,
        dietaryFiber: this.dietaryFiber,
        totalSugars: this.totalSugars,
        addedSugars: this.addedSugars,
        protein: this.protein,
        vitaminD: this.vitaminD,
        calcium: this.calcium,
        iron: this.iron,
        potassium: this.potassium
      };
    }
  }
  
  export default NutritionLabel;
  