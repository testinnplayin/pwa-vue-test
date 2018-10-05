<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/thingamabobs">Thingamabobs</router-link> |
      <router-link to="/dohickies">Dohickies</router-link> |
      <router-link to="/whatchamagiggers">Whatchamagiggers</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width : 100%;
}

.main-c {
  margin-top: 15px;
  width: 100%;
}

.list-el {
  margin-top: 20px;
}
</style>
