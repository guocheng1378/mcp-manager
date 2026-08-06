const MCP_SERVICES=[
{name:"github-mcp",cat:"开发",desc:"GitHub 仓库/Issue/PR/代码搜索",config:{"servers":[{"name":"github-mcp","url":"https://api.githubcopilot.com/mcp/","headers":{"Authorization":"Bearer YOUR_GITHUB_TOKEN"}}]}},
{name:"brave-search",cat:"搜索",desc:"Brave 联网搜索",config:{"servers":[{"name":"brave-search","url":"https://brave-search-mcp.brave.com/sse","headers":{"Authorization":"Bearer YOUR_BRAVE_KEY"}}]}},
{name:"gitmcp",cat:"开发",desc:"任意 GitHub 项目文档(免费)",config:{"servers":[{"name":"gitmcp","url":"https://gitmcp.io/mcp"}]}},
{name:"sequential-thinking",cat:"开发",desc:"复杂问题分步推理(免费)",config:{"servers":[{"name":"sequential-thinking","url":"https://mcp.andybrandt.net/sequential-thinking"}]}},
{name:"arxiv",cat:"教育",desc:"arXiv 论文搜索(免费)",config:{"servers":[{"name":"arxiv","url":"https://mcp.andybrandt.net/arxiv"}]}},
{name:"filesystem",cat:"办公",desc:"本地文件读写",config:{"servers":[{"name":"filesystem","url":"https://mcp.andybrandt.net/filesystem"}]}},
{name:"fetch",cat:"搜索",desc:"网页内容抓取(免费)",config:{"servers":[{"name":"fetch","url":"https://mcp.andybrandt.net/fetch"}]}},
{name:"memory",cat:"办公",desc:"持久化知识记忆",config:{"servers":[{"name":"memory","url":"https://mcp.andybrandt.net/memory"}]}}
];