
// const addUserButton = document.getElementById("addUserButton");
// const cancelButton = document.getElementById("cancelAdd");

// function fetchTickets() {
//   fetch("https://freeapi.miniprojectideas.com/api/youtube/GetAllTickets")
//     .then(function (response) {
//       if (!response.ok) {
//         throw new Error("Error: " + response.statusText);
//       }
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data, "Fetched Tickets");
//       displayTickets(data.data);
//     })
//     .catch(function (error) {
//       console.error("Error occurred while fetching ticket info", error);
//     });
// }

// function displayTickets(data) {
//   const ticketData = document.getElementById("ticketData");
//   ticketData.innerHTML = "";

//   data.forEach(function (ticket) {
//     const trow = document.createElement("tr");

//     const tdCustomerName = document.createElement("td");
//     tdCustomerName.innerText = ticket.customerName;
//     trow.appendChild(tdCustomerName);

//     const tdMobileNumber = document.createElement("td");
//     tdMobileNumber.innerText = ticket.mobileNo;
//     trow.appendChild(tdMobileNumber);

//     const tdAdultCount = document.createElement("td");
//     tdAdultCount.innerText = ticket.adultCount;
//     trow.appendChild(tdAdultCount);

//     const tdChildCount = document.createElement("td");
//     tdChildCount.innerText = ticket.childCount;
//     trow.appendChild(tdChildCount);

//     const tdFinalAmount = document.createElement("td");
//     tdFinalAmount.innerText = ticket.finalAmount;
//     trow.appendChild(tdFinalAmount);

//     const tdActions = document.createElement("td");
//     const editButton = document.createElement("button");
//     editButton.classList.add("edit");
//     editButton.innerText = "Edit";

//     editButton.addEventListener("click", function () {
//       console.log("Edit clicked for ticket:", ticket);
//       // const addUserButton = document.getElementById("addUserButton");
//       // addUserButton.style.display = "none";
      
//       formPopulate(ticket);
//     });

//     const deleteButton = document.createElement("button");
//     deleteButton.classList.add("delete");
//     deleteButton.innerText = "Delete";
//     deleteButton.addEventListener("click", function () {
//       console.log("Delete clicked for ticket:", ticket);
//       trow.remove();
//       console.log("ticket deleted", ticket);
//       alert("Ticket deleted successfully");
//     });

//     tdActions.appendChild(editButton);
//     tdActions.appendChild(deleteButton);

//     trow.appendChild(tdActions);

//     ticketData.appendChild(trow);
//   });
// }

// fetchTickets();
// // document.getElementById("addUserButton").addEventListener("click", addNewUser);
// document.getElementById("cancelAdd").addEventListener("click", resetForm);

// function addNewUser() {
//   const customerName = document.getElementById("newCustomerName").value;
//   const mobileNumber = document.getElementById("newMobileNumber").value;
//   const adultCount = document.getElementById("newAdultCount").value;
//   const childCount = document.getElementById("newChildCount").value;
//   const finalAmount = document.getElementById("newFinalAmount").value;

//   if (
//     !customerName ||
//     !mobileNumber ||
//     !adultCount ||
//     !childCount ||
//     !finalAmount
//   ) {
//     alert("All fields are required!");
//     return;
//   }

//   const newUser = {
//     customerName: customerName,
//     mobileNo: mobileNumber,
//     adultCount: parseInt(adultCount),
//     childCount: parseInt(childCount),
//     finalAmount: parseFloat(finalAmount),
//   };
//   console.log("Data being sent:", newUser);

//   fetch("https://freeapi.miniprojectideas.com/api/youtube/AddNewTicket", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(newUser),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Failed to add new user");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       console.log("User added successfully:", data);

//       // addToTable(newUser)
//       fetchTickets()

//       resetForm();
//     })
//     .catch((error) => {
//       console.error("Error adding user:", error);
//     });
// }

// function resetForm() {
//   document.getElementById("newCustomerName").value = "";
//   document.getElementById("newMobileNumber").value = "";
//   document.getElementById("newAdultCount").value = "";
//   document.getElementById("newChildCount").value = "";
//   document.getElementById("newFinalAmount").value = "";
// }

// function addToTable(user) {
//   const ticketData = document.getElementById("ticketData");

//   const trow = document.createElement("tr");

//   trow.innerHTML = `
//     <td>${user.CustomerName}</td>
//     <td>${user.MobileNumber}</td>
//     <td>${user.AdultCount}</td>
//     <td>${user.ChildCount}</td>
//     <td>${user.FinalAmount}</td>
//   `;

//   const tdActions = document.createElement("td");

//   const editButton = document.createElement("button");
//   editButton.classList.add("edit");
//   editButton.innerText = "Edit";
//   editButton.addEventListener("click", function () {
//     console.log("Edit clicked for:", user.CustomerName);
//   });

//   const deleteButton = document.createElement("button");
//   deleteButton.classList.add("delete");
//   deleteButton.innerText = "Delete";
//   deleteButton.addEventListener("click", function () {
//     trow.remove();
//     console.log("Deleted habdhjabsjdd:", user.CustomerName);
//   });

//   tdActions.appendChild(editButton);
//   tdActions.appendChild(deleteButton);
//   trow.appendChild(tdActions);
//   ticketData.appendChild(trow);
// }
// let editingTicketId=null
// function formPopulate(ticket){
//   document.getElementById("newCustomerName").value = ticket.customerName;
//   document.getElementById("newMobileNumber").value = ticket.mobileNo;
//   document.getElementById("newAdultCount").value = ticket.adultCount;
//   document.getElementById("newChildCount").value = ticket.childCount;
//   document.getElementById("newFinalAmount").value = ticket.finalAmount;
//   editingTicketId=ticket.ticketId
//   console.log( "selected the id",editingTicketId);
//   addUserButton.textContent = "Update User";

// }
// addUserButton.addEventListener("click", function () {
//   editingTicketId? updateTicket():addNewUser();
//   console.log(editingTicketId)
  
// });
// cancelButton.addEventListener("click", function () {
//   resetForm();
//   editingTicketId = null;
//   addUserButton.textContent = "Add User"; 
//   cancelButton.style.display = "none"; 
// });

// function updateTicket(){

//   if(!editingTicketId){
//     alert("No ticket id selected");
     
//   }
//  const customerName=document.getElementById("newCustomerName").value
//  const mobileNumber=document.getElementById("newMobileNumber").value
//  const adultCount = document.getElementById("newAdultCount").value;
//   const childCount = document.getElementById("newChildCount").value;
//   const finalAmount = document.getElementById("newFinalAmount").value;

// if(!customerName||
//   !mobileNumber||
//   !adultCount||
//   !childCount||
//   !finalAmount){
//     alert("all fields required")
    
//   }
//   const updatedTicket = {
//     customerName: customerName,
//     mobileNo: mobileNumber,
//     adultCount: parseInt(adultCount),
//     childCount: parseInt(childCount),
//     finalAmount: parseFloat(finalAmount),
//   };
//   fetch(`https://freeapi.miniprojectideas.com/api/youtube/UpdateTicket/${editingTicketId}`,{

// method: "PUT",

// headers:{
//   "Content-type":"application/json",
// },
// body:JSON.stringify(updatedTicket)
//   })
//   .then(function (response) {
//     console.log("Update Response:", response);
//     if (!response.ok) {
//       throw new Error("Failed to update ticket");
//     }
//     return response.json();
//   })
//   .then(function (data) {
//     console.log("Ticket updated successfully:", data);
//     alert("Ticket updated successfully!");
//     fetchTickets(); 
//     resetForm();
//     editingTicketId = null;
//   })
//   .catch(function (error) {
//     console.error("Error updating ticket:", error);
//   });
// }
 

const addUserButton = document.getElementById("addUserButton");
const cancelButton = document.getElementById("cancelAdd");

let editingTicketId = null; 


function fetchTickets() {
  fetch("https://freeapi.miniprojectideas.com/api/youtube/GetAllTickets")
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Error: " + response.statusText);
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data, "Fetched Tickets");
      displayTickets(data.data);
    })
    .catch(function (error) {
      console.error("Error occurred while fetching ticket info", error);
    });
}


function displayTickets(data) {
  const ticketData = document.getElementById("ticketData");
  ticketData.innerHTML = "";

  data.forEach(function (ticket) {
    const trow = document.createElement("tr");

    const tdCustomerName = document.createElement("td");
    tdCustomerName.innerText = ticket.customerName;
    trow.appendChild(tdCustomerName);

    const tdMobileNumber = document.createElement("td");
    tdMobileNumber.innerText = ticket.mobileNo;
    trow.appendChild(tdMobileNumber);

    const tdAdultCount = document.createElement("td");
    tdAdultCount.innerText = ticket.adultCount;
    trow.appendChild(tdAdultCount);

    const tdChildCount = document.createElement("td");
    tdChildCount.innerText = ticket.childCount;
    trow.appendChild(tdChildCount);

    const tdFinalAmount = document.createElement("td");
    tdFinalAmount.innerText = ticket.finalAmount;
    trow.appendChild(tdFinalAmount);

    const tdActions = document.createElement("td");
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = "Edit";
    editButton.addEventListener("click", function () {
      console.log("Edit clicked for ticket:", ticket);
      formPopulate(ticket);
    });

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function () {
      console.log("Delete clicked for ticket:", ticket);
      trow.remove();
      console.log("Ticket deleted", ticket);
      alert("Ticket deleted successfully");
    });

    tdActions.appendChild(editButton);
    tdActions.appendChild(deleteButton);

    trow.appendChild(tdActions);

    ticketData.appendChild(trow);
  });
}

fetchTickets();


addUserButton.addEventListener("click", function () {
  if (editingTicketId) {
    updateTicket();  
  } else {
    addNewUser();    
  }
});


cancelButton.addEventListener("click", function () {
  resetForm();
  editingTicketId = null;
  addUserButton.textContent = "Add User"; 
  cancelButton.style.display = "none"; 
});


function formPopulate(ticket) {
  document.getElementById("newCustomerName").value = ticket.customerName;
  document.getElementById("newMobileNumber").value = ticket.mobileNo;
  document.getElementById("newAdultCount").value = ticket.adultCount;
  document.getElementById("newChildCount").value = ticket.childCount;
  document.getElementById("newFinalAmount").value = ticket.finalAmount;
  editingTicketId = ticket.ticketId;
  addUserButton.textContent = "Update User"; 
  cancelButton.style.display = "inline-block"; 
}


function resetForm() {
  document.getElementById("newCustomerName").value = "";
  document.getElementById("newMobileNumber").value = "";
  document.getElementById("newAdultCount").value = "";
  document.getElementById("newChildCount").value = "";
  document.getElementById("newFinalAmount").value = "";
}


function addNewUser() {
  const customerName = document.getElementById("newCustomerName").value;
  const mobileNumber = document.getElementById("newMobileNumber").value;
  const adultCount = document.getElementById("newAdultCount").value;
  const childCount = document.getElementById("newChildCount").value;
  const finalAmount = document.getElementById("newFinalAmount").value;

  if (!customerName || !mobileNumber || !adultCount || !childCount || !finalAmount) {
    alert("All fields are required!");
    return;
  }

  const newUser = {
    customerName: customerName,
    mobileNo: mobileNumber,
    adultCount: parseInt(adultCount),
    childCount: parseInt(childCount),
    finalAmount: parseFloat(finalAmount),
  };

  fetch("https://freeapi.miniprojectideas.com/api/youtube/AddNewTicket", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add new user");
      }
      return response.json();
    })
    .then(() => {
      alert("User added successfully!");
      fetchTickets();
      resetForm();
    })
    .catch((error) => {
      console.error("Error adding user:", error);
    });
}


function updateTicket() {
  const customerName = document.getElementById("newCustomerName").value;
  const mobileNumber = document.getElementById("newMobileNumber").value;
  const adultCount = document.getElementById("newAdultCount").value;
  const childCount = document.getElementById("newChildCount").value;
  const finalAmount = document.getElementById("newFinalAmount").value;
  

  if (!customerName || !mobileNumber || !adultCount || !childCount || !finalAmount) {
    alert("All fields are required!");
    return;
  }

  const updatedTicket = {
    ticketId:editingTicketId,
    customerName: customerName,
    mobileNo: mobileNumber,
    adultCount: parseInt(adultCount),
    childCount: parseInt(childCount),
    finalAmount: parseFloat(finalAmount),
    
  };
console.log("here is up",updateTicket);
  fetch(`https://freeapi.miniprojectideas.com/api/youtube/UpdateTicket`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedTicket),
   
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error("Failed to update ticket");
      }
      return response.json();
    })
    .then(function () {
      alert("Ticket updated successfully!");
      fetchTickets();
      resetForm();
      editingTicketId = null;
    })
    .catch(function (error) {
      console.error("Error updating ticket:", error);
    });
}

  
 
