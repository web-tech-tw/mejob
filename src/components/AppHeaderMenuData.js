const saraInitHost = import.meta.env.VITE_SARA_INTE_HOST

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
        onClick: () => window.open('https://github.com/web-tech-tw/template.inte')
      },
      {
        name: 'template.recv',
        description: '後端 API 通用模板',
        onClick: () => window.open('https://github.com/web-tech-tw/template.recv')
      }
    ]
  },
  {
    name: 'GitHub',
    type: 'function',
    onClick: () => window.open('https://github.com/web-tech-tw')
  },
  {
    name: '登入',
    type: 'function',
    onClick: () => location.assign(saraInitHost)
  }
];
