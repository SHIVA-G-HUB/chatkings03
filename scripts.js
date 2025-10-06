const menuItems = [
  {
    name: "Tomato Soup",
    category: "starters",
    description: "Classic tomato soup with herbs and cream.",
    image:"download.jpg"
  },
  {
    name: "Grilled Chicken",
    category: "main",
    description: "Juicy grilled chicken with spices and sides.",
    image:"chicken.jpg"
  },
  {
    name: "Cheese Pizza",
    category: "main",
    description: "Mozzarella cheese pizza with fresh basil.",
    image: "cheese.jpg"
  },
  {
    name: "Chocolate Cake",
    category: "desserts",
    description: "Moist chocolate cake with ganache topping.",
    image: "cc.jpg"
  },
  {
    name: "Spring Rolls",
    category: "starters",
    description: "Crispy spring rolls with sweet chili sauce.",
    image:"sr.jpg"
  },
  {
    name: "Ice Cream Sundae",
    category: "desserts",
    description: "Vanilla ice cream with toppings and syrup.",
    image: "ics.jpg"
    
  },
{
    name: "Chicken Lollipop",
    category:"main",
    description:"Chicken lollipop is a popular Indian fried chicken appetiser.",
    image:"cl.jpg"
},{
    name: "Samosa",
    category: "Snacks",
    description: "made with a combination of potatoes, peas and spices.",
    image: "samo.jpg"

},{
    name: "Pani puri",
    category: "Snacks",
    description: "The puri shell is typically made with atta.",
    image: "pani.jpg"
},{
     name: "Dark Chocolate Pudding",
    category: "desserts",
    description: "Dark Chocolate Pudding with toppings and syrup.",
    image: "choco.jpg"
},{
  name: "Corn Cheese Balls",
    category: "starters",
    description: "Deep-fried corn and cheese snacks",
    image:"cb.jpg"

},{
  name: "MuttonKabab Seekh ",
    category:"main",
    description:"Minced meat grilled on skewers",
    image:"mk.jpg"
},{
  name: "Stuffed Mushrooms",
    category:"Snacks",
    description:" Cheesy or spiced filling inside mushrooms",
    image:"sm.jpg"
  
},{
   name: "Aloo Tikki Chaat",
    category:"starters",
    description:"Aloo Tikki Chaat is a supremely popular of North India.",
    image:"aa.jpg"

},{
  name: "Rasamalai",
    category:"desserts",
    description:" The milk is flavored with cardamom  garnished with nuts almonds. ",
    image:"rr.jpg"
}
];

const menuContainer = document.getElementById("menu");
const buttons = document.querySelectorAll(".filter-buttons button");

function displayMenuItems(items) {
  menuContainer.innerHTML = "";
  items.forEach(item => {
    const div = document.createElement("div");
    div.classList.add("menu-item");
    div.innerHTML = `
  <a href="food-details.html?name=${encodeURIComponent(item.name)}" class="menu-link" style="text-decoration:none; color:inherit;">
    <img src="${item.image}" alt="${item.name}" />
    <div class="menu-content">
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    </div>
  </a>
`;

    menuContainer.appendChild(div);
  });
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const category = button.getAttribute("data-category");
    if (category === "all") {
      displayMenuItems(menuItems);
    } else {
      const filtered = menuItems.filter(item => item.category === category);
      displayMenuItems(filtered);
    }
  });
});

displayMenuItems(menuItems);

const menuToggle= document.getElementById('menuToggle');
const navLinks= document.getElementById('navLinks');

menuToggle.addEventListener('click',()=>{
  navLinks.classList.toggle('show');
});
