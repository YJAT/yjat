import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '關於',
  description: '關於台灣青年法律人協會',
};

export default function AboutPage() {
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-bold mb-8">關於台灣青年法律人協會</h1>
      
      <div className="space-y-6">
        <p>
         待擴充...
        </p>
      </div>
    </div>
  );
}
