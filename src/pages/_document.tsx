import { Head, Html, Main, NextScript } from 'next/document';

export default function CustomDocument() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-slate-100 text-slate-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
