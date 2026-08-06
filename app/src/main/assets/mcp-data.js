// MCP 服务数据
const MCP_SERVICES = [
  {name:"fetch",cat:"搜索",desc:"网页内容抓取(免费)",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-fetch"]}'},
  {name:"brave-search",cat:"搜索",desc:"Brave 搜索(需API Key)",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-brave-search"],"env":{"BRAVE_API_KEY":"YOUR_KEY"}}'},
  {name:"filesystem",cat:"办公",desc:"本地文件读写",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-filesystem","/sdcard"]}'},
  {name:"memory",cat:"办公",desc:"持久化知识记忆",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-memory"]}'},
  {name:"sqlite",cat:"办公",desc:"SQLite 数据库",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-sqlite","--db-path","/tmp/memory.db"]}'},
  {name:"github",cat:"开发",desc:"GitHub 仓库/Issue/PR",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-github"],"env":{"GITHUB_PERSONAL_ACCESS_TOKEN":"YOUR_TOKEN"}}'},
  {name:"puppeteer",cat:"开发",desc:"浏览器自动化/截图",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-puppeteer"]}'},
  {name:"sequential-thinking",cat:"开发",desc:"复杂问题分步推理",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-sequential-thinking"]}'},
  {name:"postgres",cat:"开发",desc:"PostgreSQL 数据库",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-postgres","postgresql://localhost/mydb"]}'},
  {name:"google-translate",cat:"翻译",desc:"Google 多语言翻译(免费)",config:'{"command":"npx","args":["-y","@anthropic/mcp-google-translate"]}'},
  {name:"wikipedia",cat:"教育",desc:"维基百科查询(免费)",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-wikipedia"]}'},
  {name:"time",cat:"工具",desc:"世界时间/时区(免费)",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-time"]}'},
  {name:"qrcode",cat:"工具",desc:"二维码生成(免费)",config:'{"command":"npx","args":["-y","@anthropic/mcp-qrcode"]}'},
  {name:"everything",cat:"工具",desc:"文件搜索(免费)",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-everything"]}'},
  {name:"slack",cat:"通讯",desc:"Slack 消息操作",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-slack"],"env":{"SLACK_BOT_TOKEN":"YOUR_TOKEN","SLACK_TEAM_ID":"YOUR_TEAM"}}'},
  {name:"notion",cat:"办公",desc:"Notion 笔记操作",config:'{"command":"npx","args":["-y","@anthropic/mcp-notion"],"env":{"NOTION_API_KEY":"YOUR_TOKEN"}}'},
  {name:"sqlite-remote",cat:"开发",desc:"远程SQLite(需URL)",config:'{"command":"npx","args":["-y","@modelcontextprotocol/server-sqlite","--db-path","/tmp/remote.db"]}'},
  {name:"docker",cat:"开发",desc:"Docker 容器管理",config:'{"command":"npx","args":["-y","@anthropic/mcp-docker"]}'},
  {name:"firebase",cat:"工具",desc:"Firebase 数据库",config:'{"command":"npx","args":["-y","@anthropic/mcp-firebase"]}'},
  {name:"supabase",cat:"工具",desc:"Supabase 数据库",config:'{"command":"npx","args":["-y","@anthropic/mcp-supabase"],"env":{"SUPABASE_URL":"YOUR_URL","SUPABASE_KEY":"YOUR_KEY"}}'}
];