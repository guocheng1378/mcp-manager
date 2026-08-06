const MCP_SERVICES=[
{name:"fetch",cat:"搜索",desc:"网页内容抓取(免费)",config:{"command":"npx -y @modelcontextprotocol/server-fetch"}},
{name:"brave-search",cat:"搜索",desc:"Brave 搜索(需API Key)",config:{"command":"npx -y @modelcontextprotocol/server-brave-search","env":{"BRAVE_API_KEY":"YOUR_KEY"}}},
{name:"filesystem",cat:"办公",desc:"本地文件读写",config:{"command":"npx -y @modelcontextprotocol/server-filesystem /home"}},
{name:"memory",cat:"办公",desc:"持久化知识记忆(免费)",config:{"command":"npx -y @modelcontextprotocol/server-memory"}},
{name:"sqlite",cat:"办公",desc:"SQLite 数据库",config:{"command":"npx -y @modelcontextprotocol/server-sqlite --db-path ./data.db"}},
{name:"github",cat:"开发",desc:"GitHub 仓库/Issue/PR",config:{"command":"npx -y @modelcontextprotocol/server-github","env":{"GITHUB_PERSONAL_ACCESS_TOKEN":"YOUR_TOKEN"}}},
{name:"puppeteer",cat:"开发",desc:"浏览器自动化/截图",config:{"command":"npx -y @modelcontextprotocol/server-puppeteer"}},
{name:"sequential-thinking",cat:"开发",desc:"复杂问题分步推理",config:{"command":"npx -y @modelcontextprotocol/server-sequential-thinking"}},
{name:"postgres",cat:"开发",desc:"PostgreSQL 数据库",config:{"command":"npx -y @modelcontextprotocol/server-postgres postgresql://localhost/mydb"}},
{name:"wikipedia",cat:"教育",desc:"维基百科查询(免费)",config:{"command":"npx -y @modelcontextprotocol/server-wikipedia"}},
{name:"time",cat:"工具",desc:"世界时间/时区(免费)",config:{"command":"npx -y @modelcontextprotocol/server-time"}},
{name:"everything",cat:"工具",desc:"文件搜索(免费)",config:{"command":"npx -y @modelcontextprotocol/server-everything"}},
{name:"slack",cat:"通讯",desc:"Slack 消息操作",config:{"command":"npx -y @modelcontextprotocol/server-slack","env":{"SLACK_BOT_TOKEN":"YOUR_TOKEN","SLACK_TEAM_ID":"YOUR_TEAM"}}},
{name:"notion",cat:"办公",desc:"Notion 笔记操作",config:{"command":"npx -y @notionhq/notion-mcp-server","env":{"NOTION_API_KEY":"YOUR_TOKEN"}}},
{name:"redis",cat:"开发",desc:"Redis 缓存操作",config:{"command":"npx -y @modelcontextprotocol/server-redis","env":{"REDIS_URL":"redis://localhost:6379"}}},
{name:"email",cat:"通讯",desc:"SMTP 邮件收发",config:{"command":"npx -y @modelcontextprotocol/server-email","env":{"SMTP_HOST":"smtp.gmail.com","SMTP_PORT":"587","EMAIL_USER":"YOUR_EMAIL","EMAIL_PASS":"YOUR_PASS"}}}
];