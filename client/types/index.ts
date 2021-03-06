// Store
export interface RootState {
  info: InfoState;
  pages: PagesState;
  posts: PostsState;
}

export interface Image {
  url: string;
}

export interface Info {
  _id: string;
  phone: string;
  email: string;
  address: string;
  addresslink: string;
}

export interface InfoState {
  info?: Info;
}

export interface Page {
  _id: string;
  slug: string;
  seotitle: string;
  seodescription: string;
  seokeywords: string;
  title_ru: string;
  title_en: string;
  subtitle_ru: string;
  subtitle_en: string;
  content_ru: string;
  content_en: string;
}

export interface PagesState {
  mainPage: Page;
  postsPage: Page;
}

export interface Post {
  _id: string;
  createdAt: string;
  slug: string;
  title_ru: string;
  title_en: string;
  content_ru: string;
  content_en: string;
  previewimage: Image;
  image: Image;
}

export interface PostsState {
  posts?: Array<Post>;
  postsTotalCount?: number;
}

export interface SeoState {
  seotitle: string;
  seodescription: string;
  seokeywords: string;
}

export interface PostPage {
  _id: string;
  slug: string;
  createdAt: string;
  seotitle: string;
  seodescription: string;
  seokeywords: string;
  title_ru: string;
  title_en: string;
  content_ru: string;
  content_en: string;
  previewimage: Image;
  image: Image;
}

export interface PostPageState {
  postPage: PostPage;
}
