var model = {
    currentCat: null,
    cats: [
        {
            clickCount : 0,
            name : 'Sitting Cat',
            imgSrc : 'img/cat.jpg',
        },
        {
            clickCount : 0,
            name : 'Hiding',
            imgSrc : 'img/cat2.jpg',
        },
        {
            clickCount : 0,
            name : 'Sleeping Cats',
            imgSrc : 'img/cat3.jpg',
        }
    ]
};



var CatView = {
	onload: function(){		
		this.render();
	},
	render: function(){
		document.getElementById('cat-counter').innerHTML = model.currentCat.clickCount;
	}
}


 var CatListView = {
	 onload: function(){
		// makes new object into this object 
		this.catListElem = document.getElementById('cat-list');
		this.render();
		
	 },
     render: function(){
		 var cat;
		 for(i = 0; i < model.cats.length; i++){		
			cat = model.cats[i];		 
			var li = document.createElement('li');
			li.innerHTML = li.innerHTML + cat.name;
			this.catListElem.appendChild(li);
			
			
			li.addEventListener('click', (function(catCopy) {
                return function() {
					document.getElementById('cat-img').src = catCopy.imgSrc;
					model.currentCat = catCopy;
					CatView.render();
                };
            })(cat));
		}
		
		
	 }
 }
     
model.currentCat = model.cats[0];
CatListView.onload();
CatView.onload();

document.getElementById('cat-img').addEventListener('click', 
	function(){
		model.currentCat.clickCount++;
		CatView.render();
	});
