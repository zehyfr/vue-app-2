<template>
    <div id="recipeBox">
        <img id="recipePicture" :src=srcImg>
        <span id="recipeTitle">{{title}}</span>
        <img class="rButton" src="@/assets/favorite.png" @click="addFav">
    </div>
</template>

<script>
export default {
    name : "RecipeBox",
    props : [
        "title",
        "recipeId",
        "srcImg"
    ],
    methods :{
        addFav() {
            var recipe = {
                "title" : this.title,
                "recipeId" : this.recipeId,
                "srcImg" : this.srcImg
            };
            
            localStorage.clear();
            var favs = []
            if(localStorage.getItem("listFav") !== null){
                favs = JSON.parse(localStorage.getItem("listFav"));
            }

            var i = -1;
            favs.forEach((fav, index) => {
                if(fav.recipeId == this.recipeId){
                    i = index;
                }
            });
            if(i == -1){
                favs.push(recipe);
            }else{
                favs.splice(i, 1);
            }
                
            localStorage["listFav"] = JSON.stringify(favs);
        }
    }
}
</script>

<style scoped>
    #recipeBox{
        border : 1px solid black
    }
    #recipePicture{
        height : 20%;
        width : auto
    }
    #recipeTitle{
        font-size: 26px;
    }
    .rButton{
        height : 32px;
        width : 32px
    }
</style>