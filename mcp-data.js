const MCP_SERVICES=[
{name:"github",cat:"开发",desc:"GitHub 仓库/Issue/PR/代码搜索",needKey:true,config:{"servers":[{"name":"github","url":"https://api.githubcopilot.com/mcp/","headers":{"Authorization":"Bearer YOUR_GITHUB_TOKEN"}}]}},
{name:"x-docs",cat:"搜索",desc:"X/Twitter API 文档搜索(免费)",needKey:false,config:{"servers":[{"name":"x-docs","url":"https://docs.x.com/mcp"}]}},
{name:"notion",cat:"办公",desc:"Notion 页面/数据库读写",needKey:true,config:{"servers":[{"name":"notion","url":"https://mcp.notion.com/mcp"}]}},
{name:"stripe",cat:"工具",desc:"Stripe 支付/订阅/发票",needKey:true,config:{"servers":[{"name":"stripe","url":"https://mcp.stripe.com"}]}},
{name:"figma",cat:"工具",desc:"Figma 设计文件/组件/评论",needKey:true,config:{"servers":[{"name":"figma","url":"https://mcp.figma.com/mcp"}]}},
{name:"sentry",cat:"开发",desc:"Sentry 错误跟踪/性能监控",needKey:true,config:{"servers":[{"name":"sentry","url":"https://mcp.sentry.dev/mcp"}]}},
{name:"atlassian",cat:"办公",desc:"Jira/Confluence 项目管理",needKey:true,config:{"servers":[{"name":"atlassian","url":"https://mcp.atlassian.com/v1/mcp"}]}},
{name:"linear",cat:"办公",desc:"Linear 问题/项目/周期管理",needKey:true,config:{"servers":[{"name":"linear","url":"https://mcp.linear.app/mcp"}]}},
{name:"slack",cat:"通讯",desc:"Slack 消息/频道/搜索",needKey:true,config:{"servers":[{"name":"slack","url":"https://mcp.slack.com/mcp"}]}},
{name:"hubspot",cat:"办公",desc:"HubSpot CRM/联系人/交易",needKey:true,config:{"servers":[{"name":"hubspot","url":"https://mcp.hubspot.com"}]}},
{name:"cloudflare",cat:"开发",desc:"Cloudflare Workers/KV/DNS",needKey:true,config:{"servers":[{"name":"cloudflare","url":"https://mcp.cloudflare.com/mcp"}]}},
{name:"vercel",cat:"开发",desc:"Vercel 部署/日志/环境变量",needKey:true,config:{"servers":[{"name":"vercel","url":"https://mcp.vercel.com"}]}},
{name:"neon",cat:"开发",desc:"Neon Serverless Postgres",needKey:true,config:{"servers":[{"name":"neon","url":"https://mcp.neon.tech/mcp"}]}},
{name:"supabase",cat:"开发",desc:"Supabase 数据库/认证/存储",needKey:true,config:{"servers":[{"name":"supabase","url":"https://mcp.supabase.com/mcp"}]}},
{name:"exa",cat:"搜索",desc:"Exa AI 语义搜索",needKey:true,config:{"servers":[{"name":"exa","url":"https://mcp.exa.ai/mcp"}]}},
{name:"ahrefs",cat:"搜索",desc:"Ahrefs SEO/反向链接/关键词",needKey:true,config:{"servers":[{"name":"ahrefs","url":"https://api.ahrefs.com/mcp/mcp"}]}}
];