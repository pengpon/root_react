export const calculateContentStats = (content = "") => {
  if (!content) return { wordCount: 0, readingTime: 0 };

  const plainText = content.replace(/<[^>]*>/g, "");

  // 總字數, 中文字算1個, 英文單字空格分隔算1個
  const chineseChars = (plainText.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (plainText.match(/[a-zA-Z0-9-]+/g) || []).length;
  const wordCount = chineseChars + englishWords;

  // 每分鐘閱讀200字計算
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  return { wordCount, readingTime };
};