export default function combineWithoutRepetitions(comboOptions, comboLength) {
  if (comboLength == 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  const combos = [];
  comboOptions.forEach((comboOption, comboIndex) => {
    const smallerComboOptions = combineWithoutRepetitions(
      comboOptions.slice(comboIndex + 1),
      
      
      comboLength - 1

    );
    smallerComboOptions.forEach((smallerComboOption) => {
      combos.push([comboOption, ...smallerComboOption]);
    });
  });
  return combos;
}
