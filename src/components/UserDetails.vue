<template>
  <div v-if="user" class="user-details">
    <!-- Header (User Name and Edit Button) -->
    <div class="details-header">
      <h2 class="user-name">{{ user.firstName }} {{ user.lastName }}</h2>
      <button class="edit-btn" @click="editUser">
        <img :src="pencilIcon" alt="edit-icon" />
        Edit
      </button>
    </div>

    <!-- Divider -->
    <div class="divider"></div>

    <!-- User Data Table -->
    <div class="user-data-table">
      <div class="table-row">
        <p class="name">First Name</p>
        <p class="value">{{ user.firstName }}</p>
      </div>
      <div class="table-row">
        <p class="name">Last Name</p>
        <p class="value">{{ user.lastName }}</p>
      </div>
      <div class="table-row">
        <p class="name">Date Added</p>
        <p class="value wrap">{{ formatDate(user.createdAt) }}</p>
      </div>
      <div class="table-row">
        <p class="name">ID</p>
        <p class="value">{{ user.id }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      pencilIcon: require('@/assets/icon-pencil.svg'),
    };
  },
  methods: {
    editUser() {
      this.$emit('open-edit-modal', this.user);
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
  },
};
</script>

<style scoped lang="scss">
@import '../styles/_mixins';

.user-details {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;

  @include md {
    width: 100%;
    max-width: 100%;
  }

  background: #FFFFFF;
  border: 1px solid #F1F1F1;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05), 0px 16px 32px rgba(0, 0, 0, 0.03);
  border-radius: 8px;

  @include max-md {
    padding: 24px;
  }

  @include max-sm {
    padding: 16px;
    max-width: 100%;
    box-sizing: border-box;
  }
}

.details-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.user-name {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #555555;
}

.edit-btn {
  display: flex;
  align-items: center;
  padding: 0px 16px;
  gap: 7px;
  width: 77px;
  height: 32px;
  background: #F2F2F2;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.edit-btn img {
  width: 14px;
  height: 14px;
}

.divider {
  width: 100%;
  height: 1px;
  background: #ECECEC;
  border-radius: 1px;
}

.user-data-table {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 100%;

  @include max-sm {
    word-wrap: break-word;
  }
}

.table-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  width: 100%;
  height: auto;
}

.name {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #555555;
  width: 50%;
  text-align: left;
}

.value {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #555555;
  width: 50%;
  text-align: left;

  /* Word wrap for long values like Date Added */
  word-wrap: break-word;
  word-break: break-all;

  @include max-sm {
    white-space: normal; /* Ensure word wrapping on small screens */
  }
}

.wrap {
  white-space: normal;
}
</style>
