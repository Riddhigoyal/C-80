var name_of_the_student=[];
function submit(){
    var display_student_name=[];
    for (var j=1;j<=4;j++){
        var name=document.getElementById("name_of_the_student_"+j).value;
        console.log (name);
        name_of_the_student.push(name);
    }
    console.log (name_of_the_student);
    var length_name_of_the_student=name_of_the_student.length;
    console.log (length_name_of_the_student);
    for(var k=0;k<length_name_of_the_student;k++){
        display_student_name.push("<h4>name-"+name_of_the_student[k]+"</h4>");
        console.log (display_student_name);
    }
    console.log (display_student_name);
    document.getElementById("display_name_with_commas").innerHTML=display_student_name;
    var remove_commas=display_student_name.join(" ");
    console.log (remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}
function sorting(){
   name_of_the_student.sort();
   console.log (name_of_the_student);
   var display_sortting=[];
   var length1=name_of_the_student.length;
   console.log (length1);
   for(var k=0;k<length1;k++){
       display_sortting.push("<h4>name-"+name_of_the_student[k]+"</h4>");
       console.log (display_sortting);
   }
   var removing_commas=display_sortting.join(" ");
   console.log (removing_commas);
   document.getElementById("display_name_without_commas").innerHTML=removing_commas;

}
