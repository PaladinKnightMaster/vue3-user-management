<template>
  <div :class="['sidebar', { 'is-floating': isFloating }]" @click.stop>
    <div v-if="users.length === 0" class="no-users">
      <p class="no-users-text">No users yet</p>
      <button class="add-user-btn" @click="openAddModal">
        <img :src="plusIcon" alt="plus-icon" />
        Add User
      </button>
    </div>
    <div v-else>
      <NavItem
        v-for="user in users"
        :key="user.id"
        :user="user"
        :isSelected="selectedUser && selectedUser.id === user.id"
        @select-user="selectUser"
      />
      <button class="add-user-btn" @click="openAddModal">
        <img :src="plusIcon" alt="plus-icon" />
        Add User
      </button>
    </div>
  </div>
</template>

<script>
import NavItem from '@/components/NavItem.vue';
import { getUsers } from '@/apis/users';

export default {
  name: 'UserSidebar',
  props: ['isFloating'],
  components: {
    NavItem,
  },
  data() {
    return {
      users: [],
      selectedUser: null,
      plusIcon: require('@/assets/icon-plus.svg'),
    };
  },
  methods: {
    fetchUsers() {
      getUsers().then((response) => {
        this.users = response.data;
      });
    },
    selectUser(user) {
      this.selectedUser = user;
      this.$emit('user-selected', user);
      this.$emit('close-sidebar'); // Emit an event to hide the sidebar after selecting a user
    },
    openAddModal() {
      this.$emit('open-add-modal');
    },
  },
  created() {
    this.fetchUsers();
  },
};
</script>


<style scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  gap: 16px;
  width: 308px;
  background-color: #FFFFFF;
  border: 1px solid #F1F1F1;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.05), 0px 16px 32px rgba(0, 0, 0, 0.03);
  border-radius: 8px;

  &.is-floating {
    display: block;
    position: fixed;
    top: 150;
    left: 0;
    height: 100%;
    z-index: 1000;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
    background-color: #FFFFFF; /* Ensure it's visible */
  }
}

.no-users-text {
  width: 100%;
  height: 28px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  color: #555555;
}

.add-user-btn {
  display: flex;
  align-items: center;
  padding: 0px 16px;
  gap: 7px;
  width: 110px;
  height: 32px;
  background-color: #F2F2F2;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #555555;
  cursor: pointer;
  border: none;
}

.add-user-btn img {
  width: 12px;
  height: 12px;
}
</style>
