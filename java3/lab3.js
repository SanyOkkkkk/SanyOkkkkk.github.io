export function getDecimal(num) {
    if (Math.trunc(num) == num) {
        return 0;
    }
    else if (num < 0) {
        return num - (-Math.ceil(-num));
    }
    if (num > 1) {
        return +(num - Math.trunc(num)).toFixed(2);
    }
}
export function ucFirst(str){
    if (!str) return str;
        return str[0].toUpperCase() + str.slice(1);
}
export function checkSpam(str){
    let lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
export function  truncate(str, maxlength){
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
export function  camelize(str){
    return str
    .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
    .map(
      // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
      // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
}
export function  fibs(n){
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
export function  arrReverseSorted(arr){
    return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
export function  unique(arr){
    return Array.from(new Set(arr));
}