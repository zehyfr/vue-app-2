<template>
    <div class="favories">
        <div id="recipesList">
            <div v-for="recipe in recipes" :key="recipe.title">
                <RecipeBox :title="recipe.title" :srcImg="recipe.srcImg" :recipeId="recipe.recipeId"/>
            </div>
        </div>
    </div>
</template>
<script>
import RecipeBox from "@/components/recipe.vue"

export default {
    name : "Favories",
    components: {
        RecipeBox
    },
    data() {
        return{
            recipes : []
        }
    },
    methods :{
        getFavList : function(){
            console.log("truc");
            if(localStorage.getItem("listFav") !== null){
                this.recipes = JSON.parse(localStorage.getItem("listFav"));
            }
        }
    },
    beforeMount() {
        this.getFavList()
    }
}
</script>
