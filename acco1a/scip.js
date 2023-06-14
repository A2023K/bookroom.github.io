let acco_db = [
    {
        img_src:'',
        name:'Red lake hotel',
        person: 1-2,
        min_max_days:1-5,
        price: 157,
       booking_btn_id:'btn-1',
       id: 'hotel'
    },
    
    {
        img_src:'',
        name:'Blue lake hostel',
        person: 1,
        min_max_days:1-10,
        price:30,
        booking_btn_id:'btn-2',
        id: 'hostel'
    },
    {
        img_src:'',
        name:'Yellow lake motel',
        person: 2-4,
        min_max_days:3-10,
        price:90,
        booking_btn_id:'btn-3',
        id: 'motel'
    },

   {
        img_src:'',
        name:'Pink lake house',
        person:1-4,
        min_max_days:2-15,
        price:240,
        booking_btn_id:'btn-4',
        id: 'house'
    }
]
for(acco in acco_db)
console.log(acco);
let load_start = $(".load-start");
let start_view = $(".start-view");
let start_btn = $("#start-btn");
document.getElementById('start-btn').onclick = function(){
    for(let i=0; i<load_start.length; i++){
    start_view[i].classList.remove('no-display');
    load_start[i].classList.add('no-display');
    }
}
let acco_obj = $(".acco-cards")[0];
acco_obj = acco_db;
acco_obj.id = acco_db.id;
let acco_cards = $(".acco-card")[0];

let received_days_input; // declare as a global variable

let tell_little = $(".tell-little");
let search_box = $(".search-box");
let search_btn_view =$(".search-btn-view");
let btn_check = $('#btn-check');
document.getElementById('btn-check').onclick = function(){
   for(let i=0; i<load_start.length; i++){ 
        search_btn_view[i].classList.remove('no-display');
        tell_little[i].classList.add('no-display');
        search_box[i].classList.add('no-display');
    }  

    let person_input = $("#person-amount-input")[0].value;
     console.log(person_input);
     localStorage.setItem('personInput', person_input);
     let received_person_input = localStorage.getItem('personInput');
     let get_person_input = $("#get-person-input")[0];
    get_person_input.innerHTML = received_person_input;
    let get_person_input_1 = $("#get-person-input-1")[0];
    get_person_input_1.innerHTML = received_person_input;

    let first_date_value = $("#date1")[0].value;
    let second_date_value=$("#date2")[0].value;
    let booking_days = calculate_day_difference(first_date_value,second_date_value);
    console.log(booking_days);
    
    localStorage.setItem('dateInput', booking_days);
    received_days_input = localStorage.getItem('dateInput');
    let get_days = $("#input-days")[0];
    get_days.innerHTML = received_days_input;
    let get_days_1 = $("#input-days-1")[0];
    get_days_1.innerHTML = received_days_input;

    let hotel_cards = $("#hotel")[0];
    let hostel_cards = $("#hostel")[0];
    let motel_cards = $("#motel")[0];
    let house_cards = $("#house")[0];

    // hotel check
    if(person_input >=1 && person_input <= 2 && booking_days >= 1 && booking_days <= 5)
        hotel_cards.classList.remove('no-display');
    else
         hotel_cards.classList.add('no-display');

    if(person_input == 1 && booking_days >= 1 && booking_days <= 10)
       hostel_cards.classList.remove('no-display');
        else
        hostel_cards.classList.add('no-display');

    if(person_input >=2 && person_input <= 4 && booking_days >= 3 && booking_days <= 10)
         motel_cards.classList.remove('no-display');
    else
        motel_cards.classList.add('no-display');

    if(person_input >=1 && person_input <= 4 && booking_days >= 2 && booking_days <= 15)
       house_cards.classList.remove('no-display');
    else
        house_cards.classList.add('no-display');


console.log(document.getElementsByClassName('result-box'));

    if(person_input >= 5 || booking_days >=16){
        document.getElementsByClassName('result-box')[0].classList.remove("no-display");
        document.getElementsByClassName('result-box')[1].classList.remove('no-display');
    }
    else{
         document.getElementsByClassName('result-box')[0].classList.add("no-display");
         document.getElementsByClassName('result-box')[1].classList.add('no-display');
    }
}

// total amount
let booking_btns = $(".booking-btn");
let price_1 = $(".price");
let choose_item_price;
let total_amount;
let name_acco;
let acco_names = $('.acco-name')[0];
let acco_card_names = $('.name');
let get_total_1 = $(".get-total-1")[0];
let booking_box_1 = $(".booking-box-1")[0];
for(let i=0; i<booking_btns.length; i++){
    booking_btns[i].onclick = function(){
        console.log(acco_db[i].price);
        price_1[i] = acco_db[i].price;
        choose_item_price = price_1[i];
       booking_box_1.classList.remove("no-display");
        console.log(received_days_input * acco_db[i].price);
        total_amount = received_days_input * acco_db[i].price;
        get_total_1.innerHTML = total_amount;
        localStorage.setItem('total-money', total_amount);
        acco_card_names[i] = acco_db[i].name;
        console.log(acco_db[i].name)
        name_acco = acco_card_names[i];
        localStorage.setItem('booked-acco-name', name_acco);
        acco_names.innerHTML = name_acco;
    }

}        



let close_btn = $(".close-btn")[0];
close_btn.onclick = func_close;
console.log(close_btn)
function func_close(){
        booking_box_1.classList.toggle("no-display");
}
