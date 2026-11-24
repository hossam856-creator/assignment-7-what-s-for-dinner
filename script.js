

/* ==========================================================
   1) OBJECTS + 2) ARRAYS  — البيانات
   ========================================================== */

// Array of Objects: كل عنصر في المصفوفة هو Object يمثل وصفة.
// وكل Object بداخله Arrays (ingredients, instructions, tips)
// و Object تاني (nutrition).
const recipes = [
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=800&auto=format&fit=crop",
    rating: 4.8,
    reviews: 234,
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    difficulty: "Easy",
    category: "Italian",
    ingredients: [
      "400g spaghetti pasta",
      "200g pancetta or guanciale, diced",
      "4 large eggs",
      "100g Pecorino Romano cheese, grated",
      "50g Parmesan cheese, grated",
      "Freshly ground black pepper",
      "Salt for pasta water"
    ],
    instructions: [
      "Bring a large pot of salted water to boil. Cook spaghetti according to package directions until al dente.",
      "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce.",
      "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!"
    ],
    nutrition: { calories: "520 kcal", protein: "28g", carbs: "62g", fat: "18g", fiber: "3g", sodium: "680mg" },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only"
    ]
  },
  {
    name: "Chicken Tikka Masala",
    description: "Tender grilled chicken in a rich, spiced tomato-cream sauce",
    image: null,
    rating: 4.7,
    reviews: 412,
    prepTime: 50,
    cookTime: 35,
    servings: 4,
    difficulty: "Medium",
    category: "Indian",
    ingredients: [
      "700g boneless chicken thighs, cubed",
      "1 cup plain yogurt",
      "2 tbsp tikka masala spice mix",
      "1 large onion, finely chopped",
      "4 garlic cloves, minced",
      "1 tbsp fresh ginger, grated",
      "400g crushed tomatoes",
      "1/2 cup heavy cream",
      "Fresh cilantro and basmati rice, to serve"
    ],
    instructions: [
      "Mix chicken with yogurt, half of the spice mix, and a pinch of salt. Marinate for at least 30 minutes.",
      "Grill or pan-sear the chicken until charred and cooked through. Set aside.",
      "In a deep pan, sauté onion until golden. Add garlic, ginger, and the remaining spices; cook for 1 minute.",
      "Add crushed tomatoes and simmer for 15 minutes until thickened.",
      "Stir in cream and the chicken. Simmer for 5-10 minutes.",
      "Garnish with cilantro and serve with basmati rice or naan."
    ],
    nutrition: { calories: "480 kcal", protein: "36g", carbs: "22g", fat: "28g", fiber: "4g", sodium: "720mg" },
    tips: [
      "Marinate overnight for deeper flavor",
      "Char the chicken well - the smoky edges make the dish",
      "Add a pinch of sugar if the tomatoes taste too acidic",
      "Finish with a little butter for a glossy sauce"
    ]
  },
  {
    name: "Shakshuka",
    description: "Eggs poached in a spiced tomato and pepper sauce",
    image: null,
    rating: 4.6,
    reviews: 187,
    prepTime: 10,
    cookTime: 25,
    servings: 3,
    difficulty: "Easy",
    category: "Middle Eastern",
    ingredients: [
      "2 tbsp olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "3 garlic cloves, minced",
      "1 tsp cumin",
      "1 tsp paprika",
      "400g crushed tomatoes",
      "5 large eggs",
      "Fresh parsley and crusty bread, to serve"
    ],
    instructions: [
      "Heat olive oil in a wide skillet over medium heat. Cook onion and pepper until soft, about 6 minutes.",
      "Add garlic, cumin, and paprika; stir for 30 seconds.",
      "Pour in the tomatoes, season with salt and pepper, and simmer for 10 minutes.",
      "Make small wells in the sauce and crack an egg into each.",
      "Cover and cook 5-8 minutes until the whites are set but the yolks are still soft.",
      "Sprinkle with parsley and serve straight from the pan with bread."
    ],
    nutrition: { calories: "310 kcal", protein: "17g", carbs: "18g", fat: "19g", fiber: "5g", sodium: "540mg" },
    tips: [
      "Use a lid so the egg tops cook evenly",
      "Crumble feta over the top for a salty finish",
      "Let the sauce thicken well before adding the eggs"
    ]
  },
  {
    name: "Beef & Broccoli Stir-Fry",
    description: "Quick, savory stir-fry with tender beef and crisp broccoli",
    image: null,
    rating: 4.5,
    reviews: 298,
    prepTime: 20,
    cookTime: 12,
    servings: 4,
    difficulty: "Easy",
    category: "Asian",
    ingredients: [
      "450g flank steak, thinly sliced",
      "3 cups broccoli florets",
      "3 tbsp soy sauce",
      "1 tbsp oyster sauce",
      "1 tbsp cornstarch",
      "3 garlic cloves, minced",
      "1 tsp grated ginger",
      "2 tbsp vegetable oil",
      "Steamed rice, to serve"
    ],
    instructions: [
      "Toss the beef with 1 tbsp soy sauce and the cornstarch. Rest for 10 minutes.",
      "Blanch the broccoli for 1 minute, then drain.",
      "Heat oil in a wok over high heat. Sear the beef in batches, about 1-2 minutes per side. Remove.",
      "Stir-fry garlic and ginger for 15 seconds, then add broccoli.",
      "Return the beef, add the remaining soy sauce, oyster sauce, and a splash of water. Toss until glossy.",
      "Serve immediately over steamed rice."
    ],
    nutrition: { calories: "390 kcal", protein: "32g", carbs: "24g", fat: "18g", fiber: "3g", sodium: "910mg" },
    tips: [
      "Slice the beef against the grain for tenderness",
      "Don't overcrowd the wok - sear in batches",
      "Keep the heat high for that restaurant-style char"
    ]
  }
];

// Object: يربط كل مستوى صعوبة بكلاس Bootstrap بتاعه.
// بنستخدم الـ key للوصول للقيمة: difficultyStyles["Easy"]
const difficultyStyles = {
  Easy: "bg-success-subtle text-success-emphasis",
  Medium: "bg-warning-subtle text-warning-emphasis",
  Hard: "bg-danger-subtle text-danger-emphasis"
};

// Object of Objects: بيانات عرض كل عنصر تغذية (الاسم + الأيقونة + اللون).
// المفاتيح لازم تطابق المفاتيح اللي جوه recipe.nutrition.
const nutritionDisplay = {
  calories: { label: "Calories",      icon: "fa-fire",      style: "background:#ffedd5;color:#ea580c" },
  protein:  { label: "Protein",       icon: "fa-dumbbell",  style: "background:var(--bs-primary-bg-subtle);color:var(--bs-primary-text-emphasis)" },
  carbs:    { label: "Carbohydrates", icon: "fa-wheat-awn", style: "background:var(--bs-warning-bg-subtle);color:var(--bs-warning-text-emphasis)" },
  fat:      { label: "Fat",           icon: "fa-droplet",   style: "background:var(--bs-danger-bg-subtle);color:var(--bs-danger-text-emphasis)" },
  fiber:    { label: "Fiber",         icon: "fa-seedling",  style: "background:var(--bs-success-bg-subtle);color:var(--bs-success-text-emphasis)" },
  sodium:   { label: "Sodium",        icon: "fa-cube",      style: "background:#fce7f3;color:#db2777" }
};

// Object: حالة التطبيق (State). بنحدّثها كل ما الوصفة تتغير.
const state = {
  currentRecipe: recipes[0],
  viewedRecipes: [recipes[0].name]   // Array: سجل الوصفات اللي اتعرضت
};

// Object: بيجمع كل عناصر الصفحة اللي بنتعامل معاها في مكان واحد.
const elements = {
  card: document.getElementById("recipe-card"),
  image: document.getElementById("recipe-image"),
  placeholder: document.getElementById("recipe-placeholder"),
  ratingAverage: document.getElementById("rating-average"),
  ratingQuantity: document.getElementById("rating-quantity"),
  prepTime: document.getElementById("prep-time-display"),
  cookTime: document.getElementById("cook-time-display"),
  servings: document.getElementById("servings-display"),
  difficulty: document.getElementById("difficulty-badge"),
  category: document.getElementById("category-badge"),
  name: document.getElementById("recipe-name"),
  description: document.getElementById("recipe-description"),
  timeWarning: document.getElementById("time-warning"),
  ingredientsList: document.getElementById("ingredients-list"),
  instructionsList: document.getElementById("instructions-list"),
  nutritionList: document.getElementById("nutrition-list"),
  tipsList: document.getElementById("tips-list"),
  tryAnotherBtn: document.getElementById("try-another-btn"),
  mainNav: document.getElementById("mainNav"),
  navToggleIcon: document.querySelector(".navbar-toggler i")
};


/* ==========================================================
   3) FUNCTIONS
   ========================================================== */

/* ---------- دوال مساعدة (Helpers) ---------- */

// تحمي الصفحة من أي HTML داخل النصوص
function escapeHTML(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ترجع كلاسات لون الصعوبة من الـ Object، ولو المستوى مش موجود ترجع Easy
function getDifficultyClasses(level) {
  return difficultyStyles[level] || difficultyStyles.Easy;
}

// ترجع true لو وقت التحضير أكتر من 45 دقيقة
function isLongPrep(recipe) {
  return recipe.prepTime > 45;
}

/* ---------- دوال بناء الـ HTML (كل واحدة بتاخد Array أو Object وترجع نص HTML) ---------- */

// Array.map() بيحوّل كل مكوّن لعنصر <li>، و join("") بيدمجهم
function buildIngredientsHTML(ingredients) {
  return ingredients
    .map(function (item, index) {
      return `
        <li class="d-flex align-items-start gap-3">
          <span class="wfd-num-sm">${index + 1}</span>
          <span class="text-body-secondary">${escapeHTML(item)}</span>
        </li>`;
    })
    .join("");
}

function buildInstructionsHTML(instructions) {
  return instructions
    .map(function (step, index) {
      return `
        <div class="d-flex align-items-start gap-3">
          <span class="wfd-num-lg">${index + 1}</span>
          <p class="text-body-secondary mb-0 pt-2">${escapeHTML(step)}</p>
        </div>`;
    })
    .join("");
}

// Object.keys() بيجيب مفاتيح الـ Object كـ Array عشان نلف عليها بـ map
function buildNutritionHTML(nutrition) {
  return Object.keys(nutritionDisplay)
    .map(function (key) {
      const info = nutritionDisplay[key];   // بيانات العرض (Object)
      const value = nutrition[key];         // القيمة من الوصفة
      return `
        <div class="col-12 col-md-6">
          <div class="wfd-nutri-card d-flex align-items-center justify-content-between p-3">
            <div class="d-flex align-items-center gap-3">
              <span class="wfd-nutri-icon" style="${info.style}"><i class="fa-solid ${info.icon}"></i></span>
              <span class="fw-medium small">${info.label}</span>
            </div>
            <span class="fw-bold fs-6 fs-md-5">${escapeHTML(value)}</span>
          </div>
        </div>`;
    })
    .join("");
}

function buildTipsHTML(tips) {
  return tips
    .map(function (tip) {
      return `
        <div class="wfd-tip d-flex align-items-start gap-3 p-3">
          <i class="fa-solid fa-circle-check text-warning-emphasis fs-5 mt-1"></i>
          <p class="text-body-secondary mb-0">${escapeHTML(tip)}</p>
        </div>`;
    })
    .join("");
}

/* ---------- دوال العرض (Render) ---------- */

// تعرض الصورة أو الصورة البديلة لو الوصفة مالهاش صورة
function renderImage(recipe) {
  if (recipe.image) {
    elements.image.src = recipe.image;
    elements.image.alt = recipe.name;
    elements.image.classList.remove("d-none");
    elements.placeholder.classList.remove("show");
  } else {
    elements.image.classList.add("d-none");
    elements.placeholder.classList.add("show");
  }
}

// تعرض البيانات الأساسية (الاسم، الوقت، التقييم...)
function renderBasicInfo(recipe) {
  elements.name.textContent = recipe.name;
  elements.description.textContent = recipe.description;
  elements.category.textContent = recipe.category;
  elements.ratingAverage.textContent = recipe.rating.toFixed(1);
  elements.ratingQuantity.textContent = "(" + recipe.reviews + " reviews)";
  elements.prepTime.textContent = recipe.prepTime + " min";
  elements.cookTime.textContent = recipe.cookTime + " min";
  elements.servings.textContent = recipe.servings + " people";

  elements.difficulty.textContent = recipe.difficulty;
  elements.difficulty.className = "badge rounded-pill " + getDifficultyClasses(recipe.difficulty);
}

// تظهر أو تخفي تحذير الوقت الطويل
function renderTimeWarning(recipe) {
  const show = isLongPrep(recipe);
  elements.timeWarning.classList.toggle("d-none", !show);
  elements.timeWarning.classList.toggle("d-flex", show);
}

// تعرض محتوى التبويبات الأربعة
function renderTabs(recipe) {
  elements.ingredientsList.innerHTML = buildIngredientsHTML(recipe.ingredients);
  elements.instructionsList.innerHTML = buildInstructionsHTML(recipe.instructions);
  elements.nutritionList.innerHTML = buildNutritionHTML(recipe.nutrition);
  elements.tipsList.innerHTML = buildTipsHTML(recipe.tips);
}

// حركة بسيطة عند تغيير الوصفة
function playFadeAnimation() {
  elements.card.classList.remove("fade-in");
  void elements.card.offsetWidth;   // بيعيد تشغيل الأنيميشن
  elements.card.classList.add("fade-in");
}

// الدالة الرئيسية: بتنادي على باقي دوال العرض
function renderRecipe(recipe) {
  renderImage(recipe);
  renderBasicInfo(recipe);
  renderTimeWarning(recipe);
  renderTabs(recipe);
  playFadeAnimation();
}

/* ---------- دوال اختيار وصفة جديدة ---------- */

// Array.filter() بيشيل الوصفة الحالية من الاختيارات عشان ما تتكررش
function getOtherRecipes() {
  return recipes.filter(function (recipe) {
    return recipe.name !== state.currentRecipe.name;
  });
}

// ترجع وصفة عشوائية من Array
function getRandomItem(list) {
  const randomIndex = Math.floor(Math.random() * list.length);
  return list[randomIndex];
}

// تحدّث الـ state وتضيف اسم الوصفة لسجل المشاهدة (Array.push)
function updateState(recipe) {
  state.currentRecipe = recipe;
  state.viewedRecipes.push(recipe.name);
}

// تُنفَّذ عند الضغط على زر "Try Another Recipe"
function showAnotherRecipe() {
  const choices = getOtherRecipes();
  if (choices.length === 0) return;   // مفيش وصفات تانية

  const nextRecipe = getRandomItem(choices);
  updateState(nextRecipe);
  renderRecipe(nextRecipe);
}

/* ---------- دالة قائمة الجوال ---------- */

// تغيّر أيقونة القائمة بين ☰ و ✕ حسب حالة القائمة
function setNavIcon(isOpen) {
  elements.navToggleIcon.classList.toggle("fa-bars", !isOpen);
  elements.navToggleIcon.classList.toggle("fa-xmark", isOpen);
}

/* ---------- دالة التشغيل ---------- */

function init() {
  renderRecipe(state.currentRecipe);

  elements.tryAnotherBtn.addEventListener("click", showAnotherRecipe);
  elements.mainNav.addEventListener("show.bs.collapse", function () { setNavIcon(true); });
  elements.mainNav.addEventListener("hide.bs.collapse", function () { setNavIcon(false); });
}

// ابدأ التطبيق
init();
