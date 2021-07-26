export default function combineWithRepetitions(comboOptions, comboLength) {
 
  if (comboLength == 1) {
    return comboOptions.map(comboOption=> [comboOption]);
  }
  
  const combos = [];
  comboOptions.forEach((comboOption, comboIndex) => {
      
    const smallerComboOptions = combineWithRepetitions(comboOptions.slice(comboIndex), comboLength - 1);
    smallerComboOptions.forEach(smallerComboOption=>{
      combos.push([comboOption, ...smallerComboOption])
    })
  });
  return combos;
}
