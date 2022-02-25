const { watchEffect, reactive } = require('vue');

const counter = reactive({
  x: 1,
  y: 2
});

watchEffect(() => {
  const perimeter = (counter.x + counter.y) * 2;
  console.log(perimeter);
});

setTimeout(() => {
  counter.x += 1;
});
