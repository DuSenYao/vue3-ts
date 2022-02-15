import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Heading',
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  setup(props, { slots }) {
    const tag = 'h' + props.level;
    return () => <tag>{slots.default ? slots.default() : ''}</tag>;
  }
});
