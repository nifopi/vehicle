<template >
<div id="vehicle_type">
  <header>
    <p>{{status}}</p>

    <table class="rTable">
      <tbody>
        <tr>
          <td>
            <label for="name">Name</label>
            <input
              type="text"
              name="cadastro.name"
              id="cadastro.name"
              v-model="cadastro.name"
              value
            />
          </td>
          <td>
            <label for="desc">Descrição</label>
            <input
              type="text"
              name="cadastro.desc"
              id="cadastro.desc"
              v-model="cadastro.desc"
              value
            />
          </td>
          <td>
            <button v-if="btn===true" type="submit" v-on:click="registrar"  style=" background-color: greenyellow;">Incluir</button>
            <button v-if="btn===false" type="submit" v-on:click="put" style="background-color: blue;">Alterar</button>
          </td>
          <td>
            <button type="submit" v-on:click="cancelar" style="background-color:red;">Cancela</button>
          </td>
          <td>
            <router-link to="/">
              <button type="submit">cadastro Veiculo</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </header>

  <body>
    <ul>
      <li v-for="item in vehicle_type" :key="item.id">
        <div style="  float: left;width:20%; ">{{ item.name }}</div>
        <div style="  float: left;width:30%;">{{ item.desc }}</div>
        <div style="  float: left;width:10%;">
          <button type="submit" v-on:click="alterar(item)" style="background-color: blue;">Alterar</button>
        </div>
        <div style="  float: left;width:10%;">
          <button type="submit" v-on:click="deleta(item)" style=" background-color: black;">Excluir</button>
        </div>
      </li>
    </ul>
  </body>
</div>
</template>

<script>
import PostService from "../postService";

export default {
  name: "vehicle_type",
  data() {
    return {
      // variavel de cadastro
      cadastro: {
        name: "",
        desc: ""
      },
      vehicle_type: "",
      status: "",
      btn: true
    };
  },
  created: function() {
    this.get();
  },
  methods: {
    async registrar() {
      // valida campo e-mail,senha enome
      if (this.cadastro.name === "" || this.cadastro.desc === "") {
        this.status = "todos os campso são  Obrigatórios";
      } else {
        await PostService.post({
          table: "vehicle_type",
          query: this.cadastro
        }).then(response => {
          this.get();
          this.cadastro = { name: "", desc: "" }; // zera campos cadastro
        });
      }
    },
    async get() {
      await PostService.get("vehicle_type").then(response => {
        this.vehicle_type = [];
        this.cadastro = { name: "", desc: "" };
        this.vehicle_type = response;
        this.btn = true;
      });
    },
    async deleta(iten) {
      await PostService.delete("vehicle_type", iten._id).then(response => {
        this.get();
      });
    },
    async put() {
      const id = this.cadastro._id;
      delete this.cadastro._id;
      await PostService.put("vehicle_type", id, this.cadastro).then(
        response => {
          this.get();
        }
      );
    },
    alterar(item) {
      this.cadastro = {
        name: item.name,
        desc: item.desc,
        _id: item._id
      };
      this.btn = false;
    },
    cancelar() {
      this.cadastro = { name: "", desc: "" };
      this.btn = true;
    }
  }
};
</script>

 <style >
/* Style the header */
header {
  background-color: blueviolet;
  padding: 1% 1%;
  color: white;
  text-align: center;

}

/* Clear floats after the header */
header:after {
  content: "";
  display: table;
  clear: both;
}
input {
  width: 100%;
  margin-bottom: 20px;
}
input[type="text"],
input[type="password"] {
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  height: 40px;
  color: black;
  font-size: 16px;
  border-radius: 5px;
}
select {
  width: 100%;
  margin-bottom: 20px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  height: 40px;
  color: black;
  font-size: 16px;
  border-radius: 5px;
}
button[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  background: yellowgreen;
  color: #fff;
  font-size: 18px;
  border-radius: 5px;
  width: 100%;
}

button[type="submit"]:hover {
  cursor: pointer;
  background: #ffc107;
  color: #000;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.content {
  display: flex;
  margin: auto;
}

.rTable {
  width: 100%;
  text-align: left;
}
.rTable thead {
  background: black;
  font-weight: bold;
  color: #fff;
}
.rTable tbody tr:nth-child(2n) {
  background: #ccc;
}
.rTable th,
.rTable td {
  padding: 2px 0;
}

@media screen and (max-width: 480px) {
  .content {
    width: 94%;
  }

  .rTable thead {
    display: none;
  }
  .rTable tbody td {
    display: flex;
    flex-direction: column;
  }
}

@media only screen and (min-width: 1200px) {
  .content {
    width: 100%;
  }
  .rTable tbody tr td:nth-child(1) {
    width: 20%;
  }
  .rTable tbody tr td:nth-child(2) {
    width: 20%;
  }
  .rTable tbody tr td:nth-child(3) {
    width: 20%;
  }
  .rTable tbody tr td:nth-child(4) {
    width: 20%;
  }
  .rTable tbody tr td:nth-child(4) {
    width: 20%;
  }
}
* {
  box-sizing: border-box;
}

/* Remove margins and padding from the list */
ul {
  margin: 0;
  padding: 0;
}
/* Style the list items */
ul li {
  cursor: pointer;
  position: relative;
  padding: 12px 8px 12px 40px;
  background: #eee;
  font-size: 18px;
  transition: 0.2s;

  /* make the list items unselectable */
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Set all odd list items to a different color (zebra-stripes) */
ul li:nth-child(odd) {
  background: #f9f9f9;
}

/* Darker background-color on hover */
ul li:hover {
  background: #ddd;
}

/* When clicked on, add a background color and strike out text */
ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}

/* Add a "checked" mark when clicked on */
ul li.checked::before {
  content: "";
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}
</style>