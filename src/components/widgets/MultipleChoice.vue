<template>
  <div class="multiple-choice-container">
    <div class="options-container">
      <div
        v-for="option in question.options"
        :key="option.id"
        class="option-item"
      >
        <label :for="'option-' + option.id" class="checkbox-label">
          <input
            type="checkbox"
            :id="'option-' + option.id"
            :value="option.id"
            v-model="selectedOptions"
            @change="handleChange"
          />
          <span class="checkbox-text">{{ option.text }}</span>
        </label>
      </div>
    </div>
    <div v-if="showPrecision" class="precision-input">
      <input
        type="text"
        v-model="precisionText"
        class="form-control"
        placeholder="Précisez"
        @input="handlePrecisionChange"
      />
    </div>
    <div class="button-container">
      <button v-if="selectedOptions.length > 0" @click="next" class="btn-next">
        Suivant
      </button>
      <button @click="back" class="btn-return">Retour</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  question: {
    type: Object,
    required: true,
  },
  modelValue: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["update:modelValue", "next", "back"]);

const selectedOptions = ref([]);
const precisionText = ref("");

// Watch for external changes to modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    selectedOptions.value = newValue;
  },
  { deep: true }
);

// Compute whether to show precision input
const showPrecision = computed(() => {
  return selectedOptions.value.includes(9); // Assuming 9 is the ID for "Autre"
});

// Handle checkbox changes
const handleChange = () => {
  emit("update:modelValue", selectedOptions.value);
};

// Handle precision text changes
const handlePrecisionChange = () => {
  emit("update:precision", precisionText.value);
};

// Navigation methods
const next = () => {
  emit("next", {
    selectedOptions: selectedOptions.value,
    precision: showPrecision.value ? precisionText.value : null,
  });
};

const back = () => {
  emit("back");
};
</script>

<style scoped>
.multiple-choice-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.options-container {
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.option-item {
  margin: 0;
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  padding: 12px 15px;
  background-color: #4a5a83;
  border-radius: 5px;
  transition: background-color 0.2s;
}

.checkbox-label:hover {
  background-color: #5a6a93;
}

.checkbox-text {
  font-size: 16px;
  color: white;
  flex: 1;
}

.option-item input[type="checkbox"] {
  width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
}

.precision-input {
  margin: 20px 0;
}

.precision-input input {
  width: 100%;
  padding: 12px;
  border: 1px solid #4a5a83;
  border-radius: 5px;
  background-color: #333;
  color: white;
  font-size: 16px;
}

.button-container {
  display: flex;
  gap: 10px;
  margin-top: 20px;
}

.btn-next,
.btn-return {
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  width: 100%;
  max-width: 200px;
}

.btn-next {
  background-color: #4caf50;
  color: white;
}

.btn-return {
  background-color: #f44336;
  color: white;
}

.form-control {
  width: 100%;
  padding: 12px;
  border: 1px solid #4a5a83;
  border-radius: 5px;
  background-color: #333;
  color: white;
  font-size: 16px;
}
</style> 