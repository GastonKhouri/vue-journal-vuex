<template>
  <div
      @click="$router.push({ name: 'entry', params: { id: 10 } })"
      class="entry-container mb-3 pointer p-2"
  >

    <!-- Titulo -->
    <div class="entry-title d-flex">
        <span class="text-success fs-5 fw-bold">15</span>
        <span class="mx-1 fs-5" >Marzo</span>
        <span class="mx-2 fs-5 fw-light" >2022, martes</span>
    </div>

    <!-- Contenido -->
    <div class="entry-description">
        Enim irure id sunt magna consequat consequat tempor irure adipisicing culpa amet aliquip ad. Mollit sit do id veniam anim consequat cupidatat sit sit id tempor dolor. Anim excepteur nulla exercitation officia ullamco eiusmod adipisicing deserunt. Quis esse incididunt ipsum incididunt nulla commodo aliqua. Reprehenderit culpa est irure dolore eiusmod.
    </div>

  </div>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" scoped>
	.entry-container {
		border-bottom: 1px solid #2c3e50;
		transition: 0.2s all ease-in;
		&:hover {
			background-color: lighten($color: grey, $amount: 45);
			transition: 0.2s all ease-in;
		}
		.entry-description {
			font-size: 12px;
		}
	}
</style>