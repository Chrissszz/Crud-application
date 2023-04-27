


$("#add_user").submit(function(event){
    alert("Data Inserted Successfully")
})

$("#update-user").submit(function(event){
    event.preventDefault();

    var unindexed_array=$(this).serializeArray();
    console.log(unindexed_array)
})
