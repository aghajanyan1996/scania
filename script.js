let slider = document.querySelector('.mtcr_left')
let next = document.querySelector('.next_top')
let prev = document.querySelector('.prev_bottom')



///////////////////////////////////////////////////SLIDER\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

let slider_arr = ['img/truck1.png', 'img/truck2.png', 'img/truck3.png', 'img/truck4.png']
let x = 0;
slider.style.background = `url(${slider_arr[0]})`
slider.style.backgroundSize = "contain"
slider.style.backgroundPosition = "center"
slider.style.backgroundRepeat = "no-repeat"
next.onclick = function () {
    x++;
    if (x == 4) {
        x = 0
        slider.style.background = `url(${slider_arr[x]})`;
        slider.style.transition = "all .7s";
        slider.style.backgroundSize = "contain";
        slider.style.backgroundPosition = "center";
        slider.style.backgroundRepeat = "no-repeat";
    }
    else {
        slider.style.background = `url(${slider_arr[x]})`;
        slider.style.transition = "all .7s";
        slider.style.backgroundSize = "contain";
        slider.style.backgroundPosition = "center";
        slider.style.backgroundRepeat = "no-repeat";
    }
}

prev.onclick = function () {
    x--;
    if (x < 0) {
        x = 3
        slider.style.background = `url(${slider_arr[x]})`;
        slider.style.transition = "all .7s";
        slider.style.backgroundSize = "contain";
        slider.style.backgroundPosition = "center";
        slider.style.backgroundRepeat = "no-repeat";
    }
    else {
        slider.style.background = `url(${slider_arr[x]})`;
        slider.style.transition = "all .7s";
        slider.style.backgroundSize = "contain";
        slider.style.backgroundPosition = "center";
        slider.style.backgroundRepeat = "no-repeat";
    }
}


///////////////////// Lezu /////////////////////////////////////////////

let hay_but = document.querySelector('.arm');
let rus_but = document.querySelector('.rus');
let eng_but = document.querySelector('.eng');


////////////////// Zangvac 

let hayArr = ['ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ', 'ԸՆԿԵՐՈՒԹՅՈՒՆ', 'Թափուր աշխատատեղ', 'ԿԱՊ'];
let rusArr = ['УСЛУГИ', 'КОМПАНИЯ', 'ВАКАНСИИ', 'КОНТАКТЫ'];
let engArr = ['SERVICES', 'COMPANY', 'VACANCY', 'CONTACTS'];

let hayArr1 = ['ԲԵՌՆԱՓՈԽԱԴՐՈՒՄՆԵՐ ԵՎՐՈՊԱՅՈՒՄ', 'ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐ', 'ԸՆԿԵՐՈՒԹՅԱՆ ՄԱՍԻՆ'];
let rusArr1 = ['ГРУЗОПЕРЕВОЗКИ ПО ЕВРОПЕ', 'УСЛУГИ', 'О КОМПАНИИ'];
let engArr1 = ['CARGO TRANSPORTATION IN EUROPE', 'SERVICES', 'ABOUT COMPANY'];

let hayArr2 = ['գրասենյակներ', 'Եվրոպայում և ԱՊՀ-ում', 'բեռնատարներ', 'աշխատակիցներ', 'մասնագետներ'];
let rusArr2 = ['офисов', 'В Европе и СНГ', 'грузовиков', 'сотрудников', 'профессионалов'];
let engArr2 = ['offices', 'In Europe and the CIS', 'trucks', 'employees', 'professionals'];

///////////////// DOM_! Start:

let span1 = document.querySelector('.span1');
let li = document.querySelectorAll('.li');
let h1 = document.querySelector('h1');
let nav_p = document.querySelector('.nav_p');
let h2 = document.querySelectorAll('h2');
let left_p = document.querySelector('.left_p');
let next1 = document.querySelector('.next');
let prev1 = document.querySelector('.prev');
let left_button = document.querySelector('.left_button');
let item_p = document.querySelectorAll('.item_p');
let mleft_p = document.querySelector('.mleft_p');
let ofice = document.querySelectorAll('#ofice');
let sec_p = document.querySelector('.sec_p');


///////////////// DOM_! End:

// item_p.style.fontSize = '16px';

//////////////////// hay_but:

hay_but.onclick = function () {
    span1.textContent = 'Մեր գրասենյակները';
    li.forEach((elem, index) => {
        elem.textContent = `${hayArr[index]}`;
    });
    h1.textContent = 'ԲԵՌՆԱՓՈԽԱԴՐՈՒՄՆԵՐ';
    nav_p.textContent = 'Չափազանց մեծ բեռների տեղափոխում Ռուսաստանում և Եվրոպայում: Ամբողջական վերահասցեավորում,բեռների ապահովագրություն, փաթեթավորում և պահեստավորում';
    h2.forEach((elem, index) => {
        elem.textContent = `${hayArr1[index]}`;
    });
    left_p.textContent = 'ԵՄ երկրները, ինչպես նաև Ուկրաինան, Բելառուս բոլոր փաստաթղթերով';
    next1.textContent = 'ՀԵՏՈ';
    prev1.textContent = 'ՀԵՏ';
    left_button.textContent = 'Իմացեք ԱՎԵԼԻՆ';
    item_p.forEach(elem => {
        elem.textContent = 'ԱՎԻԱԲԵՌՆԱՓՈԽԱՌՈՒՄՆԵՐ';
        elem.style.fontSize = '14px';
    });
    mleft_p.textContent = 'Ընկերությունն ինքնին շատ հաջողակ է։ Նրանք են, ովքեր ամենից շատ ատում են դժվարությունները: Նրան ընտրելու դժվարությունները հարձակվում են այնպես, ասես հաճույքը, տարբերությունը վազում է, և իրականում, և նման ժամանակներում, այդ պարտականությունների գյուտարարները իսկապես տարբերվում են, բայց նրանք չեն ճանաչում նրան: Այն, ինչ նրանք չգիտեն, բայց ո՞ւր է նա վազում';
    ofice.forEach((elem, index) => {
        elem.textContent = `${hayArr2[index]}`;
    });
    sec_p.textContent = 'Նևսկու հեռանկար, 127 Սանկտ Պետերբուրգ, Ռուսաստան 191024 թ';
};



//////////////////// rus_but:

rus_but.onclick = function () {
    span1.textContent = 'Наши офисы';
    li.forEach((elem, index) => {
        elem.textContent = `${rusArr[index]}`;
    });
    h1.textContent = 'ГРУЗОВЫЕ ПЕРЕВОЗКИ';
    nav_p.textContent = 'Перевозка крупногабаритных грузов по России и Европе. Полное экспедирование, страхование , упаковка и хранение груза.'
    h2.forEach((elem, index) => {
        elem.textContent = `${rusArr1[index]}`;
    });
    left_p.textContent = 'Страны Евросоюза , а так же Украина, Белоруссия со всеми документами';
    next1.textContent = 'СЛЕД';
    prev1.textContent = ' НАЗАД ';
    left_button.textContent = 'ПОДРОБНЕЕ';
    item_p.forEach(elem => {
        elem.textContent = 'АВИАПЕРЕВОЗКИ';
        elem.style.fontSize = '16px';
    });
    mleft_p.textContent = 'Сама компания очень успешная. Именно они больше всего ненавидят неприятности. Трудности выбора его нападают, как будто удовольствие, различие бежит, и, по правде говоря, и в подобные времена, изобретатели этих обязанностей действительно различимы, но они не знают его. Чего они не знают, но куда она бежит?';
    ofice.forEach((elem, index) => {
        elem.textContent = `${rusArr2[index]}`;
    });
    sec_p.textContent = 'Невский проспект, 127 Санкт-Петербург Россия 191024';
};




//////////////////// eng_but:

eng_but.onclick = function () {
    span1.textContent = 'Our offices';
    li.forEach((elem, index) => {
        elem.textContent = `${engArr[index]}`;
    });
    h1.textContent = 'TRUCK TRANSPORTATION';
    nav_p.textContent = 'Transportation of large-sized cargo across Russia and Europe. Full shipping, insurance, packaging and storage of goods.'
    h2.forEach((elem, index) => {
        elem.textContent = `${engArr1[index]}`;
    });
    left_p.textContent = 'Countries of the European Union, as well as Ukraine, Belarus with all documents';
    next1.textContent = 'AFTER';
    prev1.textContent = '  BACK';
    left_button.textContent = 'LEARN MORE';
    item_p.forEach(elem => {
        elem.textContent = 'AIR FREIGHT';
    });
    item_p.forEach(elem => {
        elem.textContent = 'AIR FREIGHT';
        elem.style.fontSize = '18px';
    });
    mleft_p.textContent = 'The company itself is very successful. They are the ones who hate trouble the most. Difficulties of choosing him attack as if pleasure, distinction runs, and, in truth, and in times like these, the inventors of these duties are indeed distinguishable, but they do not know him. What they dont know, but where is she running?';
    ofice.forEach((elem, index) => {
        elem.textContent = `${engArr2[index]}`;
    });
    sec_p.textContent = 'Nevsky prospect, 127 St. Petersburg Russia 191024';
};





