import { format, parse } from 'date-fns';

export default function convertToISO(dateString: string) {
  const date = parse(dateString, 'yyyy年MM月dd日', new Date());

  return format(date, 'yyyy-MM-dd');
}
