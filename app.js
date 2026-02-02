/**************
 * MOCK DATA  *
 **************/
const DATA = {
  // Категории первого экрана
  categories: [
    { slug: "radiatory", title: "Радиаторы", image: "img/радиатор-обложка.png" },
    { slug: "truby", title: "Трубы", image: "img/Труба_металлопластиковая.png" },
    { slug: "fitingi", title: "Фитинги", image: "img/фитинг.png" },
    { slug: "armatura", title: "Запорная арматура", image: "img/запорная-арматура.png" },
    { slug: "welding_machine", title: "Сварочное оборудование", image: "img/296.png" },
  ],

  // Подкатегории
  subcategories: {
    radiatory: [
      { slug: "alyuminievye", title: "Алюминиевые", image: "img/радиатор-алюм.png" },
      { slug: "bimetallicheskie", title: "Биметаллические", image: "img/бимет-радиатор.png" },
      { slug: "stalnye", title: "Стальные", image: "img/радиатор-обложка.png" },
    ],
    truby: [
      { slug: "polipropilenovye_truby", title: "Полипропиленовые трубы", image: "img/политрубы.png" },
      { slug: "pe-rt-pipes", title: "PE-RT Трубы", image: "img/Труба_металлопластиковая.png" },
      { slug: "truby_naruzhnoj_kanalizatsii", title: "Трубы наружной канализации", image: "img/Трубы наружной канализации.png" },
      { slug: "truby_vnutrennej_kanalizatsii", title: "Трубы внутренней канализации", image: "img/Трубы внутренней канализации.png" },
      { slug: "maloshumnaja_kanalizatsija", title: "Трубы малошумной канализации", image: "img/1828.png" },
      { slug: "pnd-pipes", title: "Трубы ПНД", image: "img/871.png" },
      { slug: "sistema_iz_nerzhaveyushchej_stali", title: "Система из нержавеющей стали", image: "img/SS_Sys4.png" },
      { slug: "sistema_trub_pex", title: "Системы полиэтиленовых труб и аксиальных фитингов", image: "img/системаполиэт.png" },
      { slug: "sistema_metalloplastikovykh_trub", title: "Система металлопластиковых труб", image: "img/системаметalo.jpg" },
    ],
    fitingi: [
      { slug: "fitingi_ppr_belye", title: "Фитинги PPR белые", image: "img/1575.png" },
      { slug: "fitingi_polipropilenovye_serye", title: "Фитинги PPR серые", image: "img/1587.png" },
      { slug: "compression-fittings", title: "Компрессионные фитинги", image: "img/1435.png" },
      { slug: "fitingi_naruzhnoj_kanalizatsii", title: "Фитинги наружной канализации", image: "img/999.png" },
      { slug: "fitingi_vnutrennej_kanalizatsii", title: "Фитинги внутренней канализации", image: "img/1028.png" },
      { slug: "fitingi_maloshumnoj_kanalizatsii", title: "Фитинги малошумной канализации", image: "img/1809.png" },
      { slug: "rezbovye-latunnye-fitingi", title: "Резьбовые латунные фитинги", image: "img/латуньФитингpng.png" },
    ],
    tekhnicheskaya_teploizolyatsiya: [
      { slug: "trubnaya-teploizolyatsiya", title: "Трубная теплоизоляция", image: "img/тепло.jpg" },
    ],
  },

  // Списки товаров по пути "категория/подкатегория"
  productLists: {
    "radiatory/stalnye": [
      { id: "Adera-eco-500-80", title: "Радиатор стальной Adera Eco 500-80", image: "img/prod_radiator_st.png", inStock: true, brand:"Adera" },
      { id: "Adera-premium-500-80", title: "Радиатор стальной Adera Premium 500-80", image: "img/prod_radiator_st.png", inStock: true, brand:"Adera" },
      { id: "steel-compact-22", title: "Радиатор стальной Compact 22", image: "img/prod_radiator_st.png", inStock: true, brand:"Kermi" },
      { id: "steel-ventil-22", title: "Радиатор стальной Ventil 22", image: "img/prod_radiator_st.png", inStock: true, brand:"Kermi" },
      { id: "steel-universal-11", title: "Радиатор стальной Universal 11", image: "img/prod_radiator_st.png", inStock: false, brand:"Prado" },
      { id: "steel-universal-22", title: "Радиатор стальной Universal 22", image: "img/prod_radiator_st.png", inStock: true, brand:"Prado" },
    ],
    "radiatory/bimetallicheskie": [
      { id: "bi-eco-500-80", title: "Радиатор биметаллический 500-80", image: "img/prod_radiator_bi.png", inStock: true, brand:"Rifar" },
    ],
    "armatura": [
      { id: "valve-12-lammin-120-12", title: "Вентиль регулируемый прямой 1/2\" (Lammin) 120/12", image: "img/prod_radiator_bi.png", inStock: true,  brand: "Lammin" },
      { id: "ball-valve-12", title: "Кран шаровый 1/2\"", image: "img/prod_radiator_bi.png", inStock: false, brand: "Adera" }
    ],
  },

  // Детальные карточки (id -> объект)
  products: {
    "Adera-eco-500-80": {
      id:"Adera-eco-500-80",
      title:"Радиатор стальной Adera Eco 500-80",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{
        "Межосевое расстояние":"500 мм",
        "Тип":"Стальной, панельный 22",
        "Подключение":"Нижнее/боковое",
        "Рабочее давление":"10 бар",
        "Гарантия":"5 лет"
      }
    },
    "Adera-premium-500-80": {
      id:"Adera-premium-500-80",
      title:"Радиатор стальной Adera Premium 500-80",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{
        "Межосевое расстояние":"500 мм",
        "Тип":"Стальной, панельный 22",
        "Покрытие":"Порошковая эмаль",
        "Рабочее давление":"10 бар",
        "Гарантия":"7 лет"
      }
    },
    "steel-compact-22": {
      id:"steel-compact-22",
      title:"Радиатор стальной Compact 22",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{ "Тип":"Панельный 22", "Подключение":"Боковое", "Цвет":"Белый RAL9016" }
    },
    "steel-ventil-22": {
      id:"steel-ventil-22",
      title:"Радиатор стальной Ventil 22",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{ "Тип":"Панельный 22", "Подключение":"Нижнее", "Цвет":"Белый RAL9016" }
    },
    "steel-universal-11": {
      id:"steel-universal-11",
      title:"Радиатор стальной Universal 11",
      image:"img/prod_radiator_st.png",
      inStock:false,
      specs:{ "Тип":"Панельный 11", "Подключение":"Боковое", "Цвет":"Белый" }
    },
    "steel-universal-22": {
      id:"steel-universal-22",
      title:"Радиатор стальной Universal 22",
      image:"img/prod_radiator_st.png",
      inStock:true,
      specs:{ "Тип":"Панельный 22", "Подключение":"Боковое", "Цвет":"Белый" }
    },
    "al-eco-500-80": {
      id:"al-eco-500-80",
      title:"Радиатор алюминиевый Adera Eco 500-80",
      image:"img/prod_radiator_al.png",
      inStock:true,
      specs:{ "Материал":"Алюминий", "Межосевое":"500 мм", "Давление":"16 бар" }
    },
    "al-premium-500-80": {
      id:"al-premium-500-80",
      title:"Радиатор алюминиевый Adera Premium 500-80",
      image:"img/prod_radiator_al.png",
      inStock:true,
      specs:{ "Материал":"Алюминий", "Межосевое":"500 мм", "Давление":"16 бар" }
    },
    "bi-eco-500-80": {
      id:"bi-eco-500-80",
      title:"Радиатор биметаллический 500-80",
      image:"img/prod_radiator_bi.png",
      inStock:true,
      specs:{ "Материал":"Сталь+алюминий", "Межосевое":"500 мм", "Давление":"20 бар" }
    }
  },

  // ===== ЭТОН =====
  etonCategories: [],        // [{slug,title,image}]
  etonProductLists: {},      // { cat_slug: [ {id,title,image,guarantee} ] }
  etonProducts: {},           // { id: { ... } }

  // ===== MVI =====
  mviCategories: [],        // [{slug,title,image}]
  mviProductLists: {},      // { cat_slug: [ {id,title,image,guarantee} ] }
  mviProducts: {},           // { id: { ... } }

  // ===== WILO =====
  wiloCategories: [],
  wiloProductLists: {},
  wiloProducts: {}
};

const SHEETS = {
  SPREADSHEET_ID: '1zmVH_kfenPsV8xlCgC9Exoq0MNIon1tl6qb0SBK3c44',
  GID_LISTS: '0',
  GID_PRODUCTS: '633840799',
  GID_VARIANTS: '1471602747',

  // ЭТОН
  GID_ETON_LISTS: '1461399925',     // eton_lists: slug,title,image,sort
  GID_ETON_PRODUCTS: '1594140669',   // Eton_Products: id,cat_slug,title/tittle,image,guarantee,description,specs,certificate,passport,calc,sort

  // ===== MVI =====
  GID_MVI_LISTS: '723511329',
  // GID_MVI_PRODUCTS: '1538985894',

  // ===== WILO =====
  GID_WILO_LISTS: '1665348286',
  GID_WILO_PRODUCTS: '238907566',
};

// ===== helpers =====
function gvizUrl(gid){
  return `https://docs.google.com/spreadsheets/d/${SHEETS.SPREADSHEET_ID}/gviz/tq?tqx=out:json&gid=${gid}`;
}

async function fetchGViz(gid){
  const res = await fetch(gvizUrl(gid), { cache: 'no-store' });
  const txt = await res.text();
  const json = JSON.parse(
    txt.replace(/^[^\n]*\n?/, '')
       .replace(/google\.visualization\.Query\.setResponse\(|\);$/g, '')
  );
  const cols = json.table.cols.map(c => c.label);
  const rows = json.table.rows.map(r => {
    const obj = {};
    r.c.forEach((cell,i)=> { obj[cols[i]] = cell ? (cell.f ?? cell.v) : null; });
    return obj;
  });
  return rows;
}

// ===== helpers for safe urls / sheet columns =====
function safeUrl(u) {
  const s = String(u || "").trim();
  return s ? encodeURI(s) : "";
}

// на случай если в Sheets назвали колонку чуть иначе (cat_title, cat title, Cat_Title)
function pick(row, keys) {
  for (const k of keys) {
    if (row && row[k] != null && String(row[k]).trim() !== "") return row[k];
  }
  return "";
}


// ===== injected styles =====
(function injectTitleStyles(){
  if (document.getElementById("etonTitleStyles")) return;
  const st = document.createElement("style");
  st.id = "etonTitleStyles";
  st.textContent = `
    .title-center { text-align:center; margin: 28px 0 18px; }
    .title-center .title-line {
      width: 220px; height: 3px; margin: 10px auto 0;
      background: #000; border-radius: 10px;
    }

    /* ===== ETON CARD (Idea 1: image top, text bottom) ===== */
    .eton-card{
      display:block;
      border-radius:18px;
      overflow:hidden;
      background:#fff;
      box-shadow: 0 10px 30px rgba(0,0,0,.08);
      text-decoration:none;
      color:inherit;
    }
    .eton-card-img{
      height: 140px;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      background-color:#f3f5f8;
    }
    .eton-card-body{
      padding: 14px 16px 16px;
      display:flex;
      align-items:flex-start;
      justify-content:space-between;
      gap: 12px;
    }
    .eton-card-title{
      font-weight:700;
      font-size:18px;
      line-height:1.25;
    }
    .eton-card-meta{
      margin-top:6px;
      font-size:14px;
      opacity:.7;
    }
    .eton-card-arrow{
      width:38px;
      height:38px;
      border-radius:50%;
      display:flex;
      align-items:center;
      justify-content:center;
      background:#3b2aa5;
      color:#fff;
      flex: 0 0 auto;
      box-shadow: 0 8px 18px rgba(59,42,165,.25);
    }
  `;
  document.head.appendChild(st);
})();


// Картинки категорий MVI задаём КОДОМ по cat_slug
const MVI_CATEGORY_IMAGES = {
  nasosy: "img/Насосы.png",
  kollektory: "img/Коллекторы.jpg",
  "kontrolno-izmeritelnye-pribory": "img/Манометр.jpg",
  "krany-mvi": "img/Краны_MVI.png",
  "sistema-iz-otsinkovannoy-stali": "img/Система из оцинкованной стали.jpg",
  "tekhnicheskaya_teploizolyatsiya": "img/ТЕХтепло.jpg",
  "truboprovodnye-sistemy": "img/аксесуары.jpg",
};


/**
 * Гидратируем DATA.productLists и DATA.products из Google Sheets.
 * + ЭТОН (категории -> товары -> карточка)
 */
async function hydrateProductsFromSheets(){
  const [lists, prods, variantsRows, mviListsRows] = await Promise.all([
  fetchGViz(SHEETS.GID_LISTS),
  fetchGViz(SHEETS.GID_PRODUCTS),
  SHEETS.GID_VARIANTS ? fetchGViz(SHEETS.GID_VARIANTS) : Promise.resolve([]),
  fetchGViz(SHEETS.GID_MVI_LISTS) // ✅ MVI как Lammin
]);;

  // ===== основной каталог: productLists =====
  const map = {};
  for (const row of lists) {
    const brand = String(row.brand || "").trim().toLowerCase();

    if (brand === "mvi") continue;

    const cat = (row.cat_slug || "").trim();
    const sub = (row.sub_slug || "").trim();
    const id = (row.id || "").trim();
    const title = (row.title || "").trim();

    if (!cat) continue;
    if (!id && !title) continue;

    const path = sub ? `${cat}/${sub}` : cat;
    if (!map[path]) map[path] = [];

    map[path].push({
      id,
      title,
      image: (row.image || "").trim(),
      inStock: String(row.inStock || "").trim().toLowerCase() === "true",
      brand: row.brand || "Lammin"
    });
  }

  Object.keys(map).forEach(key => {
    map[key].sort((a, b) => a.title.localeCompare(b.title, "ru"));
  });

  DATA.productLists = map;

  // ===== основной каталог: products =====
  const prodMap = {};
  for (const row of prods) {
    const brand = String(row.brand || "").trim().toLowerCase();

    if (brand === "mvi") continue;

    const id = (row.id || "").trim();
    if (!id) continue;

    let specs = {};
    try {
      specs = row.specs_json ? JSON.parse(row.specs_json) : {};
    } catch {
      specs = {};
    }

    prodMap[id] = {
      id,
      title: row.title || "",
      image: row.image || "",
      inStock: String(row.inStock || "").toLowerCase() === "true",
      brand: row.brand || "Lammin",
      specs
    };
  }

  DATA.products = prodMap;

  // автогенерация карточек из list, если нет в products
  for (const row of lists) {
    const brand = String(row.brand || "").trim().toLowerCase();
    if (brand === "mvi") continue; // ❌ MVI не автогенерим

    const id = (row.id || "").trim();
    if (!id) continue;

    if (!prodMap[id]) {
      prodMap[id] = {
        id,
        title: row.title || "",
        image: row.image || "",
        inStock: String(row.inStock || "").toLowerCase() === "true",
        brand: row.brand || "Lammin",
        specs: {}
      };
    }
  }

  // варианты (если есть)
  if (variantsRows && variantsRows.length) {
    const vmap = {};
    for (const r of variantsRows) {
      const pid = (r.product_id || '').trim();
      if (!pid) continue;
      if (!vmap[pid]) vmap[pid] = [];
      vmap[pid].push({
        "Вариант": r.variant_title || '',
        "Наличие": r.availability || '',
        "Код": r.code || '',
        _sort: Number(r.sort || 0)
      });
    }

    Object.keys(vmap).forEach(pid=>{
      vmap[pid].sort((a,b)=>{
        if (a._sort !== b._sort) return a._sort - b._sort;
        return String(a["Вариант"]).localeCompare(String(b["Вариант"]),'ru');
      });
    });

    Object.keys(prodMap).forEach(pid=>{
      if (vmap[pid] && vmap[pid].length) {
        prodMap[pid].specs = vmap[pid].map(({_sort, ...rest}) => rest);
      }
    });
  }

  DATA.productLists = map;
  DATA.products = prodMap;

  // ===== ЭТОН =====
  try {
    const [etonCatsRows, etonProdRows] = await Promise.all([
      fetchGViz(SHEETS.GID_ETON_LISTS),
      fetchGViz(SHEETS.GID_ETON_PRODUCTS)
    ]);

    DATA.etonCategories = (etonCatsRows || [])
      .filter(r => (r.slug || "").trim())
      .sort((a,b)=> Number(a.sort||0) - Number(b.sort||0))
      .map(r => ({
        slug: (r.slug || "").trim(),
        title: r.title || r.tittle || "",
        image: r.image || ""
      }));

    const etonListMap = {};
    const etonProdMap = {};

    (etonProdRows || []).forEach(r => {
      const cat = (r.cat_slug || "").trim();
      const id = (r.id || "").trim();
      if (!cat || !id) return;

      const title = r.title || r.tittle || "";
      if (!etonListMap[cat]) etonListMap[cat] = [];
      etonListMap[cat].push({
        id,
        title,
        image: r.image || "",
        guarantee: r.guarantee || "",
        _sort: Number(r.sort || 0)
      });

      etonProdMap[id] = {
        id,
        cat_slug: cat,
        title,
        image: r.image || "",
        guarantee: r.guarantee || "",
        description: r.description || "",
        specs: r.specs || "",
        certificate: r.certificate || "",
        passport: r.passport || "",
        calc: r.calc || ""
      };
    });

    Object.keys(etonListMap).forEach(cat=>{
      etonListMap[cat].sort((a,b)=>{
        if ((a._sort||0) !== (b._sort||0)) return (a._sort||0) - (b._sort||0);
        return String(a.title||"").localeCompare(String(b.title||""), "ru");
      });
      etonListMap[cat] = etonListMap[cat].map(({_sort, ...rest}) => rest);
    });

    DATA.etonProductLists = etonListMap;
    DATA.etonProducts = etonProdMap;

  } catch(e) {
    console.warn("ETON sheets fallback (нет доступа/ошибка):", e);
  }


// ===== MVI (один лист: MVI_LISTS как categories + products) =====
// ===== MVI (один лист: MVI_LISTS как categories + products) =====
try {
  // IMPORTANT:
  // Чтобы русские названия работали, в Google Sheets (лист MVI_LISTS) должна быть колонка: cat_title
  // Пример колонок: brand | cat_slug | cat_title | id | title | image | inStock | sort

  const rowsAll = (mviListsRows || []).filter(r => String(r.cat_slug || "").trim());

  // если у тебя в листе есть brand = mvi — оставляем только mvi, иначе берём всё (чтобы не было "пусто")
  const hasBrand = rowsAll.some(r => String(r.brand || "").trim() !== "");
  const rows = hasBrand
    ? rowsAll.filter(r => String(r.brand || "").trim().toLowerCase() === "mvi")
    : rowsAll;

  // 1) Категории MVI (уникальные cat_slug)
  const catMap = {}; // cat_slug -> {slug,title,image,sort}

  rows.forEach(r => {
    const cat = String(r.cat_slug || "").trim();
    if (!cat) return;

    // пробуем взять cat_title разными вариантами имени колонки
    const titleFromSheet = String(pick(r, ["cat_title", "cat title", "Cat_title", "CAT_TITLE", "catTitle"])).trim();

    // если cat_title пустой — делаем читаемый fallback
    const pretty = cat
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, s => s.toUpperCase());

    if (!catMap[cat]) {
      catMap[cat] = {
        slug: cat,
        title: titleFromSheet || pretty,
        image: MVI_CATEGORY_IMAGES[cat] || "img/no-photo.png",
        sort: Number(r.cat_sort || r.sort || 0)
      };
    } else {
      // если сначала было пусто, но позже встретилось нормальное название — обновим
      if (titleFromSheet && (!catMap[cat].title || catMap[cat].title === pretty)) {
        catMap[cat].title = titleFromSheet;
      }
      const s = Number(r.cat_sort || r.sort || 0);
      if (s && !catMap[cat].sort) catMap[cat].sort = s;
    }
  });

  DATA.mviCategories = Object.values(catMap).sort((a,b) => {
    const da = Number(a.sort || 0), db = Number(b.sort || 0);
    if (da !== db) return da - db;
    return String(a.title||"").localeCompare(String(b.title||""), "ru");
  });

  // 2) Товары MVI по категориям
  const listMap = {}; // cat_slug -> [ {id,title,image,inStock,brand} ]
  const prodMap = {}; // id -> {id,cat_slug,title,image,inStock,brand}

  rows.forEach(r => {
    const cat = String(r.cat_slug || "").trim();
    const id  = String(r.id || "").trim();
    if (!cat || !id) return;

    const item = {
      id,
      title: String(r.title || "").trim() || id,
      image: safeUrl(r.image) || "img/no-photo.png",
      inStock: String(r.inStock || "").trim().toLowerCase() === "true",
      brand: String(r.brand || "MVI").trim() || "MVI",
      _sort: Number(r.sort || 0)
    };

    if (!listMap[cat]) listMap[cat] = [];
    listMap[cat].push(item);

    prodMap[id] = {
      id,
      cat_slug: cat,
      title: item.title,
      image: item.image,
      inStock: item.inStock,
      brand: item.brand
    };
  });

  Object.keys(listMap).forEach(cat => {
    listMap[cat].sort((a,b)=>{
      const sa = Number(a._sort||0), sb = Number(b._sort||0);
      if (sa !== sb) return sa - sb;
      return String(a.title||"").localeCompare(String(b.title||""), "ru");
    });
    listMap[cat] = listMap[cat].map(({_sort, ...rest}) => rest);
  });

  DATA.mviProductLists = listMap;
  DATA.mviProducts = prodMap;

  console.log("✅ MVI categories:", DATA.mviCategories);
  console.log("✅ MVI lists keys:", Object.keys(DATA.mviProductLists||{}));

} catch(e) {
  console.warn("MVI sheets fallback:", e);
}


  // ===== WILO =====
  try {
    const [wiloCatsRows, wiloProdRows] = await Promise.all([
      fetchGViz(SHEETS.GID_WILO_LISTS),
      fetchGViz(SHEETS.GID_WILO_PRODUCTS)
    ]);

    DATA.wiloCategories = (wiloCatsRows || [])
      .filter(r => (r.slug || "").trim())
      .sort((a,b)=> Number(a.sort||0) - Number(b.sort||0))
      .map(r => ({
        slug: (r.slug || "").trim(),
        title: r.title || r.tittle || "",
        image: r.image || ""
      }));

      const wiloListMap = {};
      const wiloProdMap = {};

      (wiloProdRows || []).forEach(r => {
        const cat = (r.cat_slug || "").trim();
        const id  = (r.id || "").trim();
        if (!cat || !id) return;

        const title = r.title || r.tittle || "";

        if (!wiloListMap[cat]) wiloListMap[cat] = [];
        wiloListMap[cat].push({
          id,
          title,
          image: r.image || "",
          guarantee: r.guarantee || "",
          _sort: Number(r.sort || 0)
        });

         wiloProdMap[id] = {
          id,
          cat_slug: cat,
          title,
          image: r.image || "",
          guarantee: r.guarantee || "",
          description: r.description || "",
          specs: r.specs || "",
          certificate: r.certificate || "",
          passport: r.passport || "",
          calc: r.calc || ""
         };
      });

      Object.keys(wiloListMap).forEach(cat=>{
        wiloListMap[cat].sort((a,b)=>{
          if ((a._sort||0) !== (b._sort||0)) return (a._sort||0) - (b._sort||0);
          return String(a.title||"").localeCompare(String(b.title||""), "ru");
         });
         wiloListMap[cat] = wiloListMap[cat].map(({_sort, ...rest}) => rest);
      });
      
      DATA.wiloProductLists = wiloListMap;
      DATA.wiloProducts = wiloProdMap;
  } catch(e) {
    console.warn("WILO sheets fallback:", e);
  }
}

/****************
 * MINI ROUTER  *
 ****************/
const lamminApp = document.getElementById("lamminApp");
const etonApp = document.getElementById("etonApp");
const mviApp = document.getElementById("mviApp");
const wiloApp = document.getElementById("wiloApp");
const breadcrumbs = document.getElementById("breadcrumbs");

// ===== Lammin STATIC + VIEW =====
function ensureLamminLayout() {
  if (document.getElementById("lamminStaticHeader")) return;

  lamminApp.innerHTML = `
    <div id="lamminStaticHeader"></div>
    <div id="lamminViewRoot"></div>
  `;
}

function setLamminHeader(html) {
  ensureLamminLayout();
  document.getElementById("lamminStaticHeader").innerHTML = html;
}

function setLamminView(html) {
  ensureLamminLayout();
  document.getElementById("lamminViewRoot").innerHTML = html;
}


const routesMain = {
  "/": renderHome,
  "/category/:cat": renderCategory,
  "/category/:cat/:sub": renderProductList,
  "/product/:id": renderProductDetail,
};

const routesEton = {
  "/eton/:cat": renderEtonList,
  "/eton/:cat/:id": renderEtonProduct,
};

const routesMvi = {
  "/mvi/:cat": renderMviList,
  "/mvi/:cat/:id": renderMviProduct,
};

const routesWilo = {
  "/wilo/:cat": renderWiloList,
  "/wilo/:cat/:id": renderWiloProduct,
};

function isWiloPath(path){
  return path && path.startsWith("/wilo/");
}


function parseHash(){
  const full = location.hash.slice(1);
  if (!full) return null;
  const [path] = full.split("?");
  return path.startsWith("/") ? path : null;
}

function matchRoute(path, routes){
  for(const [pattern, handler] of Object.entries(routes)){
    const keys = [];
    const regex = new RegExp("^" + pattern
      .replace(/\//g,"\\/").replace(/:([A-Za-z0-9_]+)/g, (_,k)=>{keys.push(k); return "([^\\/]+)";}) + "$");
    const m = path.match(regex);
    if(m){
      const params = {}; keys.forEach((k,i)=>params[k]=decodeURIComponent(m[i+1]));
      return { handler, params, pattern };
    }
  }
  return null;
}

function navigate(to){ location.hash = to; }

window.addEventListener("hashchange", render);
window.addEventListener("DOMContentLoaded", async () => {
  try { await hydrateProductsFromSheets(); }
  catch(e){ console.warn('Sheets fallback: остаёмся на локальных данных', e); }

  lamminApp.style.display = "block";
  render();
});

function isEtonPath(path){
  return path && path.startsWith("/eton/");
}

function isMviPath(path){
  return path && path.startsWith("/mvi/");
}

function render(){
  const path = parseHash();
  if (!path) { navigate("/"); return; }

  // WILO всегда видно снизу, если мы НЕ внутри /wilo/...
  if (!isWiloPath(path)) {
    wiloApp.style.display = "block";
    renderWiloStaticSection();
  }

  // === ЭТОН ===
  if (isEtonPath(path)) {
    renderHome({ hideEtonSection: true, hideMviSection: false }); // WILO здесь не трогаем
    etonApp.style.display = "block";
    mviApp.style.display  = "none";

    const matchedE = matchRoute(path, routesEton);
    if (!matchedE) { navigate("/"); return; }
    setBreadcrumbs(path, matchedE.params);
    matchedE.handler(matchedE.params);
    return;
  }

  // === MVI ===
  if (isMviPath(path)) {
    renderHome({ hideEtonSection: false, hideMviSection: true }); // WILO здесь не трогаем
    etonApp.style.display = "none";
    mviApp.style.display  = "block";

    const matchedM = matchRoute(path, routesMvi);
    if (!matchedM) { navigate("/"); return; }
    setBreadcrumbs(path, matchedM.params);
    matchedM.handler(matchedM.params);
    return;
  }

  // === WILO (открыт каталог WILO) ===
  if (isWiloPath(path)) {
    renderHome({ hideEtonSection: false, hideMviSection: false });
    etonApp.style.display = "none";
    mviApp.style.display  = "none";
    wiloApp.style.display = "block";

    const matchedW = matchRoute(path, routesWilo);
    if (!matchedW) { navigate("/"); return; }
    setBreadcrumbs(path, matchedW.params);
    matchedW.handler(matchedW.params);
    return;
  }

  // === Lammin ===
  etonApp.style.display = "none";
  mviApp.style.display  = "none";
  // wiloApp тут уже показан renderWiloStaticSection()

  const matched = matchRoute(path, routesMain);
  if(!matched){ navigate("/"); return; }
  setBreadcrumbs(path, matched.params);
  matched.handler(matched.params);
}



/********************
 * RENDER FUNCTIONS *
 ********************/
function cardHTML({title,image,href}){
  const img = safeUrl(image) || "img/no-photo.png";
  return `
    <a class="card" href="${href}">
      <div class="card-media" style="background-image:url('${img}')"></div>
      <div class="card-overlay"></div>
      <div class="card-body">
        <div class="card-title">${title}</div>
        <div class="card-arrow" aria-hidden="true">
          <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
        </div>
      </div>
    </a>
  `;
}


function brandCardHTML({ title, image, href }) {
  const img = safeUrl(image) || "img/no-photo.png";
  return `
    <a class="eton-card" href="${href}">
      <div class="eton-card-img" style="background-image:url('${img}')"></div>
      <div class="eton-card-body">
        <div class="eton-card-title">${title}</div>
        <div class="eton-card-arrow">›</div>
      </div>
    </a>
  `;
}



// ===== ETON Card (Idea 1) =====
function etonCardHTML({ title, image, href, meta = "" }) {
  const img = safeUrl(image) || "img/no-photo.png";
  return `
    <a class="eton-card" href="${href}">
      <div class="eton-card-img" style="background-image:url('${img}')"></div>
      <div class="eton-card-body">
        <div>
          <div class="eton-card-title">${title}</div>
          ${meta ? `<div class="eton-card-meta">${meta}</div>` : ""}
        </div>
        <div class="eton-card-arrow">›</div>
      </div>
    </a>
  `;
}


function renderHome(opts = {}) {
  const hideEtonSection = !!opts.hideEtonSection;
  const hideMviSection  = !!opts.hideMviSection;
  const hideWiloSection = !!opts.hideWiloSection;

  setLamminHeader(`
    <div class="catalog-header">
      <h1 class="section-title main-title">Каталог</h1>
      <div class="search-wrapper">
        <input type="text" id="globalSearch" placeholder="Поиск товаров (Lammin + ЭТОН)..." autocomplete="off" class="search-input"/>
        <div id="searchSuggestions" class="suggestions"></div>
      </div>
    </div>

    <div style="margin-top:26px;">
      <div class="title-center">
        <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции Lammin</h2>
        <div class="title-line"></div>
      </div>
    </div>
  `);

  setLamminView(`
  <div class="grid">
    ${DATA.categories.map(c => brandCardHTML({
      title: c.title,
      image: c.image,
      href: `#/category/${c.slug}`
    })).join("")}
  </div>

  ${hideEtonSection ? "" : `
    <!-- ETON -->
    <div style="margin-top:34px;">
      <div class="title-center">
        <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции ОАО «Завод ЭТОН»</h2>
        <div class="title-line"></div>
      </div>

      ${(!DATA.etonCategories || !DATA.etonCategories.length)
        ? `<div class="subtle" style="text-align:center;">Раздел ЭТОН пока пуст...</div>`
        : `
          <div class="grid">
            ${DATA.etonCategories.map(c => brandCardHTML({
              title: c.title,
              image: c.image || "img/no-photo.png",
              href: `#/eton/${c.slug}`
            })).join("")}
          </div>
        `
      }
    </div>
  `}

  ${hideMviSection ? "" : `
    <!-- MVI -->
    <div style="margin-top:34px;">
      <div class="title-center">
        <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции MVI</h2>
        <div class="title-line"></div>
      </div>

      ${(!DATA.mviCategories || !DATA.mviCategories.length)
        ? `<div class="subtle" style="text-align:center;">Раздел MVI пока пуст...</div>`
        : `
          <div class="grid">
            ${DATA.mviCategories.map(c => brandCardHTML({
              title: c.title,
              image: c.image || "img/no-photo.png",
              href: `#/mvi/${c.slug}`
            })).join("")}
          </div>
        `
      }
    </div>
  `}

`);


  const search = document.getElementById("globalSearch");
  const box = document.getElementById("searchSuggestions");

  search.addEventListener("input", () => showSuggestions(search.value.trim(), box));
  search.addEventListener("focus", () => showSuggestions(search.value.trim(), box));
  document.addEventListener("click", e => {
    if (!e.target.closest(".search-wrapper")) box.innerHTML = "";
  });
}

function etonSectionHTML(){
  return `
    <div style="margin-top:34px;">
      <div class="title-center">
        <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции ОАО «Завод ЭТОН»</h2>
        <div class="title-line"></div>
      </div>

      ${(!DATA.etonCategories || !DATA.etonCategories.length)
        ? `<div class="subtle" style="text-align:center;">Раздел ЭТОН пока пуст. Проверь Google Sheets (листы ЭТОН) или доступ к таблице.</div>`
        : `
          <div class="grid">
            ${DATA.etonCategories.map(c => brandCardHTML({
              title: c.title,
              image: c.image || "img/no-photo.png",
              href: `#/eton/${c.slug}`
            })).join("")}
          </div>
        `
      }
    </div>
  `;
}

function mviSectionHTML(){
  return `
    <div style="margin-top:34px;">
      <div class="title-center">
        <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции MVI</h2>
        <div class="title-line"></div>
      </div>

      ${(!DATA.mviCategories || !DATA.mviCategories.length)
        ? `<div class="subtle" style="text-align:center;">Раздел MVI пока пуст. Проверь лист MVI_Lists.</div>`
        : `
          <div class="grid">
            ${DATA.mviCategories.map(c => brandCardHTML({
              title: c.title,
              image: c.image || "img/no-photo.png",
              href: `#/mvi/${c.slug}`
            })).join("")}
          </div>
        `
      }
    </div>
  `;
}

function wiloSectionHTML(){
  return `
    <div style="margin-top:34px;">
      <div class="title-center">
        <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции Wilo</h2>
        <div class="title-line"></div>
      </div>

      ${(!DATA.wiloCategories || !DATA.wiloCategories.length)
        ? `<div class="subtle" style="text-align:center;">Раздел Wilo пока пуст. Проверь лист Wilo_Lists.</div>`
        : `
          <div class="grid">
            ${DATA.wiloCategories.map(c => brandCardHTML({
              title: c.title,
              image: c.image || "img/no-photo.png",
              href: `#/wilo/${c.slug}`
            })).join("")}
          </div>
        `
      }
    </div>
  `;
}

function showSuggestions(query, box) {
  if (!query) { box.innerHTML = ""; return; }
  const q = query.toLowerCase();

  // ========= Категории Lammin =========
  const lamminCats = (DATA.categories || []).map(c => ({
    kind: "cat",
    source: "lammin",
    slug: c.slug,
    title: c.title || "",
    image: c.image || "img/no-photo.png"
  }));

  // ========= Категории ETON =========
  const etonCats = (DATA.etonCategories || []).map(c => ({
    kind: "cat",
    source: "eton",
    slug: c.slug,
    title: c.title || "",
    image: c.image || "img/no-photo.png"
  }));

  // ========= Товары Lammin =========
  const lamminProducts = Object.values(DATA.products || {}).map(p => ({
    kind: "prod",
    source: "lammin",
    id: p.id,
    title: p.title || "",
    image: p.image || "img/no-photo.png",
    brand: p.brand || "Lammin"
  }));

  // ========= Товары ETON =========
  const etonProducts = Object.values(DATA.etonProducts || {}).map(p => ({
    kind: "prod",
    source: "eton",
    id: p.id,
    cat_slug: p.cat_slug,
    title: p.title || "",
    image: p.image || "img/no-photo.png",
    brand: "ЭТОН"
  }));

  // ========= Фильтрация =========
  const catResults = [...lamminCats, ...etonCats]
    .filter(x => x.title.toLowerCase().includes(q) || x.slug.toLowerCase().includes(q))
    .slice(0, 6);

  const prodResults = [...lamminProducts, ...etonProducts]
    .filter(p =>
      p.title.toLowerCase().includes(q) ||
      (p.brand || "").toLowerCase().includes(q) ||
      (p.id || "").toLowerCase().includes(q)
    )
    .slice(0, 8);

  if (!catResults.length && !prodResults.length) {
    box.innerHTML = `<div class="no-result">Ничего не найдено</div>`;
    return;
  }

  // ========= HTML =========
  let html = "";

  if (catResults.length) {
    html += `
      <div class="suggest-section">
        <div class="suggest-section-title">Категории</div>
        ${catResults.map(c => `
          <div class="suggest-item suggest-cat"
               data-kind="cat"
               data-source="${c.source}"
               data-slug="${c.slug}">
            <img src="${c.image}" class="suggest-img">
            <div>
              <div class="suggest-title">${c.title}</div>
              <div class="suggest-brand">${c.source === "eton" ? "ЭТОН" : "Lammin"}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  if (prodResults.length) {
    html += `
      <div class="suggest-section">
        <div class="suggest-section-title">Товары</div>
        ${prodResults.map(p => `
          <div class="suggest-item"
               data-kind="prod"
               data-source="${p.source}"
               data-id="${p.id}"
               data-cat="${p.cat_slug || ""}">
            <img src="${p.image}" class="suggest-img">
            <div>
              <div class="suggest-title">${p.title}</div>
              <div class="suggest-brand">${p.brand || ""}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  }

  box.innerHTML = html;

  // ========= Кликая навигация =========
  box.querySelectorAll(".suggest-item").forEach(item => {
    item.onclick = () => {
      const kind = item.dataset.kind;
      const source = item.dataset.source;

      if (kind === "cat") {
        const slug = item.dataset.slug;
        location.hash = (source === "eton")
          ? `#/eton/${slug}`           // категория ЭТОН
          : `#/category/${slug}`;      // категория Lammin
      } else {
        const id = item.dataset.id;
        const cat = item.dataset.cat;

        location.hash = (source === "eton")
          ? `#/eton/${cat}/${id}`      // товар ЭТОН
          : `#/product/${id}`;         // товар Lammin
      }

      box.innerHTML = "";
    };
  });
}


function renderCategory({cat}){
  if (DATA.productLists[cat]) {
    renderProductList({ cat, sub: null });
    return;
  }

  const catObj = DATA.categories.find(c => c.slug === cat);
  const subs = DATA.subcategories[cat] || [];
  setLamminView(`
    <a class="back" href="#/"><i></i>Назад</a>
    <h1 class="section-title">${catObj ? catObj.title : "Категория"}</h1>
    <div class="grid">
      ${subs.map(s => cardHTML({
        title: s.title,
        image: s.image,
        href: `#/category/${cat}/${s.slug}`
      })).join("")}
    </div>

    ${etonSectionHTML()}
    ${mviSectionHTML()}
    ${wiloSectionHTML()}
  `);
}

function renderProductList({cat, sub}) {
  const key = sub ? `${cat}/${sub}` : cat;
  const list = (DATA.productLists[key] || []).slice();

  if (!list.length && sub == null) {
    renderCategory({cat});
    return;
  }

  const ITEMS_PER_PAGE = 12;
  const hash = window.location.hash || "";
  const [, query = ""] = hash.split("?");
  const params = new URLSearchParams(query);
  let currentPage = Number(params.get("page")) || 1;

  function paginate(arr, page) {
    const start = (page - 1) * ITEMS_PER_PAGE;
    return arr.slice(start, start + ITEMS_PER_PAGE);
  }

  function createPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    if (totalPages <= 1) return "";

    let html = "";
    function pageButton(page, text = page) {
      const active = page === currentPage ? "active" : "";
      return `<button class="page-btn ${active}" data-page="${page}">${text}</button>`;
    }
    function dots() { return `<span class="dots">…</span>`; }

    html += `<button class="page-btn prev" data-dir="-1">‹</button>`;
    html += pageButton(1);

    if (currentPage > 4) html += dots();
    if (currentPage > 2) html += pageButton(currentPage - 1);
    if (currentPage !== 1 && currentPage !== totalPages) html += pageButton(currentPage);
    if (currentPage < totalPages - 1) html += pageButton(currentPage + 1);
    if (currentPage < totalPages - 3) html += dots();
    if (totalPages > 1) html += pageButton(totalPages);

    html += `<button class="page-btn next" data-dir="1">›</button>`;
    return html;
  }

  function attachPaginationEvents(totalItems) {
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const base = `#/category/${cat}` + (sub ? `/${sub}` : "");

    document.querySelectorAll(".page-btn[data-page]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const page = Number(btn.dataset.page);
        navigate(`${base}?page=${page}`);
      });
    });

    document.querySelectorAll(".page-btn[data-dir]").forEach(btn => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const dir = Number(btn.dataset.dir);
        const page = Math.min(Math.max(1, currentPage + dir), totalPages);
        navigate(`${base}?page=${page}`);
      });
    });
  }

  function draw() {
    const arr = list.slice().sort((a,b)=>a.title.localeCompare(b.title,'ru'));
    const totalPages = Math.ceil(arr.length / ITEMS_PER_PAGE);
    if (currentPage < 1) currentPage = 1;
    if (currentPage > totalPages) currentPage = totalPages || 1;

    const pageItems = paginate(arr, currentPage);

    setLamminView(`
      <a class="back" href="#/${sub ? `category/${cat}` : ''}"><i></i>Назад</a>
      <h1 class="section-title">${sub ? titleSub(cat, sub) : titleFrom(cat)}</h1>

      <div class="grid">
        ${pageItems.map(p => `
          <a class="prod-card" href="#/product/${p.id}">
            <div class="prod-img" style="background-image:url('${p.image}')"></div>
            <div class="badge ${p.inStock ? "in-stock" : "out-stock"}">
              <i></i>${p.inStock ? "В наличии" : "Нет в наличии"}
            </div>
            <div class="prod-title">${p.title}</div>
            <div class="subtle">${p.brand || ""}</div>
          </a>
        `).join("")}
      </div>

      <div class="pagination-wrapper">
        ${createPagination(arr.length)}
      </div>

      ${etonSectionHTML()}
      ${mviSectionHTML()}
      ${wiloSectionHTML()}
    `);

    attachPaginationEvents(arr.length);
  }

  draw();
}

function renderProductDetail({id}){
  const p = DATA.products[id];
  if(!p){ setLamminView(`<p>Товар не найден</p>`); return; }

  const img = p.image && p.image.trim() ? p.image : "img/no-photo.png";
  const specs = p.specs || {};
  const isArray = Array.isArray(specs);

  const specsHTML = isArray
    ? specs.map((v) => {
        const name = v["Вариант"] || v["Название"] || v["Тип"] || "Вариант";
        const code = v["Код"] ? String(v["Код"]) : "";
        const availStr = (v["Наличие"] || "").toString().toLowerCase();
        const inStockVar = availStr && !/нет/.test(availStr);

        return `
          <div class="kv-row">
            <div class="kv-left">
              <div class="kv-name">${name}</div>
              <div class="kv-availability ${inStockVar ? 'on' : 'off'}">
                <i></i><span>${inStockVar ? 'в наличии' : 'нет в наличии'}</span>
              </div>
            </div>
            ${code ? `<div class="kv-right">${code}</div>` : ''}
          </div>
        `;
      }).join("")
    : Object.entries(specs||{}).map(([k,v]) =>
        `<div class="kv-line"><span class="subtle">${k}</span><strong>${v}</strong></div>`
      ).join("");

  setLamminView(`
    <a class="back" href="javascript:history.back()"><i></i>Назад</a>
    <div class="detail">
      <div class="detail-img" style="background-image:url('${img}')"></div>
      <div>
        <h1 class="detail-title">${p.title}</h1>
        <div class="badge" style="margin:10px 0 20px"><i></i>${p.inStock ? "В наличии" : "Нет в наличии"}</div>
        <div class="kv">${specsHTML}</div>
        <div class="btns">
          <button class="btn primary" data-scroll="contact">Связаться</button>
          <button class="btn" onclick="alert('Скоро будет!')">Добавить в сравнение</button>
        </div>
      </div>
    </div>
  `);

  setTimeout(() => {
    const detail = document.querySelector(".detail");
    if (detail) {
      const y = detail.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, 0);
}

/***********************
 * ===== ЭТОН UI ======
 * Рендерим ТОЛЬКО в etonApp (не трогаем app)
 ***********************/
function etonCatTitle(slug){
  return (DATA.etonCategories.find(c=>c.slug===slug)||{}).title || "Категория";
}

function renderEtonList({cat}){
  const list = DATA.etonProductLists[cat] || [];

  etonApp.innerHTML = `
    <div class="title-center" style="margin-top:0;">
      <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции ОАО «Завод Этон»</h2>
      <div class="title-line"></div>
    </div>

    <a class="back" href="#/"><i></i>Закрыть ЭТОН</a>
    <h1 class="section-title" style="margin-top:8px;">${etonCatTitle(cat)}</h1>

    ${(!list.length)
      ? `<div class="subtle">В этой категории пока нет товаров (проверь лист Eton_Products).</div>`
      : `
        <div class="grid">
          ${list.map(p => etonCardHTML({
            title: p.title,
            image: p.image,
            href: `#/eton/${cat}/${p.id}`,
            meta: p.guarantee ? `Гарантия: ${p.guarantee}` : ""
          })).join("")}
        </div>
      `
    }
    
  `;
}

function renderEtonProduct({cat, id}){
  const p = DATA.etonProducts[id];
  if(!p){ etonApp.innerHTML = `<p>Товар не найден</p>`; return; }

  const img = p.image && p.image.trim() ? p.image : "img/no-photo.png";

  etonApp.innerHTML = `
    <a class="back" href="#/eton/${cat}"><i></i>Назад</a>

    <div class="detail eton">
      <div class="detail-img" style="background-image:url('${img}')"></div>
      <div>
        <h1 class="detail-title">${p.title}</h1>
        <div class="subtle" style="margin:8px 0 14px;">
          ${p.guarantee ? `Гарантийный срок эксплуатации: ${p.guarantee}` : ""}
        </div>

        <div class="btns">
          ${p.passport ? `<a class="btn" href="${p.passport}" target="_blank">📄 Паспорт</a>` : ""}
          ${p.certificate ? `<a class="btn" href="${p.certificate}" target="_blank">📑 Сертификат</a>` : ""}
          <button class="btn primary" data-scroll="contact">Заказать</button>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button class="tab active" data-tab="eton-desc">Описание</button>
      <button class="tab" data-tab="eton-specs">Тех. характеристики</button>
      ${p.calc ? `<button class="tab" data-tab="eton-calc">Пример расчёта</button>` : ""}
    </div>

    <div class="tab-content active" id="eton-desc">${p.description || ""}</div>
    <div class="tab-content" id="eton-specs">${p.specs || ""}</div>
    ${p.calc ? `<div class="tab-content" id="eton-calc">${p.calc}</div>` : ""}

    
  `;

  initTabs();
}

function mviCatTitle(slug){
  return (DATA.mviCategories.find(c=>c.slug===slug)||{}).title || "Категория";
}

function renderMviList({cat}){
  const list = DATA.mviProductLists[cat] || [];

  mviApp.innerHTML = `
    <div class="title-center" style="margin-top:0;">
      <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции MVI</h2>
      <div class="title-line"></div>
    </div>

    <a class="back" href="#/"><i></i>Закрыть MVI</a>
    <h1 class="section-title" style="margin-top:8px;">${mviCatTitle(cat)}</h1>

    ${(!list.length)
      ? `<div class="subtle">В этой категории пока нет товаров (проверь лист MVI_LISTS).</div>`
      : `
        <div class="grid">
          ${list.map(p => etonCardHTML({
            title: p.title,
            image: p.image,
            href: `#/mvi/${cat}/${p.id}`,
            meta: p.guarantee ? `Гарантия: ${p.guarantee}` : ""
          })).join("")}
        </div>
      `
    }
  `;
}

function renderMviProduct({cat, id}){
  const p = DATA.mviProducts[id];
  if(!p){ mviApp.innerHTML = `<p>Товар не найден</p>`; return; }

  const img = p.image && p.image.trim() ? p.image : "img/no-photo.png";

  mviApp.innerHTML = `
    <a class="back" href="#/mvi/${cat}"><i></i>Назад</a>

    <div class="detail eton">
      <div class="detail-img" style="background-image:url('${img}')"></div>
      <div>
        <h1 class="detail-title">${p.title}</h1>
        <div class="subtle" style="margin:8px 0 14px;">
          ${p.guarantee ? `Гарантийный срок эксплуатации: ${p.guarantee}` : ""}
        </div>

        <div class="btns">
          ${p.passport ? `<a class="btn" href="${p.passport}" target="_blank">📄 Паспорт</a>` : ""}
          ${p.certificate ? `<a class="btn" href="${p.certificate}" target="_blank">📑 Сертификат</a>` : ""}
          <button class="btn primary" data-scroll="contact">Заказать</button>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button class="tab active" data-tab="mvi-desc">Описание</button>
      <button class="tab" data-tab="mvi-specs">Тех. характеристики</button>
      ${p.calc ? `<button class="tab" data-tab="mvi-calc">Пример расчёта</button>` : ""}
    </div>

    <div class="tab-content active" id="mvi-desc">${p.description || ""}</div>
    <div class="tab-content" id="mvi-specs">${p.specs || ""}</div>
    ${p.calc ? `<div class="tab-content" id="mvi-calc">${p.calc}</div>` : ""}
  `;

  initTabs();
}

function wiloCatTitle(slug){
  return (DATA.wiloCategories.find(c=>c.slug===slug)||{}).title || "Категория";
}

function renderWiloList({cat}){
  const list = DATA.wiloProductLists[cat] || [];

  wiloApp.innerHTML = `
    <div class="title-center" style="margin-top:0;">
      <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции Wilo</h2>
      <div class="title-line"></div>
    </div>

    <a class="back" href="#/"><i></i>Закрыть Wilo</a>
    <h1 class="section-title" style="margin-top:8px;">${wiloCatTitle(cat)}</h1>

    ${(!list.length)
      ? `<div class="subtle">В этой категории пока нет товаров (проверь лист Wilo_Products).</div>`
      : `
        <div class="grid">
          ${list.map(p => etonCardHTML({
            title: p.title,
            image: p.image,
            href: `#/wilo/${cat}/${p.id}`,
            meta: p.guarantee ? `Гарантия: ${p.guarantee}` : ""
          })).join("")}
        </div>
      `
    }
  `;
}

function renderWiloStaticSection() {
  wiloApp.innerHTML = `
    <div style="margin-top:34px;">
      <div class="title-center">
        <h2 style="margin:0; font-size:30px; font-weight:800;">Каталог продукции WILO</h2>
        <div class="title-line"></div>
      </div>

      ${(!DATA.wiloCategories || !DATA.wiloCategories.length)
        ? `<div class="subtle" style="text-align:center;">Раздел WILO пока пуст...</div>`
        : `
          <div class="grid">
            ${DATA.wiloCategories.map(c => brandCardHTML({
              title: c.title,
              image: c.image || "img/no-photo.png",
              href: `#/wilo/${c.slug}`
            })).join("")}
          </div>
        `
      }
    </div>
  `;
}


function renderWiloProduct({cat, id}){
  const p = DATA.wiloProducts[id];
  if(!p){ wiloApp.innerHTML = `<p>Товар не найден</p>`; return; }

  const img = p.image && p.image.trim() ? p.image : "img/no-photo.png";

  wiloApp.innerHTML = `
    <a class="back" href="#/wilo/${cat}"><i></i>Назад</a>

    <div class="detail eton">
      <div class="detail-img" style="background-image:url('${img}')"></div>
      <div>
        <h1 class="detail-title">${p.title}</h1>
        <div class="subtle" style="margin:8px 0 14px;">
          ${p.guarantee ? `Гарантийный срок эксплуатации: ${p.guarantee}` : ""}
        </div>

        <div class="btns">
          ${p.passport ? `<a class="btn" href="${p.passport}" target="_blank">📄 Паспорт</a>` : ""}
          ${p.certificate ? `<a class="btn" href="${p.certificate}" target="_blank">📑 Сертификат</a>` : ""}
          <button class="btn primary" data-scroll="contact">Заказать</button>
        </div>
      </div>
    </div>

    <div class="tabs">
      <button class="tab active" data-tab="wilo-desc">Описание</button>
      <button class="tab" data-tab="wilo-specs">Тех. характеристики</button>
      ${p.calc ? `<button class="tab" data-tab="wilo-calc">Пример расчёта</button>` : ""}
    </div>

    <div class="tab-content active" id="wilo-desc">${p.description || ""}</div>
    <div class="tab-content" id="wilo-specs">${p.specs || ""}</div>
    ${p.calc ? `<div class="tab-content" id="wilo-calc">${p.calc}</div>` : ""}
  `;

  initTabs();
}


function initTabs(){
  const tabs = document.querySelectorAll(".tab");
  if (!tabs.length) return;

  tabs.forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".tab-content").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      const el = document.getElementById(btn.dataset.tab);
      if (el) el.classList.add("active");
    };
  });
}

/****************
 * BREADCRUMBS  *
 ****************/
function titleFrom(cat){
  return (DATA.categories.find(c=>c.slug===cat)||{}).title || "Категория";
}
function titleSub(cat, sub){
  const list = DATA.subcategories[cat]||[];
  return (list.find(s=>s.slug===sub)||{}).title || "Подкатегория";
}

function setBreadcrumbs(path, params){
  const parts = path.split("/").filter(Boolean);
  let html = `<a href="#/">Главная</a>`;

  if(parts[0]==="category" && parts[1]){
    html += ` / <span>${titleFrom(params.cat)}</span>`;
    if(parts[2]) html += ` / <span>${titleSub(params.cat, params.sub)}</span>`;
  }
  else if(parts[0]==="product"){
    const p = DATA.products[params.id];
    html += ` / <span>${p ? p.title : "Товар"}</span>`;
  }
  else if(parts[0]==="eton"){
    html += ` / <span>ЭТОН</span>`;
    if (params.cat) html += ` / <span>${etonCatTitle(params.cat)}</span>`;
    if (params.id) {
      const p = DATA.etonProducts[params.id];
      html += ` / <span>${p ? p.title : "Товар"}</span>`;
    }
  }
  else if(parts[0]==="mvi"){
    html += ` / <span>MVI</span>`;
    if (params.cat) html += ` / <span>${mviCatTitle(params.cat)}</span>`;
    if (params.id) {
      const p = DATA.mviProducts[params.id];
      html += ` / <span>${p ? p.title : "Товар"}</span>`;
    }
  }
  else if(parts[0]==="wilo"){
    html += ` / <span>Wilo</span>`;
    if (params.cat) html += ` / <span>${wiloCatTitle(params.cat)}</span>`;
    if (params.id) {
      const p = DATA.wiloProducts[params.id];
      html += ` / <span>${p ? p.title : "Товар"}</span>`;
    }
  }

  breadcrumbs.innerHTML = html;
}

// Делегирование: ловим клики по элементам с data-scroll
document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-scroll]');
  if (!btn) return;

  const id = btn.dataset.scroll;
  const target = document.getElementById(id);
  if (!target) return;

  const HEADER_OFFSET = 70;
  const y = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  window.scrollTo({ top: y, behavior: 'smooth' });
});


