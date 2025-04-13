declare module 'json2csv' {
  export interface ParserOptions {
    fields?: string[];
    delimiter?: string;
    eol?: string;
    header?: boolean;
    quote?: string;
    escapedQuote?: string;
    withBOM?: boolean;
  }

  export class Parser<T = any> {
    constructor(options?: ParserOptions);
    parse(data: T[]): string;
  }

  export function parse<T = any>(data: T[], options?: ParserOptions): string;
}