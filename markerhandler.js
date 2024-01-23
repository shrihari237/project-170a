AFRAME.registerComponent('marker-handler', {
  init: function () {
    this.el.addEventListener('markerFound',()=>{
        this.handleMarkerFound();
        console.log("Marker Found");
    })
    this.el.addEventListener('markerLost',()=>{
        this.handleMarkerLost();
        console.log("Marker Lost");
    })
  },

  handleMarkerFound: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "flex";

    var orderButton = document.getElementById("order-button");
    var orderSummaryButton = document.getElementById("order-summary-button");

    orderButton.addEventListener("click", () => {
      swal({
        icon: "https://i.imgur.com/4NZ6uLY.jpg",
        title: "Tanks For Order!",
        text: "",
        timer: 2000,
        buttons: false,
      });
    });

    orderSummaryButton.addEventListener("click", () => {
      swal({
        icon: "warning",
        title: "Order Summary",
        text: "Work In Progress",
      });
    });
  },
  handleMarkerLost: function () {
    var buttonDiv = document.getElementById("button-div");
    buttonDiv.style.display = "none";
  },
});
