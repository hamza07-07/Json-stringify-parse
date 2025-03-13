

let storeData = []

function run() {

    let todoTitle = document.getElementById("todoTitle").value
    let todoMsg = document.getElementById("todoMsg").value

    if (todoTitle==="" || todoMsg ===""){
        alert("Please Fill out values")
        return false;
    }

    else{

        let todoData = {
            title: todoTitle,
            msg: todoMsg
        }
    
        console.log(todoData);
 
        // localStorage.setItem("todolist", JSON.stringify(storeData))
        storeData.push(todoData)
        localStorage.setItem("todolist", JSON.stringify(storeData))
        showData()
    
        document.getElementById("todoTitle").value = ""
        document.getElementById("todoMsg").value = ""
        return true;
    }

   
}

function showData() {
    let displayData = JSON.parse(localStorage.getItem("todolist"));

    let showCard = "";

    displayData.forEach(element => {
        showCard += `
            <div class="task-item">
                <div class="row align-items-center">
                    <div class="col-md-9">
                        <h5 class="task-title">${element.title}</h5>
                        <p class="task-description mb-0">${element.msg}</p>
                    </div>
                    <div class="col-md-3 text-end text-actions">
                        <button class="btn btn-outline-primary btn-sm me-1" title="Edit Task">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-outline-danger btn-sm" title="Delete Task">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        `
    

    document.getElementById("displayData").innerHTML = showCard
});
}
showData()