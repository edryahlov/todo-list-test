<template>
  <div id="app" class="container mt-5">
    <div class="row">
      <div class="col-12">
        <nav>
          <router-link to="/">Client</router-link> |
          <router-link to="/admin">Admin</router-link>
        </nav>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {},
}
</script>

<style lang="scss">
#app {
  font-family: Arial, sans-serif;
}
.finished {
  text-decoration: line-through;
}
</style>
