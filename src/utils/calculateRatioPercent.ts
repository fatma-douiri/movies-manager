export const calculateRatioPercent = (targetPart: number, otherPart: number): number => {
  const total = targetPart + otherPart;
  if (total === 0) return NaN;
  return (targetPart / total) * 100;
};
