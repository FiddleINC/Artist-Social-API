# Artist Social API

## Introduction

Get the socials of any artist on earth in JSON format

## Installation

1. Fork the Repository
2. Clone the Repository
3. Install the dependicies using ``npm install`` or ``yarn install``
4. Run the server using ``npm start`` or ``yarn start``

## Usage

Just call a HTTP request 

```bash
curl -X GET "http://localhost:3000/socials?name=liluzivert" -H "Content-Type: application/json"
```

```javascript
//for axios
axios.get("http://localhost:3000/socials?name=liluzivert")
.then(response => {
    console.log(response.body)
}).catch(error => {
    console.error(error)
})
```