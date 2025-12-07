const user = [
    {first:"T-Shirts",last:"Xl",email:"Phnom Penh"},

   ]


   const userForm = document.getElementById("userForm");
   const datauser = document.getElementById("datauser");
   const indexUser = document.getElementById("indexUser")

   const RenderData = () =>{
    datauser.innerHTML = ""
    user.forEach((e,index)=>{
        datauser.innerHTML += `
        <tr class="align-middle">
            <td>${e.first}</td>
            <td>${e.last}</td>
            <td>${e.email}</td>
            <td>
                <button class="btn bg-danger text-light py-1 mb-1gh" onclick="Deleted(${index})"> 
                <i class="bi bi-trash"></i></button>
                <button class="btn bg-success text-light" onclick="Edit(${index})"> 
                <i class="bi bi-pencil-square"></i></button>
            </td>
        </tr>`
    })
   }
   userForm.addEventListener("submit",(e) =>{
    e.preventDefault();

    const firstname = document.getElementById("firstname").value.trim();
    const lastname = document.getElementById("lastname").value.trim();
    const email = document.getElementById("email").value.trim();

  
    if(indexUser.value == ""){
        user.push({first:firstname,last:lastname,email:email})
        showToast("បញ្ចូលត្រឹមត្រូវ👍","#0f4d0f")
    }else{
        user[indexUser.value] = {first:firstname,last:lastname,email:email}
        showToast("Update ត្រឺមត្រូវ👌","green")
    }

    document.getElementById("firstname").value = ""; 
    document.getElementById("lastname").value = ""; 
    document.getElementById("email").value = ""; 
    RenderData();
   })

   function Edit(index){
        const firstname = document.getElementById("firstname");
        const lastname  = document.getElementById("lastname");
        const email     = document.getElementById("email");

        indexUser.value = index
        firstname.value = user[index].first
        lastname.value = user[index].last
        email.value  = user[index].email

   }
   
   function Deleted(index){
    user.splice(index,1);
    showToast("Deleted ត្រឺមត្រូវ👋","danger")
    RenderData();
   }

   function showToast(message,color){
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // top or bottom
        position: "right", // left, center or right
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: color,
        },
        onClick: function(){} // Callback after click
      }).showToast();
   }

   RenderData();
