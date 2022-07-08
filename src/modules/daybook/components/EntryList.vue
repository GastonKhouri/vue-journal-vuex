<template>
  <div class="entry-list-container">
	
	<div class="mt-2 d-flex flex-column">
		<button
			@click="$router.push({ name: 'entry', params: { id: 'new' } })"
			class="btn btn-primary mx-2"
		>
			<i class="fa fa-plus-circle mx-3"></i>
			Nueva entrada
		</button>
	</div>

	<div class="px-2 pt-2">
		<input
			class="form-control"
			placeholder="Buscar Entrada"
			type="text"
			v-model="term"
		>
	</div>

	<div class="entry-scrollarea">
		<h2
			v-for="entry in entriesByTerm"
			:key="entry.id"
		>
			<Entry :entry="entry" />
		</h2>
	</div>

  </div>
</template>

<script>
	import { defineAsyncComponent } from 'vue';
	import { mapGetters } from 'vuex';

	export default {
		components: {
			Entry: defineAsyncComponent( () => import( './Entry.vue' ) )
		},
		data() {
			return {
				term: ''
			};
		},
		computed: {
			...mapGetters( 'journal', [ 'getEntriesByTerm' ] ),
			entriesByTerm() {
				return this.getEntriesByTerm( this.term );
			}
		},
	}
</script>

<style lang="scss" scoped>
	.entry-list-container {
		border-right: 1px solid #2c3e50;
		height: calc(100vh - 56px);
	}

	.entry-scrollarea {
		height: calc(100vh - 100px);
		overflow: scroll;
		&::-webkit-scrollbar {
			display: none;
		}
	}
</style>