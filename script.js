const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");

const products = [
  { name: "Cylinder Block", image: "images/Cylinder Block.png", category: "Cylinder Block"   },
  { name: "CYL IR 1.75 (234)", image: "images/CYL IR 1.75 (234).png", category: "Cylinder Block"   },
  { name: "CYL IR 1.75 (2340)", image: "images/CYL IR 1.75 (2340).png", category: "Cylinder Block"   },
  

 ];

function displayProducts(productList) {
  gallery.innerHTML = "";
  productList.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <p>${product.name}</p>
    `;
    gallery.appendChild(div);
  });
}

function filterProducts() {
  const searchQuery = searchInput.value.toLowerCase();
  const selectedCategory = categoryFilter.value;

  const filtered = products.filter(product => {
    const matchName = product.name.toLowerCase().includes(searchQuery);
    const matchCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchName && matchCategory;
  });

  displayProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categoryFilter.addEventListener("change", filterProducts);

// Initial load
displayProducts(products);

displayProducts(products);
