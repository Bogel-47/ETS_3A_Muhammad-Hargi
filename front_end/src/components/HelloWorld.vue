<template>
  <div id="site" style="display: flex; flex-direction: column">
    <div>
    <h2>ETS WEBDEV PRAKTIK</h2>
    Muhammad Hargi Muttaqin (3A-191524027)
    <br>
    <br>
    <table>
    <thead>
      <tr>
        <th>Language ID</th>
        <th>Language</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="language in languaged" :key="language.language_id">
        <td>{{language.language_id}}</td>
        <td>{{language.name}}</td>
        <td>
          <input
          id="delete"
          type="button"
          value="Delete"
          @click="deleteLanguage(language.language_id)"
          />
        </td>
      </tr>
    </tbody>  
    </table>
    </div>
    <br>
    <br>
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
    <br>
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
      languaged : null,
      languageID : "",
      updateName : "",
    };
  },
  methods: {
    addLanguage(){
      var name = this.languageName
      this.languageName = ""
        axios.post('http://localhost:3000/input', { name: name })
        .then((response) => {
          console.log(response)
          alert('Success')
        })
        .error((err) => {
          console.error(err);
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
      if (confirm('Are you sure?'))
        axios.delete('http://localhost:3000/delete/'+id)
        .then((response)=>{
          console.log(response)
          console.log(id)
        })
    }
  },
  created(){
    axios.get('http://localhost:3000/show')
    .then((response)=>{
      console.log(response)
      this.languaged=response.data
    })
  },
  updated(){
    axios.get('http://localhost:3000/show')
    .then((response)=>{
      this.languaged=response.data
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("../script/main.css");
</style>
