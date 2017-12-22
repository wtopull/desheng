<template>
  <div class="desheng">
    <textarea class="write" v-model="write" @keyup="show($event)" v-focus placeholder="示例，如输入：# Lucky you！-_-"></textarea>
    <article class="read" v-html="read">{{ read }}</article>
  </div>
</template>

<script>
export default {
  name: 'desheng',
  data () {
    return {
      write: '',
      read:""
    }
  },
  methods:{
      show:function(ev){
        if(ev.keyCode == 13){
          var vim =this;
          this.axios.post('https://api.github.com/markdown', {
            text: this.write
          })
          .then(function (response) {
            vim.read = response.data;
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.desheng{
  width: 1024px;
  margin:0 auto;
}
.write{
  resize:none;
  outline:none;
  font: 18px/30px "微软雅黑";
  background:#F2F2F2;
}
.write,.read{
  width: 46%;
  height:646px;
  float:left;
  padding:16px;
}
.read{
  border:2px solid #eee;
}
</style>
