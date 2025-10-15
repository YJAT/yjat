// 將「2025年09月24日」轉換為「2025-09-24」
export default function convertToISO(dateString: string): string {
  const match = dateString.match(/(\d{4})年(\d{2})月(\d{2})日/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }

  return dateString.replace('年', '-').replace('月', '-').replace('日', '');
}
