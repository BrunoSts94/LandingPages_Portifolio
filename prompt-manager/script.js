const elements = {
	promptTitle: document.getElementById('prompt-title'),
	promptContent: document.getElementById('prompt-content'),
	titleWrapper: document.getElementById('title-wrapper'),
	contentWrapper: document.getElementById('content-wrapper'),
    btnOpen: document.getElementById('btn-open'),
    btnCollapse: document.getElementById('btn-collapse'),
    sidebar: document.querySelector('.sidebar'),
	btnSave: document.getElementById('btn-save'),
	list: document.getElementById('prompt-list'),
	search: document.getElementById('search-input'),
	btnNew: document.getElementById('btn-new'),
	btnCopy: document.getElementById('btn-copy')
};

//Chave para identificar os dados salvos pela aplicação no navegador
const storageKey = "prompts_storage"

//Estado para carregar os prompts salvos e exibir
const state = {
	prompts: [],
	selectedId: null,
}


function updateEditableWrapperState(element, wrapper) {
	const hasText = element.textContent.trim().length > 0;
    wrapper.classList.toggle('is-empty', !hasText);
}

function openSidebar() {
		elements.sidebar.classList.add('open');
		elements.sidebar.classList.remove('collapsed');
}

function closeSidebar() {
		elements.sidebar.classList.remove('open');
		elements.sidebar.classList.add('collapsed');
}


function updateAllEditableStates() {
	updateEditableWrapperState(elements.promptTitle, elements.titleWrapper);
	updateEditableWrapperState(elements.promptContent, elements.contentWrapper);
}

/**
 * Anexa handlers para abrir/fechar a sidebar e define estado inicial responsivo
 */
function attachSidebarHandlers() {
	if (!elements.sidebar) return;

	// Handler de fechar
	if (elements.btnCollapse) {
		elements.btnCollapse.addEventListener('click', () => {
			closeSidebar();
			if (elements.btnOpen) elements.btnOpen.style.display = 'block';
		});
	}

	// Handler de abrir
	if (elements.btnOpen) {
		elements.btnOpen.addEventListener('click', () => {
			openSidebar();
			// quando abrir, esconder o botão de abrir
			elements.btnOpen.style.display = 'none';
		});
	}

	// Estado inicial responsivo: em telas pequenas, manter a sidebar fechada; em desktop, aberta
	if (window.matchMedia && window.matchMedia('(max-width:950px)').matches) {
		// mobile: usar a classe `open` para mostrar quando necessário; por padrão, manter fechada
		elements.sidebar.classList.remove('open');
		// mostrar o botão de abrir
		if (elements.btnOpen) elements.btnOpen.style.display = 'block';
	} else {
		// desktop: garantir que a sidebar esteja visível (sem collapsed) e esconder o botão de abrir
		elements.sidebar.classList.remove('collapsed');
		elements.sidebar.classList.remove('open');
		if (elements.btnOpen) elements.btnOpen.style.display = 'none';
	}
}

function attachAllEditableHandlers() {
	if (elements.promptTitle) {
		elements.promptTitle.addEventListener('input', () => {
			updateEditableWrapperState(elements.promptTitle, elements.titleWrapper);
		});
	}

	if (elements.promptContent) {
		elements.promptContent.addEventListener('input', () => {
			updateEditableWrapperState(elements.promptContent, elements.contentWrapper);
		});
	}
}

/*-------------- FUNÇÕES ---------------*/

function save(){
	const title = elements.promptTitle.innerHTML.trim()
	const content = elements.promptContent.innerHTML.trim()
	const hasContent = elements.promptContent.textContent.trim()

	if(!title || !hasContent){
		alert('Titulo e conteudo não podem estar vazios')
		return
	}

	if(state.selectedId){
		const existingPrompt = state.prompts.find((p) => p.id === state.selectedId)

		if (existingPrompt) {
			existingPrompt.title = title || "Sem titulo"
			existingPrompt.content = content || "Sem conteúdo"
		}
	}else {
		const newPrompt = {
			id: Date.now().toString(36),
			title,
			content,
		}
		state.prompts.unshift(newPrompt)
		state.selectedId = newPrompt.id
	}
	renderList(elements.search.value)
	persist()
	alert('Prompt salvo com sucesso!')
}

function persist(){
	try {
		localStorage.setItem(storageKey, JSON.stringify(state.prompts))
	} catch (error) {
		console.log('Erro ao salvar no localStorage:', error)
	}
}

function load(){
	try {
		const storage = localStorage.getItem(storageKey)
		state.prompts = storage ? JSON.parse(storage) : []
		state.selectedId = null
	} catch (error) {
		console.log('Erro ao carregar storage', error)
	}
}

function createPromptItem(prompt){
	const tmp = document.createElement('div')
	tmp.innerHTML = prompt.content
	return`
		<li class="prompt-item" data-id="${prompt.id}" data-action="select">
            <div class="prompt-item-content">
                <span class="prompt-item-title">${prompt.title}</span>
                <span class="prompt-item-description">${tmp.textContent}</span>
            </div>
            <button class="btn-icon" title="Remover" data-action="remove">
                <img src="./assets/remove.svg" alt="Remove" class="icon icon-trash">
            </button>
        </li>
	`
}

function renderList(filterText = ''){
	const filterPrompts = state.prompts
	.filter((prompt) => 
		prompt.title.toLowerCase().includes(filterText.toLowerCase().trim())
	)
	.map((p) => createPromptItem(p))
	.join('')

	elements.list.innerHTML = filterPrompts
}

function newPrompt(){
	state.selectedId = null
	elements.promptTitle.textContent = ""
	elements.promptContent.textContent = ""
	updateAllEditableStates()
	elements.promptTitle.focus()
}

function copySelected(){
	try {
		const content = elements.promptContent
		if(!navigator.clipboard){
			console.error('Clipboard API não suportada neste ambiente')
		}
		navigator.clipboard.writeText(content.innerText)
		alert('Conteudo copiado para a area de transferência')

	} catch (error) {
		console.log('Não foi possivel copiar', error)
	}
}


/*-------- EVENTOS ----- */
if (elements.btnSave) elements.btnSave.addEventListener('click', save)
if (elements.btnNew) elements.btnNew.addEventListener('click', newPrompt)
if (elements.btnCopy) elements.btnCopy.addEventListener('click', copySelected)
if (elements.search) elements.search.addEventListener('input', function(event){
	renderList(event.target.value)
})
if (elements.list) elements.list.addEventListener('click', function(event) {
	const removeBtn = event.target.closest("[data-action='remove']")
	const item = event.target.closest("[data-id]")

	if(!item) return

	const id = item.getAttribute("data-id")
	state.selectedId = id

	if(removeBtn) {
		state.prompts = state.prompts.filter((P) => P.id !== id)
		renderList(elements.search.value)
		persist()
		return
	}

	if(event.target.closest("[data-action='select']")) {
		const prompt = state.prompts.find((p) => p.id === id)

		if(prompt){
			elements.promptTitle.textContent = prompt.title
			elements.promptContent.innerHTML = prompt.content
			updateAllEditableStates()
		}
	}
})


/** Inicializa os handlers e faz uma primeira leitura dos estados */
function init() {
	load()
	renderList('')
	attachAllEditableHandlers();
	updateAllEditableStates();
	attachSidebarHandlers();
}

init();

