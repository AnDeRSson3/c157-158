AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards()
    
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "batmanposter.jpg",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "spidermanposter.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "supermanposter.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "mfdoom.jpg",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 7;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      const borderEl=this.createBorder(position, item.id)
      // Thumbnail Element
     const thumbNail=this.createThumbNail(item)
     borderEl.appendChild(thumbNail)
      // Title Text Element
      //const titleEl=this.createTitleEl(position, item)
      //borderEl.appendChild(titleEl)
      this.placesContainer.appendChild(borderEl);
      
      
    }
  },
  createBorder:function(position, id){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("id", id)
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:22,
      height:31
    });
    entityEl.setAttribute("position", position)
    entityEl.setAttribute("material",{
      color:"black",
     // opacity: 1,
    });
    entityEl.setAttribute("cursor-listener", {});
    return entityEl;
  },
  createThumbNail:function(item){
    const entityEl=document.createElement("a-entity")
    entityEl.setAttribute("visible", true)
    entityEl.setAttribute("geometry",{
      primitive:"plane",
      width:20,
      height:28
    });
    entityEl.setAttribute("position", {x:0, y:.5, z:0.1})
    entityEl.setAttribute("material", {src:item.url});
    return entityEl
  }})