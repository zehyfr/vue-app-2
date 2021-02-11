<template>
  <div class="Home">
    <input v-model="input" v-on:keyup.enter="search" type=text placeholder="Rechercher une recette"/>
    <div id="recipesList">
        <div v-for="recipe in recipes" :key="recipe.title">
            <RecipeBox :title="recipe.title" :srcImg="recipe.image" :recipeId="recipe.id"/>
        </div>
    </div>
  </div>
</template>

<script>
import RecipeBox from "@/components/recipe.vue"

export default {
  name: 'Home',
  components: {
    RecipeBox
  },
  data() { 
    return{
      recipes : [],
      url : "https://api.spoonacular.com/recipes/complexSearch?apiKey=68e2fea5053d408383160530db1a36cb&query=",
      input : ""
    }
  },
  methods :{
    search : function(event) {
      fetch(this.url + this.input)
      .then(response => response.json())
      .then(response => this.recipes = response["results"])
      .catch(error => alert("Error : " + error));
    }
  }
}
</script>
