<template>
  <div class="people-list">
    <div class="people-container">
      <div class="person" v-if="people.length == 0">Your list seems a little empty =(</div>
      <div class="person" v-for="(person, index) in people" :key="index">
        <div class="form-element-inline">
          <label :for="'input-name-'+index">Name</label>
          <input :id="'input-name-'+index" type="text" :value="person.Name" />
        </div>
        <div class="form-element-inline">
          <label :for="'input-whatsapp-'+index">Whatsapp</label>
          <input :id="'input-whatsapp-'+index" type="text" :value="person.Whatsapp" />
        </div>
        <div class="form-element-inline">
          <label :for="'input-email-'+index">E-mail</label>
          <input :id="'input-email-'+index" type="text" :value="person.EmailAddress" />
        </div>
        <button class="remove-person-btn" @click="removePerson(person, index)">- Remove</button>
      </div>
    </div>
    <button class="add-person-btn" @click="addPerson()">+ Add person</button>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import Person from '../models/Person';

@Component
export default class PeopleList extends Vue {
  private people: Person[] = [];

  public addPerson() {
    this.people.push(new Person());
  }

  public removePerson(person: Person, index: number) {
    this.people.splice(index, 1);
  }
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
