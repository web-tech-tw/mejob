import router from "../router";

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
    name: "找工作",
    type: "function",
    icon: "BriefcaseIcon",
    onClick: () => {
      router.push("/careers");
    },
  },
  {
    name: "找人才",
    type: "function",
    icon: "UserGroupIcon",
    onClick: () => {
      router.push("/resumes");
    },
  },
  {
    name: "職場暢談",
    type: "function",
    icon: "ChatBubbleOvalLeftEllipsisIcon",
    onClick: () => {
      router.push("/chat");
    },
  }
];
