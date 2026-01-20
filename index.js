const catalogContainer = document.getElementById("catalog");
const categoryFilter = document.getElementById("category-filter");
const subcategoryFilter = document.getElementById("subcategory-filter");
const searchBtn = document.getElementById("search");
const searchInput = document.getElementById("search-input");

// Create card element from data
function createCard(item) {
    const card = document.createElement("div");
    card.setAttribute("id", item.title.replace(/\s+/g, "-").toLowerCase());
    card.setAttribute("data-category", item.category.replace(/\s+/g, "-").toLowerCase());
    card.setAttribute("data-subcategory", item.subCategory.replace(/\s+/g, "-").toLowerCase());
    card.setAttribute("data-title", item.title.toLowerCase());
    card.classList.add("col-12", "col-md-6", "col-lg-4", "mb-4");

    const cardElement = document.createElement("div");
    cardElement.classList.add("card", "bg-light", "border-light", "h-100");

    // Header with Year and Location
    const header = document.createElement("div");
    header.classList.add("card-header", "bg-dark", "text-white", "small");
    header.innerHTML = `<span class="year">${item.year}</span> • <span class="location">${item.location}</span>`;
    cardElement.appendChild(header);

    // Body
    const body = document.createElement("div");
    body.classList.add("card-body");

    // Title
    const title = document.createElement("h5");
    title.classList.add("card-title", "mb-2");
    title.innerText = item.title;
    body.appendChild(title);

    // Category and Sub-category
    const categories = document.createElement("div");
    categories.classList.add("card-categories", "mb-2", "small");
    categories.innerHTML = `<span class="category text-white bg-info">${item.category}</span> <br> <code class="sub-category">${item.subCategory}</code> <hr>`;
    body.appendChild(categories);

    // Role
    const role = document.createElement("p");
    role.classList.add("card-role", "mb-2", "fw-bold");
    role.innerText = `${item.role}`;
    body.appendChild(role);

    // Organisation
    const organisation = document.createElement("p");
    organisation.classList.add("card-organisation", "text-muted", "mb-2");
    organisation.innerText = item.organisation;
    body.appendChild(organisation);

    // Highlight
    const highlight = document.createElement("p");
    highlight.classList.add("card-highlight", "card-text", "mb-3");
    highlight.innerText = item.highlight;
    body.appendChild(highlight);

    // Tags
    const tagsContainer = document.createElement("div");
    tagsContainer.classList.add("card-tags", "d-flex", "small", "flex-wrap", "gap-2");
    item.tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add("tag", "badge", "bg-secondary", "rounded-pill");
        tagEl.innerText = tag;
        tagsContainer.appendChild(tagEl);
    });
    body.appendChild(tagsContainer);

    cardElement.appendChild(body);
    card.appendChild(cardElement);

    return card;
}

// Create grid container
function initializeGrid() {
    const grid = document.createElement("div");
    grid.classList.add("row", "g-4");
    grid.setAttribute("id", "card-grid");

    catalog.data.forEach(item => {
        grid.appendChild(createCard(item));
    });

    catalogContainer.appendChild(grid);
}

// Initialize grid
initializeGrid();

// Build subcategory options dynamically
function populateSubcategories(selectedCategory) {
    const subcategories = new Set();

    catalog.data.forEach(item => {
        if (selectedCategory === "all" || item.category.replace(/\s+/g, "-").toLowerCase() === selectedCategory) {
            subcategories.add(item.subCategory);
        }
    });

    subcategoryFilter.innerHTML = '<option value="all">All Sub-categories</option>';
    Array.from(subcategories).sort().forEach(sub => {
        const option = document.createElement("option");
        option.value = sub.replace(/\s+/g, "-").toLowerCase();
        option.innerText = sub;
        subcategoryFilter.appendChild(option);
    });
}

// Filter cards based on category, subcategory, and search
function applyFilters() {
    const selectedCategory = categoryFilter.value;
    const selectedSubcategory = subcategoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();

    const cards = document.querySelectorAll("[data-category]");

    cards.forEach(card => {
        const cardCategory = card.getAttribute("data-category");
        const cardSubcategory = card.getAttribute("data-subcategory");
        const cardTitle = card.getAttribute("data-title");

        // Check category filter
        const categoryMatch = selectedCategory === "all" || cardCategory === selectedCategory;

        // Check subcategory filter
        const subcategoryMatch = selectedSubcategory === "all" || cardSubcategory === selectedSubcategory;

        // Check search filter (searches title only)
        const searchMatch = searchTerm === "" || cardTitle.includes(searchTerm);

        // Show card if all filters match
        const shouldShow = categoryMatch && subcategoryMatch && searchMatch;
        card.classList.toggle("d-none", !shouldShow);
    });
}

// Event listeners
categoryFilter.addEventListener("change", () => {
    populateSubcategories(categoryFilter.value);
    applyFilters();
});

subcategoryFilter.addEventListener("change", applyFilters);

searchBtn.addEventListener("click", applyFilters);

searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        applyFilters();
    }
});

// Initialize
window.addEventListener("load", () => {
    populateSubcategories("all");
    applyFilters();
});