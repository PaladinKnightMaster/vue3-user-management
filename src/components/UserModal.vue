<template>
  <div class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <!-- Modal Header -->
      <div class="modal-header">
        <h2>{{ isEdit ? 'Edit User' : 'Add User' }}</h2>
        <button class="close-btn" @click="closeModal">
          <img :src="closeIcon" alt="close-icon" />
        </button>
      </div>

      <!-- Modal Body -->
      <div class="modal-body">
        <div class="form-item">
          <label for="firstName">First Name</label>
          <input v-model="form.firstName" type="text" id="firstName" class="form-field" placeholder="Enter First Name" />
        </div>
        <div class="form-item">
          <label for="lastName">Last Name</label>
          <input v-model="form.lastName" type="text" id="lastName" class="form-field" placeholder="Enter Last Name" />
        </div>
      </div>

      <!-- Modal Actions -->
      <div class="modal-actions">
        <button class="cancel-btn" @click="closeModal">
          <img :src="cancelIcon" alt="cancel-icon" />
          Cancel
        </button>
        <button class="submit-btn" @click="submitForm" :disabled="!isFormValid" :class="{ disabled: !isFormValid }">
          <img :src="submitIcon" alt="submit-icon" />
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['isEdit', 'user'],
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
      },
      closeIcon: require('@/assets/icon-close.svg'),
      cancelIcon: require('@/assets/icon-close.svg'),
    };
  },
  computed: {
    // Computed property for the submit icon based on isEdit state
    submitIcon() {
      return this.isEdit ? require('@/assets/icon-check.svg') : require('@/assets/icon-plus.svg');
    },
    isFormValid() {
      return this.form.firstName && this.form.lastName;
    },
  },
  methods: {

    submitForm() {
      this.$emit(this.isEdit ? 'user-edited' : 'user-added', this.form);
      this.closeModal();
    },
    closeModal() {
      this.$emit('close-modal');
    },
    populateForm() {

      if (this.user && this.isEdit) {
        this.form.firstName = this.user.firstName;
        this.form.lastName = this.user.lastName;
      } else {
        this.form.firstName = '';
        this.form.lastName = '';
      }
    },
  },
  watch: {
    isEdit() {
      this.populateForm();
    },
    user() {
      this.populateForm();
    },
  },
  mounted() {
    this.populateForm();
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 308px;
  width: 100%;
  z-index: 1001;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 32px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.05);
}

.close-btn {
  background: none;
  border: none;
  cursor: pointer;
  width: 30px;
  height: 32px;
  padding: 0px 8px;
  gap: 8px;
  border-radius: 4px 0px 0px 0px;
}

.modal-body {
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-item {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.form-item label {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #555555;
  line-height: 16.41px;
  text-align: left;
}

.form-item .form-field {
  height: 32px;
  padding: 0px 16px;
  gap: 10px;
  border: 1px solid #CCCCCC;
  border-radius: 4px;
}

.modal-actions {
  max-height: 56px;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding: 10px 32px;
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.05);
}

.cancel-btn {
  max-height: 32px;
  background-color: #f2f2f2;
  padding: 0px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 7px;

  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  text-align: left;
}

.submit-btn {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  gap: 7px;
  width: 98px;
  height: 32px;
  background-color: #f2f2f2;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:not(.disabled) img {
  filter: invert(23%) sepia(73%) saturate(571%) hue-rotate(74deg) brightness(93%) contrast(91%);
}

.submit-btn.disabled img {
  filter: invert(36%) sepia(30%) saturate(544%) hue-rotate(58deg) brightness(89%) contrast(85%);
}

.submit-btn.disabled {
  background-color: #fafafa;
  cursor: not-allowed;
}

.img {
  width: 14px;
  height: 14px;
}
</style>
