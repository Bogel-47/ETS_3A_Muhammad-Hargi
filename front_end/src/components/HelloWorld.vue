<template>
  <div style="display: flex; flex-direction: column">
    <h2>Insert Language</h2>
    <label for="name">Insert Name of Language</label>
    <input
      type="text"
      id="input"
      placeholder="Enter Language"
      v-model="languageName"
      @keyup.enter="addLanguage"
    />
    <input
      id="submit"
      type="button"
      value="Insert"
      @click="addLanguage"
    />
    <br>
    <br>
    UPDATE DATA LANGUAGE
    <input
      type="text"
      id="update"
      placeholder="Enter Language"
      v-model="updateName"
    />
    <input
      type="text"
      id="update"
      placeholder="Enter ID Language"
      v-model="languageID"
    />
    
    <input
      id="submit"
      type="button"
      value="Insert"
      @click="putLanguage"
    />
    <br>
    <br>
    SHOW DATA LANGUAGE
    <input
      id="show"
      type="button"
      value="Show Data"
      @click="showData"
    />
    <br>
    <br>
    DELETE DATA LANGUAGE
    <input
      type="text"
      id="update"
      placeholder="Enter ID Language"
      v-model="languageIDDelete"
      @keyup.enter="deleteLanguage"
    />
    
    <input
      id="submit"
      type="button"
      value="Delete"
      @click="deleteLanguage"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'language',
  data() {
    return {
      languageName : "",
      language_id : ""
    };
  },
  methods: {
    addLanguage(){
      var name = this.languageName
      this.languageName = ""
        axios.post('http://localhost:3000/input', { name: name })
        .then((response) => {
          console.log(response)
        })
        .error((err) => {
          console.error(err);
        })
    },
    showData(){
      axios.get('http://localhost:3000/show')
      .then((response)=>{
        console.log(response)
        return response.data;
      })
    },
    putLanguage(){
      var name = this.updateName
      var id = this.languageID
      axios.put('http://localhost:3000/update',{name: name,language_id: id})
      .then((response)=>{
        console.log(response)
      })
    },
    deleteLanguage(){
      var id = this.languageIDDelete
      axios.delete('http://localhost:3000/delete',{language_id:id})
      .then((response)=>{
        console.log(response)
        console.log(id)
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
