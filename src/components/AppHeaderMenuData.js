import {useClient} from "../clients/sara.js"

const saraInitHost = import.meta.env.VITE_SARA_INTE_HOST

const client = useClient();

let profile = null;
client.get("profile").json().then((response) => {
  profile = response.data;
}).catch((error) => {
  console.error(error);
});

export const titleLong = 'template.inte - 前端 Web 通用模板';
export const titleShort = 'template.inte';

export const menuItems = [
  {
    name: '通用模板',
    type: 'dropdown',
    status: 'template',
    children: [
      {
        name: 'template.inte',
        description: '前端 Web 通用模板',
        icon: 'GlobeAltIcon',
        onClick: () => window.open('https://github.com/web-tech-tw/template.inte')
      },
      {
        name: 'template.recv',
        description: '後端 API 通用模板',
        icon: 'ServerStackIcon',
        onClick: () => window.open('https://github.com/web-tech-tw/template.recv')
      }
    ]
  },
  {
    name: 'GitHub',
    type: 'function',
    icon: 'CodeBracketIcon',
    onClick: () => window.open('https://github.com/web-tech-tw')
  },
  {
    name: profile?.nickname || '登入',
    type: 'function',
    icon: 'ArrowRightOnRectangleIcon',
    onClick: () => location.assign(saraInitHost)
  }
];
