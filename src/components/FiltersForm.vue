<script setup lang="ts">
import { searchTerm, filterableFields } from '../lib/filters'
import FiltersFormField from './FiltersFormField.vue'
</script>

<template>
  <form action="/" class="mb-3">
    <!-- search -->

    <div class="input-group input-group-lg mb-3">
      <label class="visually-hidden" for="searchTerm">Search Projects</label>
      <input
        v-model="searchTerm"
        name="q"
        type="text"
        id="searchTerm"
        class="form-control"
        placeholder="Search Projects"
        aria-label="Search Projects"
      />

      <button class="btn btn-outline-secondary" type="submit">Search</button>
    </div>

    <!-- filters -->

    <div class="accordion" id="advancedSearch">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button collapsed px-3 py-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#advancedSearchBody"
            aria-controls="advancedSearchBody"
          >
            Advanced Search
          </button>
        </h2>
        <div
          id="advancedSearchBody"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#advancedSearch"
        >
          <div class="accordion-body">
            <FiltersFormField
              v-for="field in filterableFields"
              :field="field"
            />

            <!-- actions -->
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button type="reset" class="btn btn-warning btn-sm">Reset</button>
              <button type="submit" class="btn btn-secondary btn-sm">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
