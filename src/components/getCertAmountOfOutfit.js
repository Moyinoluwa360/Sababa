export default function getCertAmountOfOutfit(array, count) {
    if (count > array.lenght) {
      throw new Error('Count cannot be greater than array length');
    }
    
    const NumberOfOutfitNeededArr = [];
    
    for (let i = 0; i < 5; i++){
      NumberOfOutfitNeededArr.push(array[i])
    }
    
    return NumberOfOutfitNeededArr
  }