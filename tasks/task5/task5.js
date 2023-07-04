const countVowels = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
  let count = 0;

  for (let i = 0; i < str.length; i++) {
      if (vowels.includes(str[i].toLowerCase())) {
          count++;
      }
  }