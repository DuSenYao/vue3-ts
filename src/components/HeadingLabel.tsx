import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeadingLabel',
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    const Tag = `h${props.level}`;
    return () => <Tag>{slots.default ? slots.default() : ''}</Tag>;
  },
});
