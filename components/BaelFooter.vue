<template>
  <footer class="fill-white xs-text-6 md-text-5">
    <div class="r no-gap">
      <div v-if="pagination.active" class="c-12 xs-text-left xs-p2">
        <lazy-bael-pagination :pagination="pagination" />
      </div>
      <div
        class="xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
        :class="signupAboutSize"
      >
        <div class="item">
          <div v-if="siteDescription" class="footer__heading xs-mb2">About</div>
          <p v-if="siteDescription">{{siteDescription}}</p>
        </div>
      </div>
      <div
        v-if="signupBoolean"
        class="c-25 xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
      >
        <lazy-send-grid />
      </div>
      <div
        class="xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
        :class="signupAboutSize"
      >
        <div class="item">
          <div v-if="connectData" class="footer__heading xs-mb2"></div>
          <ul v-if="connectData" class="list-unstyled">
            <li v-for="(c,i) in connectData" :key="i">
              <a :href="c.url">{{c.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
        :class="signupAboutSize"
      >
        <!--div class="item">
          <div class="footer__heading xs-mb2">Deploy</div>

          <a
            href="https://app.netlify.com/start/deploy?repository=https://github.com/jake-101/bael-template"
          >
            <img
              style="height:29px;width:auto;"
              src="~/assets/deploy.svg"
              title="Deploy to Netlify"
            />
          </a>
        </div-->
      </div>
      <div class="c-12 xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none">
        <div class="item xs-text-6">
          Hermine
           © 2021
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    pagination() {
      return this.$store.state.pagination;
    },
    version() {
      return process.env.BAEL_VERSION || false;
    },
    signupAboutSize: function () {
      return {
        "c-25": this.signupBoolean,
        "c-4": !this.signupBoolean,
      };
    },
    connectData() {
      return this.$store.state.connect;
    },
    siteDescription() {
      return this.$store.state.info.sitedescription;
    },
    signupBoolean() {
      return this.$store.state.info.emailsignup;
    },
  },
};
</script>

<style>
.text-input {
  max-width: 100%;
}
.small-txt {
  font-size: 80%;
}
footer .item:hover .footer__heading {
  color: #aaaaac;
  transition: 0.2s color ease-in-out;
}
.footer__heading {
  max-width: 100%;
  pointer-events: none;
  color: #aaaaac;
  font-weight: 800;
  font-size: 85%;
  transition: 0.1s color ease-in-out;
}
.pagination__button--disabled {
  pointer-events: none;
}
.xs-border {
  border: 1.5px solid rgb(0, 0, 0) !important
}
.xs-border-right-none {
  border-left: none !important
}
.xs-border-bottom-none {
  border-bottom: none !important
}
</style>
