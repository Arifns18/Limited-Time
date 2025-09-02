<script setup></script>

<template>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <div>
    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/admin">Admin</RouterLink> | 
      <RouterLink to="/user">User</RouterLink>
    </nav>

    <RouterView/>
  </div>
</template>



<style scoped></style>
