<template>
  <div class="people-list">
    <div class="people-container">
      <div class="person" v-if="people.length == 0">{{ $t('peopleList.message.empty') }}</div>
      <div class="person" v-for="(person, index) in people" :key="index">
        <div class="form-element-inline">
          <label :for="'input-name-'+index">{{ $t('peopleList.input.name') }}</label>
          <input
            :id="'input-name-'+index"
            type="text"
            v-model="person.Name"
            @change="updatePerson(person)"
          />
        </div>
        <button
          class="remove-person-btn"
          @click="removePerson(person)"
        >- {{ $t('peopleList.button.remove') }}</button>
      </div>
    </div>
    <button class="add-person-btn" @click="addNewPerson()">+ {{ $t('peopleList.button.add') }}</button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import { State, Mutation, Getter } from 'vuex-class';
import Person from '@/models/Person';
import DrawState from '@/store/modules/draw/DrawState';
import { namespace, Draw } from '@/store/modules/draw';
import store from '../store';

@Component
export default class PeopleList extends Vue {
  @State((state) => state.people, { namespace }) public people!: Person[];
  @Mutation('addNewPerson', { namespace }) public addNewPerson!: void;
  @Mutation('updatePerson', { namespace }) public updatePerson!: void;
  @Mutation('removePerson', { namespace }) public removePerson!: void;
}
</script>

<style scoped lang='less'>
.people-list {
  .person {
    + .person {
      margin-block-start: 10px;
    }
  }
}
.add-person-btn {
  margin-block-start: 30px;
}
.remove-person-btn {
  margin-inline-start: 20px;
}
.form-element-inline {
  display: inline-block;
  + .form-element-inline {
    margin-inline-start: 20px;
  }
  > label {
    + input {
      margin-inline-start: 10px;
    }
  }
}
</style>
