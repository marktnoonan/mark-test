

import { mount } from "@cypress/vue"; // the Cypress mount function, which wraps the vue-test-utils mount function
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

Cypress.Commands.add("mount", (MountedComponent, options) => {
    // get the element that our mounted component will be injected into
    const root = document.getElementById("__cy_root");
    root.setAttribute('style', 'display: block');

    // add the v-application class that allows Vuetify styles to work
    if (!root.classList.contains("v-application")) {
        root.classList.add("v-application");
    }

    // add the data-attribute - Vuetify selector used for popup elements to attach to the DOM
    root.setAttribute('data-app', 'true');

    return mount(MountedComponent, {
        vuetify: new Vuetify({}),
        ...options,
    });
});


Cypress.Commands.add('vue', () => {
    return cy.wrap(Cypress.vueWrapper);
  });