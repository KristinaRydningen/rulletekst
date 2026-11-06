import type { SerializedEditorState } from "@payloadcms/richtext-lexical/lexical";
import { RichText } from "@payloadcms/richtext-lexical/react";

export type ArticleContentProps = {
  title: string;
  subtitle: string;
  articleText: SerializedEditorState;
};

export default function ArticleContent({
  title,
  subtitle,
  articleText,
}: ArticleContentProps) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <RichText data={articleText} />
    </>
  );
}
