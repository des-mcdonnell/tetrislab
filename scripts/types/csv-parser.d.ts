declare module 'csv-parser' {
  import { Readable } from 'stream';

  interface CsvParserOptions {
    separator?: string;
    headers?: boolean | string[];
    skipLines?: number;
    mapHeaders?: (args: { header: string; index: number }) => string | null;
    mapValues?: (args: { header: string; index: number; value: string }) => any;
  }

  function csvParser(options?: CsvParserOptions): Readable;

  export = csvParser;
}