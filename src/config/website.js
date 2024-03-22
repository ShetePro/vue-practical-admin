export default {
  title: "翱晨通用后台管理框架", // 网站标题(项目名称)
  storageKey: "group-two-vue3-admin", // 可设置为项目英文名 避免不同项目在同一环境下缓存互相串联
  indexPage: "/wel/index", // 项目首页地址
  indexTitle: "翱晨科技", // 项目首页菜单上方显示的名称
  logo: `${import.meta.env.BASE_URL}vite.svg`, // 项目或企业LOGO
  defaultTabIcon: `${import.meta.env.BASE_URL}tab.svg`, // 项目或企业LOGO
  defaultAvatar: {
    male: `${import.meta.env.BASE_URL}user-man.svg`,
    female: `${import.meta.env.BASE_URL}user-woman.svg`,
  },
  iv: "aochendemo@12345", // 加密偏移值
  fistPage: {
    label: "主页",
    value: "/wel/index",
    params: {},
    query: {},
    icon: "index.svg",
    close: false,
    meta: {
      isTab: true,
    },
  },
  gender: {
    MALE: 0,
    FEMALE: 1,
  },
  menu: {
    iconDefault: "iconfont icon-caidan",
    props: {
      label: "menuName",
      path: "path",
      icon: "icon",
      children: "children",
      meta: "meta",
    },
  },
  pageStatus: {
    CREATE: "create",
    UPDATE: "update",
    DETAIL: "detail",
  },
};

export const iconfontUrl = "//at.alicdn.com/t/font_$key.css";
export const iconFonts = ["2636982_ukga8onc90h"]; // 字体图标库
