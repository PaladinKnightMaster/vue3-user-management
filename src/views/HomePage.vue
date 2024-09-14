<template>
  <div class="home-page" @click="handleClickOutside">
    <AppHeader />
    <div class="main-content">
      <button class="menu-toggle" @click="toggleSidebar">
        <img :src="menuIcon" alt="menu-icon" />
      </button>
      <!-- Sidebar: Apply dynamic classes based on visibility and floating state -->
      <UserSidebar
        ref="sidebarRef"
        :class="{ 'is-visible': isSidebarVisible, 'is-floating': isFloatingSidebar }"
        @user-selected="setSelectedUser"
        @open-add-modal="openModal(false)"
        @close-sidebar="closeSidebar"
      />

      <UserDetails :user="selectedUser" @open-edit-modal="openModal(true, selectedUser)" />
    </div>

    <!-- Modal for Add/Edit User -->
    <UserModal
      v-if="isModalOpen"
      :isEdit="isEdit"
      :user="selectedUser"
      @close-modal="closeModal"
      @user-added="handleUserAdded"
      @user-edited="handleUserEdited"
    />
  </div>
</template>

<script>
import { ref } from 'vue';
import AppHeader from '@/components/AppHeader.vue';
import UserSidebar from '@/components/UserSidebar.vue';
import UserDetails from '@/components/UserDetails.vue';
import UserModal from '@/components/UserModal.vue';

import { addUser, editUser } from '@/apis/users';

export default {
  components: {
    AppHeader,
    UserSidebar,
    UserDetails,
    UserModal,
  },
  setup() {
    const sidebarRef = ref(null);

    return {
      sidebarRef,
    };
  },
  data() {
    return {
      selectedUser: null,
      isModalOpen: false,
      isEdit: false,
      isSidebarVisible: false, // Start with sidebar hidden below 1024px
      isFloatingSidebar: false,
      menuIcon: require('@/assets/icon-menu.svg'),
    };
  },
  methods: {
    setSelectedUser(user) {
      this.selectedUser = user;
    },
    openModal(isEdit, user = null) {
      this.isEdit = isEdit;
      this.selectedUser = user;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
    },
    async handleUserAdded(addedUser) {
      console.log(addedUser)
      try {
        await addUser(addedUser);
      } catch (error) {
        console.error('Failed to add user:', error);
      }
      this.closeModal();
      if (this.sidebarRef) {
        this.sidebarRef.fetchUsers();
      }
    },
    async handleUserEdited(updatedUser) {
      try {
        await editUser(this.selectedUser.id, updatedUser);
        this.selectedUser = { ...this.selectedUser, ...updatedUser};
      } catch (error) {
        console.error('Failed to edit user:', error);
      }
      this.closeModal();
      if (this.sidebarRef) {
        this.sidebarRef.fetchUsers();
      }
    },
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
      this.isFloatingSidebar = !this.isFloatingSidebar;
    },
    closeSidebar() {
      this.isSidebarVisible = false;
      this.isFloatingSidebar = false;
    },
    handleClickOutside(event) {
      // Detect if the click is outside the sidebar and menu toggle button
      const sidebar = this.$refs.sidebarRef.$el;
      const toggleButton = this.$el.querySelector('.menu-toggle');
      if (!sidebar.contains(event.target) && !toggleButton.contains(event.target)) {
        this.closeSidebar();
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/_mixins';

.main-content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 64px;
  gap: 32px;
  background-color: #FAFAFA;
  flex-grow: 1;

  position: relative;

  @include max-md {
    padding: 24px 16px; /* Adjust padding for small screens */
    gap: 16px;
    flex-direction: column; /* Stack the content vertically on small screens */
  }
}

/* Menu toggle button for small screens */
.menu-toggle {
  display: none;
  border: none;
  cursor: pointer;

  width: 32px;
  height: 32px;
  padding: 0px 8px;

  @include max-md {
    display: block; /* Show the menu toggle on small screens */
  }

  img {
    width: 24px;
    height: 24px;
  }
}

/* Sidebar styles with animation */
.sidebar {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(0);
  opacity: 1;

  @include max-md {
    transform: translateX(-100%); /* Hide the sidebar initially */
    opacity: 0;
    position: fixed;
    top: 150px;
    left: 0;
    height: 100%;
    z-index: 1000;
    width: 308px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  &.is-visible {
    transform: translateX(0); /* Slide in the sidebar */
    opacity: 1;
  }

  &.is-floating {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
