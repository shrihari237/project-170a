AFRAME.registerComponent('createmarkers',{

    getAllToys: async function(){
        return await firebase
        .firestore()
        .collection("toys")
        .get()
        .then(snap=>{
            return snap.docs.map(doc => doc.data())
        })
    },
    init:async function(){
        var mainScene = document.querySelector("#main-scene")
        var toys = await this.getAllToys();
        toys.map(toy =>{
            var marker = document.createElement("a-marker");
            marker.setAttribute("id",toy.id);
            marker.setAttribute("type","pattern")
            marker.setAttribute("url",toy.marker_pattern_url)
            marker.setAttribute("cursor",{
                ratOrigin:'mouse'
            })
            marker.setAttribute("marker-handler",{})
            mainScene.appendChild(marker)


            //Adding 3D model to scene
            var model = document.createElement("a-entity")
            model.setAttribute("id",toy,`model-${toy.id}`)
            // model.setAttribute("position",toy.model_geometry.position)
            // model.setAttribute("rotation",toy.model_geometry.rotation)
            // model.setAttribute("scale",toy.model_geometry.scale)
            model.setAttribute("gesture-handler",{})
            model.setAttribute("animation-mixer",{})
            marker.appendChild(model)
        })
    }

})