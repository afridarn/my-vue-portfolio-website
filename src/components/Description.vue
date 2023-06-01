<template>
  <div class="container d-flex" style="min-height: 90vh">
    <div class="row align-items-center w-100">
      <div class="col-lg-6">
        <h1 class="text-yellow" style="font-size: 50px">
          Software <span class="text-light">Developer</span>
        </h1>
        <p class="text-light fs-4">
          Hello, I'm <span class="text-yellow">Afrida Rohmatin N</span>,
          <br />Currently studying Information Technology<br />at <span class="text-yellow">ITS Surabaya</span>
        </p>
        <RouterLink to="/contact">
          <button type="button" class="button-outline-yellow">Contact Me</button>
        </RouterLink>
      </div>

      <div class="col-lg-6">
        <img src="/myself.jpg" alt="My Photo" class="img-rounded" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-yellow {
  color: #fce700;
}

.button-outline-yellow {
  border: 2px solid #fce700;
  color: #fce700;
  background: transparent;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 2px;
  transition: all 0.3s ease;
}

.button-outline-yellow:hover {
  background: #fce700;
  color: #ffffff;
}

.img-rounded {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 75%;
  border-radius: 50%;
}
</style>

<script>
export default {
  name: 'Description',
}
</script>
