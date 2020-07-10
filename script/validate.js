const date_to = document.getElementById('date_to');

const date_from = document.getElementById('date_from');

const date_form = document.getElementById('date_form');

let getter = document.getElementById('getter');


function getdateValue(){
    
     let date_to2 = date_to.value;
     let date_year_to = date_to2.slice(0, 4);
     let date_month_to = date_to2.slice(5, 7);
     let date_day_to = date_to2.slice(8, 10);
     let date_year_num_to = parseInt(date_year_to);
     let date_month_num_to = parseInt(date_month_to);
     let date_day_num_to = parseInt(date_day_to);

     let date_from2 = date_from.value;
     let date_year_from = date_from2.slice(0, 4);
     let date_month_from = date_from2.slice(5, 7);
     let date_day_from = date_from2.slice(8, 10);
     let date_year_num_from = parseInt(date_year_from);
     let date_month_num_from = parseInt(date_month_from);
     let date_day_num_from = parseInt(date_day_from);

     let month_array = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //Array for all the days of each month in a year
 

  if(date_year_num_from <= date_year_num_to){

     let index_month_start = date_month_num_from - 1; //Month From Value in array that will be changing
     let index_month_stop = date_month_num_from - 1; //Month From Value in the array that will remain constant

     let index_month_from = date_month_num_from - 1;

     let index_month_to_end = date_month_num_to - 1;

     let index_month_to = date_month_num_to - 1;

     let month_days = month_array[index_month_start]; //This is the total number of Days

     let month_days_total = 0;

     let date_year_from_check = date_year_num_from;

     let index_month_less_start = date_month_num_from - 1;

     let index_month_less_stop = date_month_num_from - 1;
     
     while(date_year_from_check <= date_year_num_to){

         if(date_month_num_to < date_month_from){
             
             if(date_year_from_check < date_year_num_to){

                 do{
                     month_days_total += month_array[index_month_less_start];
                     index_month_less_start++;
                     if(index_month_less_start == 12){
                         index_month_less_start = 0;   
                     }
                     
                 }

                 while(index_month_less_start != index_month_less_stop );
                 date_year_from_check++;
             }

             if(date_year_from_check == date_year_num_to){
                 while(index_month_to_end != index_month_from){
                     month_days_total -= month_array[index_month_to_end];
                     index_month_to_end++;
                     if(index_month_to_end == 12 && index_month_from != 11){
                         index_month_to_end == 0;
                     }
                 }
                 date_year_from_check++;
             }

             let date_day_difference_from = month_array[index_month_from] - date_day_num_from;
             let total_num_days = month_days_total +  date_day_num_to + date_day_difference_from;

         }

         if(date_month_num_from <= date_month_num_to){

             if(date_year_from_check < date_year_num_to){

                 do {
                     month_days_total += month_array[index_month_start ]; 
                     index_month_start++;
                     if(index_month_start == 12 && index_month_stop != 12){
                         index_month_start = 0;
                     }
                     
                 }
                 while(index_month_start != index_month_stop);
                 date_year_from_check++;
             }

             if(date_year_from_check == date_year_num_to){

                 while(index_month_start < index_month_to){
 
                     month_days_total += month_array[index_month_start];
                     index_month_start++;
                     if(index_month_start == 12 && index_month_to != 11){
                         index_month_start = 0;
                     }
                   
                }
 
                    
                  date_year_from_check++;
             }
         }  
         let day_difference = date_day_num_to - date_day_num_from;
  
        let total_num_days = Math.abs(month_days_total + day_difference);
     };

  };

  
  let total_years = Math.floor(total_num_days/365);

  let weeks = total_num_days - (total_years * 365);

  let total_weeks = Math.floor(weeks/7);

  let days = weeks - (total_weeks * 7);

  let final_days = Math.floor(days);

  let total_hours = total_num_days * 24;

  let total_minutes = total_hours * 60;

  let total_seconds = total_minutes * 60;

  if(total_years == 1){
      let total_years_final = total_years + " Year";
  }
  else{
      let total_years_final = total_years + " Years";
  }

  if(total_weeks == 1){
    let total_weeks_final = total_weeks + " Week";
    }
    else{
    let total_weeks_final = total_weeks + " Weeks";
    }

    if(final_days== 1){
        let total_days_final = final_days + " Day";
        }
    else{
        let total_days_final = final_days + " Days";
        }

  if(total_years != 0 && total_weeks != 0 && final_days != 0){
    
        getter.innerHTML = total_years_final +", " + total_weeks_final +", "  + total_days_final;
     
  }

 if(total_years == 0){

    getter.innerHTML = total_weeks_final +", "  + total_days_final;
 }
 if(total_weeks == 0){
    getter.innerHTML = total_years_final +", "  + total_days_final;
 }
 if(final_days == 0){
    getter.innerHTML = total_years_final +", "  + total_weeks_final;
 }

 if((total_years == 0) && (total_weeks == 0)) {
    getter.innerHTML = total_days_final; 
  }
  if((total_weeks == 0) && (final_days == 0)) {
    getter.innerHTML = total_years_final; 
  }
  if((total_years == 0) && (final_days == 0)) {
    getter.innerHTML = total_weeks_final; 
  }

  if(date_to.value === date_from.value){
    getter.innerHTML = "Same Date";
}

 document.getElementById('total_days').innerHTML = total_num_days + " Days";

 document.getElementById('total_hours').innerHTML = total_hours + " Hours";

 document.getElementById('total_minutes').innerHTML = total_minutes + " Minutes";

 document.getElementById('total_seconds').innerHTML = total_seconds + " Seconds";

 if((date_year_num_to < date_year_num_from) || ((date_month_num_to < date_month_num_from) && (date_year_num_to == date_year_num_from)) || ((date_month_num_to == date_month_num_from) && (date_year_num_to == date_year_num_from) && (date_day_num_to < date_day_num_from))){

    alert("Please Enter the Correct form of Date....!!!! The Date to should not be Less than That of the Date From (Try It again)...... Thanks!!!");
    document.getElementById('getter').innerHTML = "Please Try Again";

    document.getElementById('total_days').innerHTML ="";

    document.getElementById('total_hours').innerHTML ="";
   
    document.getElementById('total_minutes').innerHTML ="";
   
    document.getElementById('total_seconds').innerHTML ="";
  }
}
