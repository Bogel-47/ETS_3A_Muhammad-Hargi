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
    <thead>
      <tr>
        <th>Language ID</th>
        <th>Language</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="language in languaged" :key="language.language_id">
        <td>{{language.language_id}}</td>
        <td>{{language.name}}</td>
      </tr>
    </tbody>
    <br>
    <br>
    DELETE DATA LANGUAGE
    <input
      type="text"
      id="update"
      placeholder="Enter ID Language"
      v-model="idDelete"
      @keyup.enter="deleteLanguage(idDelete)"
    />
    
    <input
      id="submit"
      type="button"
      value="Delete"
      @click="deleteLanguage(idDelete)"
    />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'languages',
  data() {
    return {
      languageName : "",
      language_id : "",
      languaged : null
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
        this.languaged=response.data
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
    deleteLanguage(id){
      axios.delete('http://localhost:3000/delete/'+id)
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
