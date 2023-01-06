<template>
  <div :class="['xs-text-6 md-text-5 bael-grid', {paginated: hasPagination}]">
    <div v-if="posts.length" class="r full-height browse">
      <div
        v-intersect
        v-for="(p,i) in posts"
        :key="i"
        class="xs-p2 bcg-item xs-border-right xs-border-bottom xs-border-top-none xs-border-left-none"
        :style="`transition-delay:0.${i * .5}s`"
      >
        <div class="item xs-block xs-full-height xs-flex">
          <nuxt-link
            class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center"
            :to="p.path"
          >{{p.title}}</nuxt-link>
        </div>
      </div>
    </div>
    <div v-else class="r full-height browse">
      <div class="xs-p2 c-100 xs-flex xs-flex-align-center xs-flex-justify-center xs-text-center">
        <div v-if="posts.length < 1 && !busy">Ups. Rien ici.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  computed: {
    hasPagination() {
      return this.$store.state.pagination.active || false;
    },
  },
  head() {
      return {
        script: [
          {
             src: '/js/createDots.js'
          }
        ],
      }
    }
};
</script>


<style>
.bael-grid .bcg-item {
  opacity: 0;
  transition: 0.2s opacity ease-out;
  letter-spacing: 0.7px;
}

.dot {
    position: absolute;
    width: 3px;
    height: 3px;
    background: black;
}


.bcg-item a {
  color: #000 !important;
  font-weight: bold;
}

.bael-grid .intersected.bcg-item {
  opacity: 1;
  transition: 0.2s opacity ease-out;
}

.xs-border-right {
  border-right: 2px solid rgb(0, 0, 0) !important
}
.xs-border-bottom {
  border-bottom: 2px solid rgb(0, 0, 0) !important
}
.xs-border-top-none {
  border-top: none !important
}
.xs-border-left-none {
  border-left: none !important
}
.sm-border-right {
  border: none !important
}
</style>
