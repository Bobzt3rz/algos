export function isAnagram(s: string, t: string): boolean {
  const sMap = new Map<string, number>();
  const tMap = new Map<string, number>();
  const mapArray = [sMap, tMap];

  if (s.length !== t.length) return false;

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < s.length; j++) {
      const selection = i == 0 ? s : t;
      const num = mapArray[i].get(selection[j]);
      if (num) {
        mapArray[i].set(selection[j], num + 1);
      } else {
        mapArray[i].set(selection[j], 1);
      }
    }
  }

  const keys = sMap.keys();

  for (let i = 0; i < s.length; i++) {
    const key = keys.next().value;
    if (sMap.get(key) !== tMap.get(key)) return false;
  }
  return true;
}
