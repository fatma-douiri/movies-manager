export const formatNumber = (num: number): string => {
  if (num > 1000) {
    return `${Math.floor(num / 1000)}K`;
  } else {
    return num.toString();
  }
};
