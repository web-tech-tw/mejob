export const title = "meJob 咪價";
export const subtitle = "工作迷 - 自由的工作機會平台，讓你找到最適合的工作。";

export const isSaraEnabled = true;
export const onClickSara = () => {
  const {
    VITE_SARA_INTE_HOST: saraInteHost,
  } = import.meta.env;
  location.assign(saraInteHost);
};

export const menuItems = [
  {
    name: "通用模板",
    type: "dropdown",
    status: "template",
    children: [
      {
        name: "template.inte",
        description: "前端 Web 通用模板",
        icon: "GlobeAltIcon",
        onClick: () => window.open("https://github.com/web-tech-tw/template.inte"),
      },
      {
        name: "template.recv",
        description: "後端 API 通用模板",
        icon: "ServerStackIcon",
        onClick: () => window.open("https://github.com/web-tech-tw/template.recv"),
      }
    ]
  },
  {
    name: "GitHub",
    type: "function",
    icon: "CodeBracketIcon",
    onClick: () => window.open("https://github.com/web-tech-tw"),
  }
];
