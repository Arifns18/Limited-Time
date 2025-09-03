<script></script>

<template>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return { users: [] }
  },
  async created() {
    try {
      const res = await axios.get("http://localhost:5000/api/users");
      this.users = res.data;
      console.log(this.users);
    } catch (err) {
      console.error("Error fetching users:", err);
    }
  }
}
</script>

