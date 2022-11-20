// three letters?
// so bad lol
export function groupAnagrams(strs: string[]): string[][] {
  // string to map of character to frequency
  const strsMap = new Map<string, Map<string, number>>();
  strs.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      const charMap = strsMap.get(str);
      if (!charMap) {
        const newCharMap = new Map<string, number>();
        newCharMap.set(str[i], 1);
        strsMap.set(str, newCharMap);
      } else {
        const strFreq = charMap.get(str[i]);
        if (strFreq === undefined) {
          charMap.set(str[i], 1);
        } else {
          charMap.set(str[i], strFreq + 1);
        }
      }
    }
  });
  const out: string[][] = [];
  const addedMap = new Set<string>();
  strs.forEach((str, index) => {
    const subOut: string[] = [];
    if (!addedMap.has(str)) subOut.push(str);
    addedMap.add(str);
    const charMap = strsMap.get(str);
    const nextCharMap = strsMap.get(strs[index + 1]);

    if (charMap && nextCharMap) {
      const charMapKeys = charMap.keys();
      let isAnagram = false;
      for (let j = 0; j < charMap.size; j++) {
        const key = charMapKeys.next().value as string | undefined;
        if (key && charMap.get(key) === nextCharMap.get(key)) isAnagram = true;
      }
      if (isAnagram && !addedMap.has(strs[index + 1]))
        subOut.push(strs[index + 1]);
    }

    strsMap.delete(str);
    out.push(subOut);
  });
  return out;
}
