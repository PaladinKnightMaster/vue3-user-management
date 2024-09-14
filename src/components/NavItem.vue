<template>
    <div
      :class="['nav-item', { 'nav-item-selected': isSelected }]"
      @click="selectUser"
    >
      <i>
        <img :src="userIcon" alt="user-icon" />
      </i>
      <p class="nav-item-text">{{ user.firstName }} {{ user.lastName }}</p>
      <i>
        <img :src="chevronRightIcon" alt="chevron-right-icon" />
      </i>
    </div>
  </template>

  <script>

  export default {
    name: 'NavItem',
    props: {
      user: Object,
      isSelected: Boolean,
    },
    data() {
      return {
        userIcon: require('@/assets/icon-user.svg'),
        chevronRightIcon: require('@/assets/icon-chevron-right.svg'),
      };
    },
    methods: {
      selectUser() {
        this.$emit('select-user', this.user);
      },
    },
  };
  </script>

  <style scoped>
  .nav-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 276px;
    height: 39px;
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
    transition: background-color 0.3s ease, font-weight 0.3s ease;
  }

  .nav-item-selected {
    background-color: #EAEAEA;
  }

  .nav-item-selected .nav-item-text {
    font-weight: 500;
    color: #555555;
  }

  i {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
  }

  .nav-item-text {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;

    color: #8E8E8E;
    flex-grow: 1;
    transition: color 0.3s ease, font-weight 0.3s ease;
  }
  </style>
