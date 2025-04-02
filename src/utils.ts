function getRatingWidth(rating: number): string {
  const result = (rating * 100) / 5;
  return `${result}%`;
}

export { getRatingWidth };
