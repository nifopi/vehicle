# server

## Project setup
```
npm install
obs: execute este commando dentro da pasta server
```


### Run your tests
```
node app
```

### get todos os dados
``````
http://url/table  

url= http://vehicle-com.umbler.net/
table= vehicle_type,vehicle
http://vehicle-com.umbler.net/vehicle   retorna todos os dados da tabela vehicle

    // função para usar api get
    static get(table) {
        return axios.get(`${url}${table}`).then((response) => {
            this.vehicle = response.data
            return response.data
        })

``````
### put todos os dados
``````
http://url/table,id 


url= http://vehicle-com.umbler.net/
table= vehicle_type,vehicle
id= 5d49abc97c23980011ce97bf
http://vehicle-com.umbler.net/vehicle,id  altera os dados da tabela vehicle no id 5d49abc97c23980011ce97bf

estrutura do bady:
	    {
        "name": "Amarok",
        "desc": "Volkswagen Amarok 3.0 V6 TDI DIESEL HIGHLINE EXTREME CD 4MOTION AUTOMÁTICO",
        "plate": "PWY-9889",
        "vehicle_type": "5d498b07ab469b14d0420bf5",
        "type": {
            "name": "Pick-up",
            "desc": "off-road"
        }
    }

    // função para usar api put
    static put(table, id,date) {
        return axios.put(`${url}${table},${id}`,date).then((response) => {
            this.vehicle = response.data
            return response.data
        })
    }

``````

### delete todos os dados
``````
http://url/table,id 

url= http://vehicle-com.umbler.net/
table= vehicle_type,vehicle
id= 5d49abc97c23980011ce97bf
http://vehicle-com.umbler.net/vehicle,id  delete os dados da tabela vehicle no id 5d49abc97c23980011ce97bf

``````
### post todos os dados
``````
http://url/ 

url= http://vehicle-com.umbler.net/

estrutura do bady:
	 { "table": "vehicle", "query":{
        "name": "Amarok",
        "desc": "Volkswagen Amarok 3.0 V6 TDI DIESEL HIGHLINE EXTREME CD 4MOTION AUTOMÁTICO",
        "plate": "PWY-9889",
        "vehicle_type": "5d498b07ab469b14d0420bf5",
        "type": {
            "name": "Pick-up",
            "desc": "off-road"
        }
    }
}

``````

### site exemplo

http://vehicle-com.umbler.net

