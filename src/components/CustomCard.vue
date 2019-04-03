<template>
  <div class="card-wrapper" :class="color">
    <div class="type">{{type}}</div>
    <div class="image">
      <slot></slot>
    </div>
    <div class="title">{{title}}</div>
    <div class="description">{{description}}</div>
  </div>
</template>

<script>
  export default {
    name: 'CustomCard',
    props: {
      color: {
        type: String,
        default: 'normal',
      },
      type: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      description: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style scoped>
.card-wrapper {
  padding: 20px;
  position: relative;
  width: 255px;
  height: 258px;
  border: solid 1px #888;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
}

.card-wrapper.normal {
  border-color: #888;
}

.card-wrapper.red {
  border-color: #E15554;
}

.card-wrapper.red .type {
  background-color: #E15554;
}

.card-wrapper.blue {
  border-color: #2C9ACD;
}

.card-wrapper.blue .type {
  background-color: #2C9ACD;
}

.card-wrapper.green {
  border-color: #1EB386;
}

.card-wrapper.green .type {
  background-color: #1EB386;
}

.card-wrapper .type {
  position: absolute;
  height: 150px;
  width: 150px;
  top: -75px;
  left: -75px;
  transform: rotate(-45deg);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 35px;
  background-color: #888;
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  text-align: center;
  color: white;
  letter-spacing: 0.83px;
}

.card-wrapper .image {
  width: 90px;
  height: 80px;
  margin-top: 40px;
  margin-bottom: 10px;
}

.card-wrapper .title {
  font-size: 24px;
  margin-bottom: 10px;
  letter-spacing: 1px;
  line-height: 25px;
  color: #47676E;
  text-align: center;
}

.card-wrapper .description {
  font-size: 12px;
  line-height: 16px;
  color: #2C9ACD;
  font-weight: bold;
  text-align: center;
  letter-spacing: 0.5px;
}
</style>
