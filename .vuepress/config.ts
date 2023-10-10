import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";
import recoTheme from "vuepress-theme-reco";

export default defineUserConfig({
  title: "Lavyoung‘s Blog",
  description: "个人博客",
  base: '/LavyoungBlog/',
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
    author: "lavyoung1325",
    authorAvatar: "/head1.jpg",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      // "/docs/theme-reco/": [
      //   {
      //     text: "module one",
      //     children: ["home", "theme"],
      //   },
      //   {
      //     text: "module two",
      //     children: ["api", "plugin"],
      //   },
      // ],
    },
    navbar: [
      { text: "主页", link: "/" },
      { text: "目录", link: "/categories/qianduan/1/" },
      { text: "标签", link: "/tags/All/1/" },
      // {
      //   text: "Docs",
      //   children: [
      //     { text: "vuepress-reco", link: "/docs/theme-reco/theme" },
      //     { text: "vuepress-theme-reco", link: "/blogs/随笔/guide" },
      //   ],
      // },
    ],
    bulletin: {
      body: [
        {
          type: "text",
          content: `Hello， 大家好，我是Lavyoung`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "联系方式",
        },
        {
          type: "text",
          content: `
          <ul>
            <li>QQ：2034549297</li>
            <li>微信：C2034549297</li>
            <li>邮箱：2034549297@qq.com</li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "title",
          content: "GitHub",
        },
        {
          type: "text",
          content: `
          <ul>
            <li><a href="https://github.com/Lavigne-yang">Profile<a/></li>
            <li><a href="https://github.com/Lavigne-yang/Blog">Project<a/></li>
          </ul>`,
          style: "font-size: 12px;",
        },
        {
          type: "hr",
        },
        {
          type: "buttongroup",
          children: [
            // {
            //   text: "打赏",
            //   link: "/docs/others/donate.html",
            // },
          ],
        },
      ],
    },
    // commentConfig: {
    //   type: 'valie',
    //   // options 与 1.x 的 valineConfig 配置一致
    //   options: {
    //     // appId: 'xxx',
    //     // appKey: 'xxx',
    //     // placeholder: '填写邮箱可以收到回复提醒哦！',
    //     // verify: true, // 验证码服务
    //     // notify: true,
    //     // recordIP: true,
    //     // hideComments: true // 隐藏评论
    //   },
    // },
  }),
  head: [
    ['link', { rel: 'icon', href: '/LavyoungBlog/logo.png' }]
  ],
  // debug: true,
});
