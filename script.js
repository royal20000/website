const products = [
  {
    id: 1,
    name: "Smartphone",
    price: "₹29,999",
    description: "Powerful and sleek smartphone",
    image: "https://www.tech21.com/cdn/shop/products/0f0f7fd1-fe5e-4747-94b4-ec09bc6a121a.jpg?v=1688671362"
  },
  {
    id: 2,
    name: "Headphones",
    price: "₹1,599",
    description: "Noise-cancelling over-ear headphones",
    image: "https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw52aa823b/01.JBL_Live_770NC_Product%20Image_Hero_Black.png?sw=535&sh=535"
  },
  {
    id: 3,
    name: "Laptop",
    price: "₹1,29,999",
    description: "Lightweight performance laptop",
    image: "https://atlas-content-cdn.pixelsquid.com/stock-images/open-macbook-silver-laptop-K6r0Vr6-600.jpg"
  },
  {
    id: 4,
    name: "Smartwatch",
    price: "₹2,999",
    description: "Track your fitness and notifications",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MXL33ref_FV99_VW_34FR+watch-case-46-aluminum-jetblack-nc-s10_VW_34FR+watch-face-46-aluminum-jetblack-s10_VW_34FR?wid=750&hei=712"
  },
  {
    id: 5,
    name: "Camera",
    price: "₹59,999",
    description: "Capture stunning photos and videos",
    image: "https://www.shutterstock.com/image-photo/modern-camera-isolated-on-white-600nw-2488860301.jpg"
  }
];

const productList = document.getElementById("product-list");
const cartCount = document.getElementById("cart-count");
const notification = document.getElementById("notification");
let cart = 0;

// Render products
products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <p>${product.description}</p>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;
  productList.appendChild(card);
});

// Add to cart + show notification
function addToCart(productName) {
  cart++;
  cartCount.textContent = cart;

  // Show notification
  notification.textContent = `"${productName}" added to cart!`;
  notification.style.display = "block";

  // Hide after 2 seconds
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}




// Search products
function searchProducts() {
  const input = document.getElementById("search-input").value.toLowerCase();
  const productCards = document.querySelectorAll(".product-card");

  productCards.forEach(product => {
    const title = product.querySelector("h3").textContent.toLowerCase();
    if (title.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
