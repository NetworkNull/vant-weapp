"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require("../common/component");
component_1.VantComponent({
    relation: {
        name: 'tabs',
        type: 'ancestor',
        linked: function (target) {
            this.parent = target;
        },
        unlinked: function () {
            this.parent = null;
        }
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean,
        titleStyle: String,
        name: {
            type: [Number, String],
            value: '',
        }
    },
    data: {
        active: false
    },
    watch: {
        title: 'update',
        disabled: 'update',
        dot: 'update',
        info: 'update',
        titleStyle: 'update'
    },
    methods: {
        getComputedName: function () {
            if (this.data.name !== '') {
                return this.data.name;
            }
            return this.index;
        },
        updateRender: function (active, parent) {
            var parentData = parent.data;
            this.inited = this.inited || active;
            this.setData({
                active: active,
                shouldRender: this.inited || !parentData.lazyRender,
                shouldShow: active || parentData.animated
            });
        },
        update: function () {
            if (this.parent) {
                this.parent.updateTabs();
            }
        }
    }
});
