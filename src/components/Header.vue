<template>
  <header class="header">
    <div class="header__logo"><span>Жилфонд</span></div>
    <span class="header__text">Пользователь</span>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
}
.header__logo {
  font-weight: 700;
  font-size: 32px;
  color: #e31f24;
}
@media (max-width: 500px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>
