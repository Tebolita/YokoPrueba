
function ShowPopUp(EditOrCreate, name = "", email = "", status = ""){
    Swal.fire({
        title: EditOrCreate + " User",
        showDenyButton: true,
        denyButtonText: `Cancel`,
        confirmButtonText: EditOrCreate,
        html: `
        <!-- Input Name -->
        <div class="mb-3 text-start">
            <label for="name" class="form-label">Name<span style="color: red;" >*</span> </label>
            <input type="text" class="form-control" id="name" value="${name}">
        </div>

        <!-- Input Email -->
        <div class="mb-3 text-start">
            <label for="email" class="form-label">Email<span style="color: red;">*</span> </label>
            <input type="email" class="form-control" id="email" placeholder="email@example.com.com" value="${email}">
        </div>

        <!-- Select Permissions -->
        <div class="mb-3 text-start">
            <label for="permissions" class="form-label">User Permissions
                <span style="color: red;">*</span> 
                <span title="This is a test">?</span> 
            </label>
            <select class="form-select">
                <option selected>Operational</option>
                <option value="1">Security</option>
                <option value="2">Developer</option>
                <option value="3">Designer</option>
            </select>
        </div> 
        
        <!-- Check select -->
        <div class="mb-3 text-start">
            <label for="status" class="form-label">Status<span style="color: red;">*</span> </label>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="status" ${status}>
                <label class="form-check-label" for="status" >Inactive</label>
            </div>   
        </div>    
        `
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("User " + EditOrCreate + "!", "", "success");
        } 
    });
}
