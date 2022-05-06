const submitbtn= document.getElementById('submit');
let msgbox= document.getElementById('msg');
let passbox= document.getElementById('passcheck');
let form= document.getElementById('linkForm');
submitbtn.addEventListener('click',(e)=>{
    e.preventDefault();
if (msgbox.value.trim() == '' ) {
   alert('Please Enter Your valuable messege for your relative?')
} else {
   if(passbox.value.length == 1){
       alert('if you want to add password,than enter grether than 5 character.');
   }else{
    if( confirm("are you sure ?")){
        let data = new FormData(form);
        // console.log(data);
        // fetch('./php/save-data.php',{
        //     method:"post",
        //     body: JSON.stringify(data),
        //     headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"}
        // })
        // .then((res)=> res.text())
        // .then((data)=>{ console.log(data)})
        // .catch((err)=> console.log(err));
    }else{
        return false;
    }
   }
}
});