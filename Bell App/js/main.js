var rent = document.querySelector(".rent");
rent.addEventListener("click", openPage);
function openPage(){
    window.location.assign("/register.html");
}


// var check = function() {
//   if (document.getElementById('password').value ==
//     document.getElementById('confirm_password').value) {
//     document.getElementById('confirm_password').style.border = '1px solid green';
//   } else {
//     document.getElementById('confirm_password').style.color = '1px solid red';
//   }
// }




// $(document).ready(function() {

//     var jobCount = $('#list .in').length;
//     $('.list-count').text(jobCount + ' items');
      
    
//     $("#search-text").keyup(function () {
//        //$(this).addClass('hidden');
    
//       var searchTerm = $("#search-text").val();
//       var listItem = $('#list').children('li');
    
      
//       var searchSplit = searchTerm.replace(/ /g, "'):containsi('")
      
//         //extends :contains to be case insensitive
//     $.extend($.expr[':'], {
//     'containsi': function(elem, i, match, array)
//     {
//       return (elem.textContent || elem.innerText || '').toLowerCase()
//       .indexOf((match[3] || "").toLowerCase()) >= 0;
//     }
//   });
      
      
//       $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
//         $(this).addClass('hiding out').removeClass('in');
//         setTimeout(function() {
//             $('.out').addClass('hidden');
//           }, 300);
//       });
      
//       $("#list li:containsi('" + searchSplit + "')").each(function(e) {
//         $(this).removeClass('hidden out').addClass('in');
//         setTimeout(function() {
//             $('.in').removeClass('hiding');
//           }, 1);
//       });
      
    
//         var jobCount = $('#list .in').length;
//       $('.list-count').text(jobCount + ' items');
      
//       //shows empty state text when no jobs found
//       if(jobCount == '0') {
//         $('.slider-next-container').addClass('empty');
//       }
//       else {
//         $('.slider-next-container').removeClass('empty');
//       }
      
//     });
  
    
                    
        
//        // An extra! This function implements
//        // jQuery autocomplete in the searchbox.
//        // Uncomment to use :)
       
       
//    function searchList() {                
//       //array of list items
//       var listArray = [];
    
//        $(".slider-next-container div").each(function() {
//       var listText = $(this).text().trim();
//         listArray.push(listText);
//       });
      
//       $('#search-text').autocomplete({
//           source: listArray
//       });
      
      
//     }
                                     
//     searchList();
  
    
                      
//   });
  



