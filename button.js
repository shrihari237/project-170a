AFRAME.registerComponent('createbuttons',{
    init: function(){

        // Order Button
        var button1 = document.createElement('button');
        button1.innerHTML = 'ORDER NOW';
        button1.setAttribute('id','order-button');
        button1.setAttribute('class',"btn btn-danger ml3 mr3")
   
        //Bill Button
        var button2 = document.createElement('button');
        button2.innerHTML = 'ORDER SUMMARY';
        button2.setAttribute('id','order-summary-button');
        button2.setAttribute('class',"btn btn-danger ml3")

        //APPEND SOMEWHERE

        var buttonDiv = document.getElementById("button-div");
        var markerDiv = document.getElementById("crane-marker");
        buttonDiv.appendChild(button1);
        buttonDiv.appendChild(button2);
        markerDiv.appendChild(buttonDiv)



   
   
    }

})