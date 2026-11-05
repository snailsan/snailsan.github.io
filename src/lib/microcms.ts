import type { MicroCMSQueries, MicroCMSListContent, MicroCMSImage, MicroCMSContentId } from "microcms-js-sdk";
import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

export type Information = {
  content: string;
};

export type Tag = {
  name: string;
} & MicroCMSContentId;;

export type Blog = {
  id: string;
  title: string;
  description: string;
  bumper: MicroCMSImage;
  content: string;
  tags: Tag[];
} & MicroCMSListContent;

export const getBlogs = async (queries?: MicroCMSQueries) => {
  return await client.getList<Blog>({ endpoint: "articles", queries });
};

export const getBlogDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  return await client.getListDetail<Blog>({
    endpoint: "articles",
    contentId,
    queries,
  });
};

export const getTags = async (queries?: MicroCMSQueries) => {
  return await client.getList<Tag>({ endpoint: "tags", queries });
};

export const get = async (id: string, queries?: MicroCMSQueries) => {
  return await client.getObject<Information>({
    endpoint: id,
    queries,
  });
}