const body = document.querySelector('body');
const tabsBtn = document.querySelectorAll('.bike-tabs__btn');
const bikeMount = document.querySelector('.bike__mount');
const bikeWoman = document.querySelector('.bike__woman');
const tabsBtnMobile = document.querySelectorAll('.bike-tabs__btn_mobile');
const tabsBtnText = document.querySelectorAll('.bike-title_mobile');
const tabsBtnArrow = document.querySelectorAll('.bike-arrow_mobile');

// select tabs
function selectTypeBike(tabs) {
    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            if (i === 0) {
                bikeMount.style.display = 'block';
                bikeWoman.style.display = 'none';
                if (body.offsetWidth > 575) {
                    tabs[0].classList.add('tabs-active');
                    tabs[1].classList.remove('tabs-active');
                } else {
                    tabs[0].style.borderRadius = '20px 20px 0 0';
                    tabs[1].style.borderRadius = '20px';
                    tabsBtnText[0].style.color = '#3922C5';
                    tabsBtnText[1].style.color = '#0C0C0C';
                    tabsBtnArrow[0].style.transform = 'translateY(-52%) rotate(180deg)';
                    tabsBtnArrow[1].style.transform = 'translateY(-50%)';
                }
            } else {
                bikeMount.style.display = 'none';
                bikeWoman.style.display = 'block';
                if (body.offsetWidth > 575) {
                    tabs[0].classList.remove('tabs-active');
                    tabs[1].classList.add('tabs-active');
                } else {
                    tabs[0].style.borderRadius = '20px';
                    tabs[1].style.borderRadius = '20px 20px 0 0';
                    tabsBtnText[0].style.color = '#0C0C0C';
                    tabsBtnText[1].style.color = '#3922C5';;
                    tabsBtnArrow[0].style.transform = 'translateY(-50%)';
                    tabsBtnArrow[1].style.transform = 'translateY(-52%) rotate(180deg)';
                }
            }
        })
    })
}
selectTypeBike(tabsBtn);
selectTypeBike(tabsBtnMobile);

const featuresMount = ['Двойной обод', 'Алюминиевый сплав', 'Колеса диаметром 26 дюймов', 'Покрышки 26х1,95"'];
const featuresWoman = ['Стальная рама', 'Колеса диаметром 24 дюймов', 'Жесткая вилка', '7 скоростей'];

const featureList = document.querySelectorAll('.bike-features__list');
const addForm = document.querySelectorAll('.bike-add-feature__wrap');
const addInput = document.querySelectorAll('.add-feature');

// create and add feature
function featuresFilling(arr, list, addForm, input) {
    
    for (let i = 0; i < arr.length; i++) {
        const li = document.createElement('li');
        list.append(li);
        li.classList.add('bike-features__item');
        li.innerHTML = arr[i];
    }
   
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFeature = input.value;
        if (newFeature !== '') {
            arr.push(newFeature);
            console.log(arr);
            list.innerHTML = '';
            for (let i = 0; i < arr.length; i++) {
                const li = document.createElement('li');
                list.append(li);
                li.classList.add('bike-features__item');
                li.innerHTML = arr[i];
            }
        }
    }) 

}
featuresFilling(featuresMount, featureList[0], addForm[0], addInput[0]);
featuresFilling(featuresWoman, featureList[1], addForm[1], addInput[1]);




