import type { ISbRichtext } from "@storyblok/js";

interface IStoryblokAsset {
  id: number;
  alt: string;
  name: string;
  focus: string;
  title: string;
  source: string;
  filename: string;
  copyright: string;
  fieldtype: "asset";
  meta_data: unknown;
}

export interface IGalery {
  name: string;
  preview: IStoryblokAsset;
  description?: ISbRichtext;
  images: IStoryblokAsset[];
}
