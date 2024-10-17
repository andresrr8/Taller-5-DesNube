async function Ver(){
    const cod=document.getElementById('edtcod').value
    try {
        const esperar = Search_register(cod)
        const docSnap = await esperar
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let Html=""
            Html=`
                <div class="card" style="width: 18rem;">
                <img src="${docSnap.data().urlcountry}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${docSnap.data().name}</h5>
                    <p class="card-text">${docSnap.data().codigo}</p>
                    <p class="card-text">${docSnap.data().country}</p>
                    <a href="#" class="btn btn-primary">Delete</a>
                    <a href="#" class="btn btn-primary">Update</a>
                </div>
                </div>
                `
                imprimir.innerHTML=Html
            } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
            }
        } catch (error) {
            console('error',error)
        }
}
    window.addEventListener('DOMContentLoaded', async()=>{
        search.addEventListener('click',Ver)
})