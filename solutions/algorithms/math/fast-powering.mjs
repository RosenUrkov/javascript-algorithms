export const fastPowering = (base, power) => {
  if (power === 1) {
    return base;
  }

  const halfPower = fastPowering(base, Math.floor(power / 2));
  return power % 2 === 0 ? halfPower * halfPower : base * halfPower * halfPower;
};
