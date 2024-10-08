import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
    title: "Vue 3 + TypeScript 学习文档",
    description: "相惜学习 Vue 3 和 Typescript 的指南",
    themeConfig: {
        siteTitle: "前端学习",
        logo:"/assets/logo.png",
        nav: [
            {text:"首页",link:"/"},
            {text:"指南",link:"/guide/"},
            {text:"组件",link:"/compoments/"},
            {text:"API 参考",link:"/api/"},
            {text:"常见问题",link:"/faq/"},
        ],
        socialLinks:[
            {icon:"github",link:"http://github.com/vuejs/vitepress"}
        ],
        sidebar: {
            "/guide/":[
            {
            text: "开始",
            collapsible: true,
            items : [
            
            {text:"介绍",link:"/guide/" },
            {text:"安装",link:"/guide/installation"},
            {text:"基本概念",link:"/guide/concepts"},
            ],
         },
        ],
            "/components/":[
        {
            text: "常用组件",
            items:[
                {text:"介绍",link:"/compoments/"},
                {text:"按钮 Button",link:"/compoments/button"},
                {text:"表单 Form",link:"/compoments/form"},
                {text:"表格 Table",link:"/compoments/table"},
            ],
    },
],
},
footer:{
    message:"用心学习",
    copyright:"Copyrigth 2024 zyx"
},
},
},
)
