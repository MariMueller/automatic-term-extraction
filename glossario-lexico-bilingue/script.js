document.addEventListener('DOMContentLoaded', () => {
    const glossaryList = document.getElementById('glossaryList');
    const searchInput = document.getElementById('searchInput');
    
    // Render list based on search query
    function renderList(query = '') {
        glossaryList.innerHTML = '';
        const data = glossarioData; 
        
        // Filter data based on query
        const filteredData = data.filter(item => {
            const pt = (item.pt || '').toLowerCase();
            const var_pt = (item.var_pt || '').toLowerCase();
            const en = (item.en || '').toLowerCase();
            const var_en = (item.var_en || '').toLowerCase();
            const q = query.toLowerCase();
            return pt.includes(q) || var_pt.includes(q) || en.includes(q) || var_en.includes(q);
        });
        
        if (filteredData.length === 0) {
            glossaryList.innerHTML = `<div class="no-results">Nenhum termo encontrado para "${query}"</div>`;
            return;
        }
        
        // Create elements
        const fragment = document.createDocumentFragment();
        filteredData.forEach((item, index) => {
            const row = document.createElement('div');
            row.className = 'term-item';
            // Stagger animation delay slightly
            row.style.animationDelay = `${Math.min(index * 0.03, 0.5)}s`;
            
            // PT Column
            const ptCol = document.createElement('div');
            ptCol.className = 'term-pt col';
            
            const ptMain = document.createElement('div');
            ptMain.className = 'term-main-pt';
            ptMain.textContent = item.pt;
            ptCol.appendChild(ptMain);
            
            if (item.var_pt) {
                const ptVar = document.createElement('div');
                ptVar.className = 'term-var';
                ptVar.textContent = item.var_pt;
                ptCol.appendChild(ptVar);
            }
            
            // EN Column
            const enCol = document.createElement('div');
            enCol.className = 'term-en col';
            
            const enMain = document.createElement('div');
            enMain.className = 'term-main-en';
            enMain.textContent = item.en;
            enCol.appendChild(enMain);
            
            if (item.var_en) {
                const enVar = document.createElement('div');
                enVar.className = 'term-var';
                enVar.textContent = item.var_en;
                enCol.appendChild(enVar);
            }
            
            row.appendChild(ptCol);
            row.appendChild(enCol);
            fragment.appendChild(row);
        });
        
        glossaryList.appendChild(fragment);
    }
    
    // Handle search input
    searchInput.addEventListener('input', (e) => {
        renderList(e.target.value);
    });
    
    // Initial render
    renderList();
});
