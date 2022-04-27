export enum SocialMedia {
  YOUTUBE = 'youtube',
  GITHUB = 'github',
  LINKEDIN = 'linkedin',
}

interface URLS {
  youtube: string;
  github: string;
  linkedin: string;
}

export const SocialMediaURLS: URLS = {
  [SocialMedia.GITHUB]: 'https://github.com/cjosue15',
  [SocialMedia.YOUTUBE]:
    'https://www.youtube.com/channel/UCq50mvqUjA5Ng6uJo_S9BRg',
  [SocialMedia.LINKEDIN]:
    'https://www.linkedin.com/in/carlos-josue-morales-navarro/',
};
