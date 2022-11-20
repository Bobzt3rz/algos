// this is so bad lol, can be done in 1 loop

export function twoSum(nums: number[], target: number): number[] {
  // number to [index, [other index]]] map
  const map = new Map<number, [number, [number]]>();
  nums.forEach((num, index) => {
    const indexes = map.get(num);
    if (indexes) {
      map.set(num, [indexes[0], [index]]);
    } else {
      map.set(num, [index, [index]]);
    }
  });

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const secondTarget = target - num;
    const firstTargetItem = map.get(num);
    const secondTargetItem = map.get(secondTarget);
    if (
      secondTarget === num &&
      firstTargetItem &&
      firstTargetItem[1][0] !== i
    ) {
      return [i, firstTargetItem[1][0]];
    } else if (secondTargetItem !== firstTargetItem && secondTargetItem) {
      return [i, secondTargetItem[0]];
    }
  }
  return [];
}

export function twoSumV2(nums: number[], target: number): number[] {
  // number to index
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    const complementIndex = map.get(complement);
    if (complementIndex !== undefined) {
      return [i, complementIndex];
    }
    map.set(num, i);
  }
  return [];
}
