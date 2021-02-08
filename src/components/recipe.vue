<template>
    <div id="recipeBox">
        <img id="recipePicture" :src=srcImg>
        <span id="recipeTitle">{{title}}</span>
        <img class="rButton" src="@/assets/favorite.png">
        <img class="rButton" src="@/assets/plus.png">
    </div>
</template>

<script>
export default {
    name : "RecipeBox",
    props : [
        "title",
        "recipeId",
        "srcImg"
    ]
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