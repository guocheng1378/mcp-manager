let favs = JSON.parse(localStorage.getItem('favs') || '[]');
let currentCat = '全部';
let currentService = null;

function init() {
  renderCategories();
  renderList(MCP_SERVICES);
  document.getElementById('search').addEventListener('input', e => {
    const q = e.target.value.toLowerCase();
    const filtered = MCP_SERVICES.filter(s => s.name.includes(q) || s.desc.includes(q));
    renderList(filtered);
  });
}

function renderCategories() {
  const cats = ['全部', '收藏', ...new Set(MCP_SERVICES.map(s => s.cat))];
  const nav = document.getElementById('categories');
  nav.innerHTML = cats.map(c => `<button class="cat-btn ${c===currentCat?'active':''}" onclick="filterCat('${c}')">${c}</button>`).join('');
}

function filterCat(cat) {
  currentCat = cat;
  renderCategories();
  if (cat === '全部') renderList(MCP_SERVICES);
  else if (cat === '收藏') renderList(MCP_SERVICES.filter(s => favs.includes(s.name)));
  else renderList(MCP_SERVICES.filter(s => s.cat === cat));
}

function renderList(services) {
  const list = document.getElementById('list');
  list.innerHTML = services.map(s => `<div class="card" onclick="showDetail('${s.name}')"><h3>${s.name}</h3><p>${s.desc}</p></div>`).join('');
}

function showDetail(name) {
  currentService = MCP_SERVICES.find(s => s.name === name);
  document.getElementById('d-name').textContent = currentService.name;
  document.getElementById('d-desc').textContent = currentService.desc;
  document.getElementById('d-config').textContent = formatJson(currentService.config);
  document.getElementById('fav-btn').textContent = favs.includes(name) ? '已收藏' : '收藏';
  document.getElementById('fav-btn').className = favs.includes(name) ? 'faved' : '';
  document.getElementById('detail').classList.remove('hidden');
}

function closeDetail() { document.getElementById('detail').classList.add('hidden'); }

function toggleFav() {
  if (!currentService) return;
  const idx = favs.indexOf(currentService.name);
  if (idx > -1) favs.splice(idx, 1); else favs.push(currentService.name);
  localStorage.setItem('favs', JSON.stringify(favs));
  document.getElementById('fav-btn').textContent = favs.includes(currentService.name) ? '已收藏' : '收藏';
  document.getElementById('fav-btn').className = favs.includes(currentService.name) ? 'faved' : '';
}

function copyConfig() {
  if (!currentService) return;
  navigator.clipboard.writeText(currentService.config).then(() => toast('已复制配置'));
}

function openEditor() {
  document.getElementById('json-editor').value = localStorage.getItem('mcp-json') || JSON.stringify({mcpServers:{}}, null, 2);
  document.getElementById('editor').classList.remove('hidden');
}

function closeEditor() { document.getElementById('editor').classList.add('hidden'); }

function saveJson() {
  try {
    const val = document.getElementById('json-editor').value;
    JSON.parse(val);
    localStorage.setItem('mcp-json', val);
    toast('保存成功');
    closeEditor();
  } catch(e) { toast('JSON 格式错误'); }
}

function formatJson(str) {
  try { return JSON.stringify(JSON.parse(str), null, 2); } catch(e) { return str; }
}

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg; t.style.display = 'block';
  setTimeout(() => t.style.display = 'none', 2000);
}

init();