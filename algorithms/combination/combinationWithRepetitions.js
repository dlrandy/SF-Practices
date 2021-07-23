export default function combineWithRepetitions(comboOptions, comboLength) {
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }
  const combos = [];
  comboOptions.forEach((currentOption, opotionIndex) => {
    const smallerCombos = combineWithRepetitions(
      comboOptions.slice(opotionIndex),
      comboLength - 1
    );
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption, ...smallerCombo]);
    });
  });

  return combos;
}
