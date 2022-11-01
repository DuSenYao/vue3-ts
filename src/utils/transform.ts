/**
 * 将数字转换为中文格式
 * @param {Number} number 数字
 */
export function transformNumberToChineseFormat(number: number) {
  const CHINESE_NUMBER = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
  if (number === 10) return CHINESE_NUMBER[number];
  return [...number.toString()].reduce((pre, cur) => pre + CHINESE_NUMBER[cur as unknown as number], '');
}
