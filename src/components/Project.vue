<template lang="html">
  <div class="bg-white py-5">
    <div class="container">

      <!-- facts -->
      <div id="quick-facts">

        <div class="quick-fact">
          <h3>Quick Facts</h3>
          <ul>
            <li>Location: Citrus Park</li>
            <li>Length: 2.73 miles, from Sheldon Road to Countryway Boulevard</li>
            <li>Category: Construction</li>
            <li>Schedule: Early 2019 - Summer 2021</li>
          </ul>
        </div>

        <div class="quick-fact">
          <h3>Overview</h3>
          <ul>
            <li>Extending Citrus Park Drive to connect Countryway Boulevard to Sheldon Road by adding a section of four-lane divided urban road</li>
            <li>Provide two vehicle lanes and a“buffered” bicycle lane in each direction, and sidewalks</li>
            <li>Upgrade the existing traffic signals at Sheldon Road and Countryway Boulevard</li>
            <li>Add new traffic signals at the Fawn Ridge Boulevard intersection and Deer Park Elementary</li>
            <li>Provide landscaped medians</li>
            <li>Improve stormwater drainage</li>
          </ul>
        </div>

        <div class="quick-fact">
          <h3>Benefits</h3>
          <ul>
            <li>Improves mobility and safety for east-west travel in northwest Hillsborough County</li>
            <li>Provides pedestrian and bicyclist safety and connectivity to other neighborhoods, the Upper Tampa Bay Trail, and Deer Park Elementary School</li>
          </ul>
        </div>

        <div class="quick-fact">
          <h3>Cost Estimate</h3>
          <ul>
            <li>Total: $65 million</li>
            <li>Design: $5 million</li>
            <li>Land Acquisition: $3 million </li>
            <li>Construction: $57 million</li>
          </ul>
        </div>

        <div class="quick-fact">
          <h3>Funding</h3>
          <ul>
            <li>Transportation Planning Finance Fund: $48 million </li>
            <li>Community Investment Tax (CIT): $4 million</li>
            <li>General and Other Revenue Funds: $13 million</li>
          </ul>
        </div>
      </div>

      <!-- map -->
      <div class="embed-responsive embed-responsive-21by9 my-5">
        <div is="ProjMap" :geometry="null"></div>
      </div>

    </div>
  </div>
</template>

<script>
import ProjMap from './Map'

export default {
  props: ['objId'],
  components: { ProjMap }
}
</script>
