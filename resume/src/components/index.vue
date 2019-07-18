<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      keen to front-end technique
    </p>
    <h3>Detail</h3>
    <ul>
      <li><a href="https://github.com/VeraWei" target="_blank" rel="noopener">Personal Info</a></li>
      <li><a href="https://www.zhihu.com/people/vera-36-26/" target="_blank" rel="noopener">Educational Background</a></li>
      <li><a href="https://www.linkedin.com/in/vera-wei-05a873a7/" target="_blank" rel="noopener">Professional Background</a></li>
    </ul>

    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://github.com/VeraWei" target="_blank" rel="noopener">GitHub</a></li>
      <li><a href="https://www.zhihu.com/people/vera-36-26/" target="_blank" rel="noopener">知乎</a></li>
      <li><a href="https://www.linkedin.com/in/vera-wei-05a873a7/" target="_blank" rel="noopener">Linkedin</a></li>
      <li><a href="https://angel.co/vera-wei" target="_blank" rel="noopener">AngelList</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
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
