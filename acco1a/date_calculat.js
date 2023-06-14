function calculate_day_difference(first_date_value, second_date_value){
    let first_date = new Date(first_date_value);
    let second_date = new Date(second_date_value);
    let date_difference_in_miliseconds = second_date.getTime() - first_date.getTime();
    let difference_in_days = date_difference_in_miliseconds / (1000*3600*24);
    return difference_in_days;
}




