export type Block =
  | {
      type: "hero";
      mascot?: boolean;
      eyebrow?: string;
      title: string;
      subtitle?: string;
    }
  | { type: "heading"; level: number; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | { type: "callout"; variant: "info" | "warning" | "tip"; title?: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "code"; language?: string; text: string }
  | { type: "divider" };

export type Section = {
  id: string;
  title: string;
  blocks: Block[];
};

export type IdlMeta = {
  id: string;
  title: string;
  version: string;
  language: string;
  description?: string;
};

export type IdlDocument = {
  $schema?: string;
  meta: IdlMeta;
  structure: Section[];
};
