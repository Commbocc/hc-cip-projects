<script setup lang="ts">
import { filters } from "../lib";
import FiltersFormField from "./FiltersFormField.vue";

const fetchProjects = () => {
  console.log("filter search");
};
const reset = () => {
  console.log("filter reset");
};
</script>

<template>
  <form @submit.prevent="fetchProjects" @reset.prevent="reset" class="mb-3">
    <div class="input-group input-group-lg mb-3">
      <label class="visually-hidden" for="searchTerm">Search Projects</label>
      <input
        v-model="filters.searchTerm"
        type="text"
        id="searchTerm"
        class="form-control"
        placeholder="Search Projects"
        aria-label="Search Projects"
      />

      <button class="btn btn-outline-secondary" type="submit">Search</button>
    </div>

    <!-- filters -->

    <div class="accordion" id="filtersAccordion">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-controls="collapseOne"
          >
            Advanced Search
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#filtersAccordion"
        >
          <div class="accordion-body">
            <FiltersFormField
              v-for="field in filters.fields"
              :filter-field="field"
            />

            <!-- actions -->
            <div class="text-right">
              <button type="reset" class="btn btn-warning btn-sm mt-2">
                Reset
              </button>
              <button type="submit" class="btn btn-secondary btn-sm mt-2">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
