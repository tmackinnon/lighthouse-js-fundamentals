function smartGarbage(trash, bins) {
  if (trash === 'waste') {
    bins.waste += 1;
  } else if (trash === 'recycling') {
    bins.recycling += 1;
  } else if (trash === 'compost') {
    bins.compost += 1;
  } return bins;
}

console.log(smartGarbage('waste', { waste: 4, recycling: 2, compost: 5 }));
