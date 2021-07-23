export default function combineWithoutRepetitions(comboOptions, comboLength) {
  if (comboLength === 1) {
    return comboOptions.map((comboOption) => [comboOption]);
  }

  const combos = [];
  comboOptions.forEach((currentOption, opotionIndex) => {
    const smallerCombos = combineWithoutRepetitions(
      comboOptions.slice(opotionIndex + 1),
      comboLength - 1
    );
    smallerCombos.forEach((smallerCombo) => {
      combos.push([currentOption, ...smallerCombo]);
    });
  });

  return combos;
}
