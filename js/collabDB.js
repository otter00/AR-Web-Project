// var Database_Name = 'Collaboration';    
// var Version = 1.0;    
// var Text_Description = 'Collaboration info database';    
// var Database_Size = 2 * 1024 * 1024;    
// var dbObj = openDatabase(Database_Name, Version, Text_Description, Database_Size);    
// dbObj.transaction(function (tx) {    
//     tx.executeSql('CREATE TABLE IF NOT EXISTS Collab_Table(Name, Phone, Email, Message)');  
// });    

// const insertButton = document.querySelector('#btnInsert');
// insertButton.addEventListener('click', ()=>{
//     var name = document.getElementById("tbName").value;    
//     var phone = document.getElementById("tbPhone").value;  
//     var email = document.getElementById("tbEmail").value;  
//     var message = document.getElementById("tbMessage").value;    
//     dbObj.transaction(function (tx) {    
//         tx.executeSql('insert into Collab_Table(Name, Phone, Email, Message) values(' + name + ',"' + phone + '","' + email + '","' + message + '")');    
//     }); 
// });  


var Database_Name = 'Collab_Table_DB';    
var Version = 1.0;    
var Text_Description = 'Collab us';    
var Database_Size = 2 * 1024 * 1024;    
var dbObj = openDatabase(Database_Name, Version, Text_Description, Database_Size);    
dbObj.transaction(function (tx) {    
    tx.executeSql('CREATE TABLE IF NOT EXISTS Collab_Table(Name, Phone, Email, Message)');  
});    

const insertButton = document.querySelector('#btnInsert');
insertButton.addEventListener('click', ()=>{
    var name = document.getElementById("tbName").value;    
    var phone = document.getElementById("tbPhone").value;  
    var email = document.getElementById("tbEmail").value;  
    var message = document.getElementById("tbMessage").value;   

    dbObj.transaction(function (tx) {    
        tx.executeSql('insert into Collab_Table(Phone, Email, Message, Name) values(' + phone + ',"' + email + '","' + message + '","' + name + '")');    
    }); 

    console.log(`${name}, ${phone}, ${email}, ${message}`);
});  

dbObj.transaction(function (tx) {    
    tx.executeSql('SELECT * FROM Collab_Table', [], function (tx, results) {    
        var len = results.rows.length, i;    
        var str = '';    
        for (i = 0; i < len; i++) {    
        str += "<tr class=body__row>";    
        str += "<td>" + results.rows.item(i).Name + "</td>";    
        str += "<td>" + results.rows.item(i).Phone + "</td>";    
        str += "<td>" + results.rows.item(i).Email + "</td>";   
        str += "<td>" + results.rows.item(i).Message + "</td>"; 
        str += "</tr>";    
        document.getElementById("tblGrid").innerHTML += str;    
        str = '';    
        }    
    }, null);    
});

// const deleteButton = document.querySelector('#btnDelete');
// deleteButton.addEventListener('click', ()=>{
//     var id = document.getElementById("tbID").value; 
//     dbObj.transaction(function(t) {
//         t.executeSql(`DELETE FROM Studios_Table WHERE id =${id}`);
//     });
// });
// deleteButton.addEventListener('click', ()=>{
//     var name = document.getElementById("tbName").value; 
//     dbObj.transaction(function(t) {
//         t.executeSql(`DELETE FROM Studios_Table WHERE Name =` + `"` + name + `"`);
//     });
// });
// deleteButton.addEventListener('click', ()=>{
//     var location = document.getElementById("tbLocation").value; 
//     dbObj.transaction(function(t) {
//         t.executeSql(`DELETE FROM Studios_Table WHERE Country =` + `"` + location + `"`);
//     });
// });

// dbObj.transaction(function (tx) {    
//     tx.executeSql('SELECT * FROM Studios_Table', [], function (tx, results) {    
//         var len = results.rows.length, i;    
//         var str = '';    
//         for (i = 0; i < len; i++) {    
//         str += "<tr>";    
//         str += "<td>" + results.rows.item(i).id + "</td>";    
//         str += "<td>" + results.rows.item(i).Name + "</td>";    
//         str += "<td>" + results.rows.item(i).Country + "</td>";    
//         str += "</tr>";    
//         document.getElementById("tblGrid").innerHTML += str;    
//         str = '';    
//         }    
//     }, null);    
// });

// const js__search = document.querySelector('.JS__search');
// js__search.addEventListener('click', ()=>{
//     const key = 'ky0szh7Fe527UsGkpuYyiN64Qc46WZCS';
//     const query = document.querySelector('.JS__search-input').value;
//     const search__container = document.querySelector('.search__container');

//     try {
//         if (query == '') {
//             throw new Error('Field is empty!');
//         }
//     } catch(error) {
//         console.log(error);
//     }

//     fetch(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${query}&limit=8&offset=0&rating=g&lang=en`)
//     .then(response => {
//         {
//             if (response.ok) {
//                 return response.json();
//             }
//             throw new Error('Address is unavailable :((( ');
//         }
//     })
//     .then(gif => {
//         for(let i = 0; i < gif.data.length; i++) {
//             const div = document.createElement('div');
//             div.className = "pics__container";
//             div.innerHTML = `<img src='${gif.data[i].images.fixed_height.url}' />`;
//             search__container.append(div);
//         }
//     })
//     .catch(error => alert(error))
//     .finally(console.log(`Work's done`));
// });