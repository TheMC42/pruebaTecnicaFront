<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">API</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            <li class="nav-item">
              <a class="nav-link" href="#">Paciente</a>
            </li>

          </ul>
          <form class="d-flex">
            <input class="form-control me-2" type="text" placeholder="Paciente" aria-label="Search" v-model="filter">
          </form>
        </div>
      </div>
    </nav>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <h3 class="p-3 text-center">Diagnostico Medico</h3>
        <table class="table table-striped table-bordered">
          <thead>
          <tr>
            <th>ID</th>
            <th>Paciente</th>
            <th>Descripcion</th>
            <th>Fecha de Agenda</th>
            <th>Fecha de Actualizacion</th>
          </tr>
          </thead>
          <tbody>
<!--          <tr v-for="diagnostico in diagnosticos" :key="diagnostico.id">-->
<!--            &lt;!&ndash;        <tr >&ndash;&gt;-->
<!--            <td>{{diagnostico.id}}</td>-->
<!--            <td>{{diagnostico.paciente.nombres}} {{diagnostico.paciente.apellidos}}</td>-->
<!--            <td>{{diagnostico.descripcion}}</td>-->
<!--            <td>{{diagnostico.createdAt}}</td>-->
<!--            <td>{{diagnostico.updatedAt}}</td>-->
<!--          </tr>-->
          <tr v-for="diagnostico in diagnosticos" :key="diagnostico.id">
            <td v-html="highlightMatches(diagnostico.id)"></td>
            <td v-html="highlightMatches(diagnostico.paciente.nombres)"></td>
            <td v-html="highlightMatches(diagnostico.descripcion)"></td>
            <td v-html="highlightMatches(diagnostico.createdAt)"></td>
            <td v-html="highlightMatches(diagnostico.updatedAt)"></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
<!--  <div class="container">-->
<!--    <div class="row">-->
<!--      <div class="col-md-12">-->
<!--        <h3 class="p-3 text-center">Citas Medicas</h3>-->
<!--        <table class="table table-striped table-bordered">-->
<!--          <thead>-->
<!--          <tr>-->
<!--            <th>ID</th>-->
<!--            <th>Paciente</th>-->
<!--            <th>Doctor</th>-->
<!--            <th>Fecha de Agenda</th>-->
<!--            <th>Fecha de Actualizacion</th>-->
<!--          </tr>-->
<!--          </thead>-->
<!--          <tbody>-->
<!--          <tr v-for="cita in citas" :key="cita.id">-->
<!--            &lt;!&ndash;        <tr >&ndash;&gt;-->
<!--            <td>{{cita.id}}</td>-->
<!--            <td>{{cita.paciente.nombres}} {{cita.paciente.apellidos}}</td>-->
<!--            <td>{{cita.doctor.nombres}} {{cita.doctor.apellidos}}</td>-->
<!--            <td>{{cita.createdAt}}</td>-->
<!--            <td>{{cita.updatedAt}}</td>-->
<!--          </tr>-->
<!--          </tbody>-->
<!--        </table>-->
<!--      </div>-->
<!--      &lt;!&ndash;    <nav aria-label="Page navigation example">&ndash;&gt;-->
<!--      &lt;!&ndash;      <ul class="pagination">&ndash;&gt;-->
<!--      &lt;!&ndash;        <li class="page-item"><a class="page-link" href="#">Previous</a></li>&ndash;&gt;-->
<!--      &lt;!&ndash;        <li class="page-item"><a class="page-link" href="#">1</a></li>&ndash;&gt;-->
<!--      &lt;!&ndash;        <li class="page-item"><a class="page-link" href="#">2</a></li>&ndash;&gt;-->
<!--      &lt;!&ndash;        <li class="page-item"><a class="page-link" href="#">3</a></li>&ndash;&gt;-->
<!--      &lt;!&ndash;        <li class="page-item"><a class="page-link" href="#">Next</a></li>&ndash;&gt;-->
<!--      &lt;!&ndash;      </ul>&ndash;&gt;-->
<!--      &lt;!&ndash;    </nav>&ndash;&gt;-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
/* eslint-disable */

export default {
  name: 'App',
  components: {},
  data(){
    return{
      filter: '',
      citas: [],
      diagnosticos: []
    }
  },
  methods: {
    async getCitas(){
      const API_URL = 'http://127.0.0.1:8000/api';
      const responseA = await fetch(`${API_URL}/citas`)
          .then(responseA => responseA.json())
      this.citas = responseA.data;
    },

    async getDiagnosticos(){
      const API_URL = 'http://127.0.0.1:8000/api';
      const responseB = await fetch(`${API_URL}/diagnosticos`)
          .then(responseB => responseB.json())
      this.diagnosticos = responseB.data;
    },
    highlightMatches(text) {
      const matchExists = text.toLowerCase().includes(this.filter.toLowerCase());
      if (!matchExists) return text;

      const re = new RegExp(this.filter, 'ig');
      // this.diagnosticos.filter( row => {
      //   const paciente = row.paciente.nombres.toString().toLowerCase();
      //   const descripcion = row.descripcion.toLowerCase();
      //   const searchTerm = this.filter.toLowerCase();
      //
      //   return paciente.includes(searchTerm) ||
      //       descripcion.includes(searchTerm);
      // });
      return text.replace(re, matchedText => `<strong>${matchedText}</strong>`);
    },
  },
  async created(){
    await this.getCitas();
    await this.getDiagnosticos();
  }

};

</script>

<style>

</style>
