<template>
  <div class="projects--container">
    <div class="projects--queue">
      <h1>Queue All Projects</h1>
      <table id="projects--table">
        <tr>
          <th>No</th>
          <th>Nama Project</th>
          <th>Unit</th>
          <th>Stakeholder</th>
          <th>Sprint</th>
          <th>Status</th>
        </tr>
        <tr>
          <td>1</td>
          <td class="title">Teman Berbagi</td>
          <td>TNT</td>
          <td>TNT</td>
          <td>15</td>
          <td>Complete</td>
        </tr>
        <tr>
          <td>2</td>
          <td class="title">MyIndieHome</td>
          <td>Consumer</td>
          <td>Consumer</td>
          <td>32</td>
          <td>To do</td>
        </tr>
      </table>
    </div>

    <div class="performance">
      <div class="item best-product">
        <h1>Best Product Performance</h1>
        <ol>
          <li class="row">
            <span>1. MyIndieHome</span>
            <div class="right">
              <i class="material-icons up">arrow_drop_up</i>
              <span class="score">3</span>
            </div>
          </li>
          <li class="row">
            <span>2. SobatBUMN</span>
            <div class="right">
              <i class="material-icons down">arrow_drop_down</i>
              <span class="score">2</span>
            </div>
          </li>
          <li class="row">
            <span>3. Open Trip</span>
            <div class="right">
              <i class="material-icons down">arrow_drop_down</i>
              <span class="score">1</span>
            </div>
          </li>
          <li class="row">
            <span>4. ODP Hunter</span>
            <div class="right">
              <i class="material-icons up">arrow_drop_up</i>
              <span class="score">4</span>
            </div>
          </li>
          <li class="row">
            <span>5. SIIS</span>
            <div class="right">
              <i class="material-icons up">arrow_drop_up</i>
              <span class="score">6</span>
            </div>
          </li>
        </ol>

        <div class="wrapper-btn--more">
          <button class="btn--more">MORE</button>
        </div>
      </div>
      
      <div class="item best-squad">
        <h1>Best Squad Performance</h1>
        <ol>
          <li class="row">
            <span>1. MyIndieHome</span>
            <div class="right">
              <i class="material-icons up">arrow_drop_up</i>
              <span class="score">3</span>
            </div>
          </li>
          <li class="row">
            <span>2. SobatBUMN</span>
            <div class="right">
              <i class="material-icons down">arrow_drop_down</i>
              <span class="score">2</span>
            </div>
          </li>
          <li class="row">
            <span>3. Open Trip</span>
            <div class="right">
              <i class="material-icons down">arrow_drop_down</i>
              <span class="score">1</span>
            </div>
          </li>
          <li class="row">
            <span>4. ODP Hunter</span>
            <div class="right">
              <i class="material-icons up">arrow_drop_up</i>
              <span class="score">4</span>
            </div>
          </li>
          <li class="row">
            <span>5. SIIS</span>
            <div class="right">
              <i class="material-icons up">arrow_drop_up</i>
              <span class="score">6</span>
            </div>
          </li>
        </ol>

        <div class="wrapper-btn--more">
          <button class="btn--more">MORE</button>
        </div>
      </div>

      <div class="item talent">
        <h1>Talent</h1>

        <div class="columns">
          <div class="col--item">
            <h2>Floating</h2>

            <div class="row">
              <span>UX</span>
              <span>1</span>
            </div>
            <div class="row">
              <span>FE</span>
              <span>2</span>
            </div>
            <div class="row">
              <span>BE</span>
              <span>0</span>
            </div>
            <div class="row">
              <span>QA</span>
              <span>0</span>
            </div>
            <div class="wrapper-btn--more">
              <button class="btn--more">MORE</button>
            </div>
          </div>
          <div class="col--item">
            <h2>Vacant</h2>

            <div class="row">
              <span>UX</span>
              <span>1</span>
            </div>
            <div class="row">
              <span>FE</span>
              <span>2</span>
            </div>
            <div class="row">
              <span>BE</span>
              <span>0</span>
            </div>
            <div class="row">
              <span>QA</span>
              <span>0</span>
            </div>

            <div class="wrapper-btn--more">
              <button class="btn--more">MORE</button>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "ProjectsPage"
};
</script>

<style lang="scss" scoped>
@import "./styles/projects";
</style>

