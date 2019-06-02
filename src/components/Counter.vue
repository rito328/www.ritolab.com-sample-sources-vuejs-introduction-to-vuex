<template>
  <div>
    <p :class="classesCount">{{ count }}</p>
    <button @click="sub">-</button>
    <button @click="add">+</button>
  </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

    export default {
        name: "Counter",
        computed: {
            ...mapState({
                count: state => state.counter.count,
            }),
            ...mapGetters({
                isPositive: 'counter/isPositive',
                isNegative: 'counter/isNegative'
            }),
            classesCount () {
                return {
                    'blue': this.isPositive,
                    'red': this.isNegative,
                }
            }
        },
        methods: {
            ...mapMutations({
                increment: 'counter/increment',
                decrement: 'counter/decrement'
            }),
            ...mapActions({
                addAsync: 'counter/addAsync',
                subAsync: 'counter/subAsync'
            }),
            add () {
                this.increment()
                this.addAsync({
                    amount: 1000
                })
            },
            sub () {
                this.decrement()
                this.subAsync({
                    amount: 1000
                })
            }

        }
    }
</script>

<style scoped>
  .red {
    color: red;
  }
  .blue {
    color: blue;
  }
</style>