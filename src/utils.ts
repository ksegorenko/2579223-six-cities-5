function getRatingWidth(rating: number): string {
  const result = (rating * 100) / 5;
  return `${result}%`;
}

function getStarTitle(star: number): string {
  switch (star) {
    case 5: return 'perfect';
    case 4: return 'good';
    case 3: return 'not bad';
    case 2: return 'badly';
    case 1: return 'terribly';
    default: return '';
  }
}

export { getRatingWidth, getStarTitle };
